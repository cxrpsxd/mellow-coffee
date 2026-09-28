/**
 * Cloudflare Worker: принимает JSON заявки на бронирование с сайта
 * и пересылает её сообщением в Telegram-чат через Bot API.
 *
 * Секреты (задаются через `wrangler secret put`, НЕ хранятся в коде):
 *   TELEGRAM_BOT_TOKEN — токен бота, полученный у @BotFather
 *   TELEGRAM_CHAT_ID    — id чата/группы, куда слать заявки
 *
 * Разрешённый источник запросов ограничен через ALLOWED_ORIGIN (CORS).
 */

const ALLOWED_ORIGIN = 'https://mellow-coffee.netlify.app';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400, headers: corsHeaders() });
    }

    const { name, phone, date, time, guests, notes } = body ?? {};

    if (!name || !phone || !date || !time || !guests) {
      return new Response('Missing required fields', { status: 400, headers: corsHeaders() });
    }

    const text =
      `☕ <b>Новая бронь — Mellow Coffee</b>\n\n` +
      `<b>Имя:</b> ${escapeHtml(name)}\n` +
      `<b>Телефон:</b> ${escapeHtml(phone)}\n` +
      `<b>Дата:</b> ${escapeHtml(date)}\n` +
      `<b>Время:</b> ${escapeHtml(time)}\n` +
      `<b>Гостей:</b> ${escapeHtml(guests)}\n` +
      (notes ? `<b>Пожелания:</b> ${escapeHtml(notes)}\n` : '');

    const tgResponse = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      },
    );

    if (!tgResponse.ok) {
      const errText = await tgResponse.text();
      return new Response(`Telegram error: ${errText}`, { status: 502, headers: corsHeaders() });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
    });
  },
};
