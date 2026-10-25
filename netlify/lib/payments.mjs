// Shared server code for paying for a Cal.com booking with Razorpay.
// Flow: patient books a slot (Cal.com event set to "Requires confirmation", so it starts as pending),
// pays a Razorpay order for that booking, and the payment confirms the booking.
// Env vars: CAL_API_KEY, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET
import { createHmac, timingSafeEqual } from "node:crypto";
import { getStore } from "@netlify/blobs";
import { SESSION_TYPES, MODES, HOLD_HOURS, durationsFor, priceFor, minutesFor, calUrlFor } from "../../src/data/booking.js";

// Unpaid bookings are released after this long
export const HOLD_MS = HOLD_HOURS * 60 * 60 * 1000;

const env = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var ${name}`);
  return value;
};

// ---- Cal.com ----
const cal = async (path, options = {}) => {
  const res = await fetch(`https://api.cal.com/v2${path}`, {
    ...options,
    headers: {
      authorization: `Bearer ${env("CAL_API_KEY")}`,
      "cal-api-version": "2024-08-13",
      "content-type": "application/json",
    },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Cal.com ${path} ${res.status}: ${JSON.stringify(body)}`);
  return body.data;
};

export const getBooking = (uid) => cal(`/bookings/${encodeURIComponent(uid)}`);
export const listPendingBookings = () => cal("/bookings?status=unconfirmed&take=100");
const confirmBooking = (uid) => cal(`/bookings/${encodeURIComponent(uid)}/confirm`, { method: "POST" });
export const declineBooking = (uid, reason) =>
  cal(`/bookings/${encodeURIComponent(uid)}/decline`, { method: "POST", body: JSON.stringify({ reason }) });

// The session (and so the price) a Cal.com event belongs to, worked out from its slug
export const sessionForBooking = (booking) => {
  const slug = booking?.eventType?.slug;
  if (!slug) return null;
  for (const t of SESSION_TYPES) {
    for (const m of MODES) {
      for (const d of durationsFor(t.id).length ? durationsFor(t.id) : [null]) {
        if (calUrlFor(t.id, m.id, d).endsWith(`/${slug}`)) {
          const label = [t.label, m.label, `${minutesFor(t.id, d)} min`].join(" · ");
          return { type: t.id, mode: m.id, duration: d, label, price: priceFor(t.id, m.id, d) };
        }
      }
    }
  }
  return null;
};

// ---- Razorpay ----
export const razorpayKeyId = () => env("RAZORPAY_KEY_ID");

export const createOrder = async ({ amount, receipt, notes }) => {
  const auth = Buffer.from(`${env("RAZORPAY_KEY_ID")}:${env("RAZORPAY_KEY_SECRET")}`).toString("base64");
  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: { authorization: `Basic ${auth}`, "content-type": "application/json" },
    body: JSON.stringify({ amount, currency: "INR", receipt, notes }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Razorpay order ${res.status}: ${JSON.stringify(body)}`);
  return body;
};

const signatureMatches = (payload, secret, signature) => {
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(String(signature || ""));
  return a.length === b.length && timingSafeEqual(a, b);
};

// Signature Razorpay Checkout returns after a successful payment
export const checkoutSignatureValid = (orderId, paymentId, signature) =>
  signatureMatches(`${orderId}|${paymentId}`, env("RAZORPAY_KEY_SECRET"), signature);

// Signature on Razorpay webhook calls, over the raw request body
export const webhookSignatureValid = (rawBody, signature) =>
  signatureMatches(rawBody, env("RAZORPAY_WEBHOOK_SECRET"), signature);

// ---- Payment records, one per booking uid ----
// { orderId, amount, createdAt, paymentId?, paidAt?, confirmed? }
const store = () => getStore("booking-payments");
export const getRecord = (uid) => store().get(uid, { type: "json" });
export const setRecord = (uid, record) => store().setJSON(uid, record);

// Records the payment, then confirms the Cal.com booking. Safe to call more than once.
export const markPaid = async (uid, paymentId) => {
  const record = (await getRecord(uid)) || {};
  if (record.confirmed) return record;
  if (!record.paymentId) {
    record.paymentId = paymentId;
    record.paidAt = Date.now();
    await setRecord(uid, record);
  }
  const booking = await getBooking(uid);
  if (booking.status === "pending") await confirmBooking(uid);
  // Paid for a booking that was already released or cancelled: needs a manual refund or rebooking
  record.confirmed = booking.status === "pending" || booking.status === "accepted";
  if (!record.confirmed) console.error(`Paid booking ${uid} is ${booking.status}; payment ${record.paymentId}`);
  await setRecord(uid, record);
  return record;
};
