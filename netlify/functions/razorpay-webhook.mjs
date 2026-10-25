// Razorpay webhook (event: order.paid). Confirms the booking even if the patient closed the page right after paying.
// In Razorpay: Settings > Webhooks > URL https://drashishyadav.com/api/razorpay-webhook, event order.paid,
// with the secret saved as RAZORPAY_WEBHOOK_SECRET.
import { webhookSignatureValid, getRecord, markPaid } from "../lib/payments.mjs";

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
  const raw = await req.text();
  if (!webhookSignatureValid(raw, req.headers.get("x-razorpay-signature"))) {
    return new Response("Bad signature", { status: 400 });
  }

  const event = JSON.parse(raw);
  if (event.event !== "order.paid") return new Response(null, { status: 204 });
  const order = event.payload?.order?.entity;
  const payment = event.payload?.payment?.entity;
  const uid = order?.notes?.booking_uid;
  // Payments from the old Razorpay payment pages carry no booking: nothing to do
  if (!uid) return new Response(null, { status: 204 });

  const record = await getRecord(uid);
  if (record?.orderId !== order.id) return new Response(null, { status: 204 });
  // Throwing returns a 500, so Razorpay retries later
  await markPaid(uid, payment?.id);
  return new Response(null, { status: 204 });
};

export const config = { path: "/api/razorpay-webhook" };
