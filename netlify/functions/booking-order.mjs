// Creates the Razorpay order for a booking the patient just made on Cal.com.
// The price comes from the booked event, never from the browser.
import {
  HOLD_MS, getBooking, sessionForBooking, createOrder, razorpayKeyId, getRecord, setRecord,
} from "../lib/payments.mjs";

const UID = /^[A-Za-z0-9_-]{6,64}$/;
const fail = (status, error) => Response.json({ error }, { status });

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
  let body = null;
  try { body = await req.json(); } catch {}
  const uid = body?.uid;
  if (typeof uid !== "string" || !UID.test(uid)) return fail(400, "Bad booking reference");

  let booking;
  try { booking = await getBooking(uid); } catch (e) {
    console.error(e);
    return fail(404, "Booking not found");
  }
  const existing = await getRecord(uid);
  if (existing?.paymentId) return fail(409, "already-paid");
  // Accepted without payment means the event is missing "Requires confirmation" in Cal.com
  if (booking.status === "accepted") {
    console.error(`Booking ${uid} was accepted before payment: turn on "Requires confirmation" for its event`);
    return fail(400, "Online payment is not available for this calendar yet. Please pay by direct UPI.");
  }
  if (booking.status !== "pending") return fail(410, "This slot is no longer held. Please pick a new time.");

  const session = sessionForBooking(booking);
  if (!session) return fail(400, "This calendar is not set up for online payment");

  const amount = session.price * 100;
  const details = { keyId: razorpayKeyId(), amount, label: session.label, start: booking.start };

  // Reuse the order if the patient retries payment for the same booking
  if (existing?.orderId && existing.amount === amount) return Response.json({ ...details, orderId: existing.orderId });

  const attendee = booking.attendees?.[0] || {};
  const order = await createOrder({
    amount,
    receipt: uid.slice(0, 40),
    notes: { booking_uid: uid, session: session.label, slot: booking.start, name: attendee.name || "" },
  });
  await setRecord(uid, { orderId: order.id, amount, createdAt: Date.now() });

  return Response.json({
    ...details,
    orderId: order.id,
    name: attendee.name || "",
    email: attendee.email || "",
    holdUntil: new Date(booking.createdAt ? Date.parse(booking.createdAt) + HOLD_MS : Date.now() + HOLD_MS).toISOString(),
  });
};

export const config = { path: "/api/booking-order" };
