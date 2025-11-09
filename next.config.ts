import type { NextConfig } from 'next';

const dev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  basePath: dev ? '' : '/skypro-music',
  assetPrefix: dev ? '' : '/skypro-music',
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: dev ? '' : '/skypro-music',
  },
};

export default nextConfig;
