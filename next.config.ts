import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shared.fastly.steamstatic.com', // Тот домен, на который ругается ошибка
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Тот домен, на который ругается ошибка
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'digital-basket-01.wbbasket.ru', // Тот домен, на который ругается ошибка
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net', // Тот домен, на который ругается ошибка
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.forza.net', // Тот домен, на который ругается ошибка
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.steamstatic.com',
      },
    ],
  },
};

export default nextConfig;
