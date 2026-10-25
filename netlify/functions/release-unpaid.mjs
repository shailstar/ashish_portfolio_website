// Runs every 15 minutes: declines pending Cal.com bookings left unpaid for 2 hours, freeing the slot.
// Paid bookings whose confirmation failed earlier are confirmed here instead.
// Direct UPI bookings stay pending too: confirm them in Cal.com within 2 hours, or they are released.
import { HOLD_MS, listPendingBookings, sessionForBooking, declineBooking, getRecord, markPaid } from "../lib/payments.mjs";

const REASON = "Payment was not received within 2 hours, so this slot has been released. You are welcome to book again.";

export default async () => {
  const pending = (await listPendingBookings()) || [];
  for (const booking of pending) {
    // Only the consultation calendars on the booking page
    if (!sessionForBooking(booking)) continue;
    try {
      const record = await getRecord(booking.uid);
      if (record?.paymentId) {
        await markPaid(booking.uid, record.paymentId);
      } else if (Date.now() - Date.parse(booking.createdAt) > HOLD_MS) {
        await declineBooking(booking.uid, REASON);
      }
    } catch (e) {
      console.error(`release-unpaid ${booking.uid}`, e);
    }
  }
};

export const config = { schedule: "*/15 * * * *" };
