import type { NextConfig } from 'next';

const dev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  distDir: 'out',
  basePath: dev ? '' : '/skypro-music',
  assetPrefix: dev ? '' : '/skypro-music',
  env: {
    BASE_PATH: dev ? '' : '/skypro-music',
    BASE_API: process.env.BASE_API,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  // async redirects() {
  //   return [{ source: '/', destination: '/playlist', permanent: true }];
  // },
};

export default nextConfig;
