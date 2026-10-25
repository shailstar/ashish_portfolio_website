// Called by the booking page after Razorpay Checkout succeeds: checks the payment signature and confirms the slot.
import { checkoutSignatureValid, getRecord, markPaid } from "../lib/payments.mjs";

const fail = (status, error) => Response.json({ error }, { status });

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
  let body = null;
  try { body = await req.json(); } catch {}
  const { uid, razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = body || {};
  if (typeof uid !== "string" || !orderId || !paymentId) return fail(400, "Bad request");

  if (!checkoutSignatureValid(orderId, paymentId, signature)) return fail(400, "Payment could not be verified");
  const record = await getRecord(uid);
  if (record?.orderId !== orderId) return fail(400, "Payment does not match this booking");

  try {
    const result = await markPaid(uid, paymentId);
    return Response.json({ confirmed: !!result.confirmed, paymentId });
  } catch (e) {
    // Payment is recorded; the webhook or the 15-minute job retries the confirmation
    console.error(e);
    return Response.json({ confirmed: false, paymentId });
  }
};

export const config = { path: "/api/booking-verify" };
