import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ua',
        permanent: false,
      },
      {
        source: '/veterinarians',
        destination: '/veterinarians/ua',
        permanent: false,
      },
      {
        source: '/groomers',
        destination: '/groomers/ua',
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
