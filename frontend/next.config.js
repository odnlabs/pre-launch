/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.opendevnet.com',
      'opendevnet.com',
      'localhost',
      'avatars.githubusercontent.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
