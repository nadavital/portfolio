/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/challah',
        destination: 'https://cauldron-f900a.web.app/u/nadav/D93FCA73-EAFC-42D0-AA63-460A88D00515',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
