/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // статический экспорт: подходит для GitHub Pages / Netlify
  images: {
    unoptimized: true,     // next/image без сервера оптимизации при статическом экспорте
  },
  // Если деплоите на GitHub Pages в подпапку репозитория (username.github.io/repo),
  // раскомментируйте и подставьте имя репозитория:
  // basePath: '/mellow-coffee',
  // assetPrefix: '/mellow-coffee/',
};

module.exports = nextConfig;
