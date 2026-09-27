export const siteConfig = {
  name: 'Mellow Coffee',
  tagline: 'Уютная кофейня с обжаркой под себя, мягким светом и напитками без спешки',
  address: 'Москва, ул. Тихая, 12',
  phone: '+7 (999) 123-45-67',
  instagram: '@mellow.coffee',
  hours: [
    { day: 'Понедельник — Пятница', time: '8:00 — 20:00' },
    { day: 'Суббота — Воскресенье', time: '9:00 — 21:00' },
  ],
  navLinks: [
    { href: '#hero', label: 'Главная' },
    { href: '#menu', label: 'Меню' },
    { href: '#about', label: 'О нас' },
    { href: '#space', label: 'Пространство' },
    { href: '#visit', label: 'Визит' },
  ],
  // URL встраиваемой карты (Яндекс.Карты, построено по координатам метки).
  // Формат: ll = долгота,широта (центр карты), pt = долгота,широта,иконка (метка).
  // Если переедете — возьмите новые координаты через ПКМ на карте → «Что здесь» на yandex.ru/maps.
  mapEmbedUrl:
    'https://yandex.ru/map-widget/v1/?ll=37.255399%2C55.430947&z=16&pt=37.255399%2C55.430947%2Cpm2rdm',

  // URL Cloudflare Worker, который пересылает заявку в Telegram.
  // Замените на адрес вашего задеплоенного воркера, например:
  // https://mellow-coffee-booking.<ваш-аккаунт>.workers.dev
  bookingWorkerUrl: 'https://REPLACE_WITH_YOUR_WORKER_URL.workers.dev',
};
