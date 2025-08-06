import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
      {
        source: '/product',
        destination: '/product/en',
        permanent: false,
      },
      {
        source: '/saas',
        destination: '/saas/en',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:site(product|saas)/:lang',
        destination: '/site/:site/:lang',
      },
    ];
  },
};

export default nextConfig;
