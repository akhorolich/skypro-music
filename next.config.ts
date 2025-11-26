import type { NextConfig } from 'next';

const dev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  distDir: 'out',
  basePath: dev ? '' : '/skypro-music',
  assetPrefix: dev ? '' : '/skypro-music',
  env: {
    BASE_PATH: dev ? '' : '/skypro-music',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
