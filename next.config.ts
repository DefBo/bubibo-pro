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
        source: '/veterinarians',
        destination: '/veterinarians/en',
        permanent: false,
      },
      {
        source: '/groomers',
        destination: '/groomers/en',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:site(veterinarians|groomers)/:lang',
        destination: '/site/:site/:lang',
      },
    ];
  },
};

export default nextConfig;
