import { siteConfig } from '@/shared/config/site';
import { BookingFormValues } from '@/shared/lib/validators';

/**
 * Отправляет заявку на бронирование в Cloudflare Worker,
 * который пересылает её в Telegram (см. /cloudflare-worker/worker.js).
 * Токен бота и chat_id НИКОГДА не хранятся в коде фронтенда —
 * они заданы как секреты внутри воркера.
 */
export async function sendBooking(values: BookingFormValues): Promise<void> {
  const response = await fetch(siteConfig.bookingWorkerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`Booking worker responded with ${response.status}`);
  }
}
