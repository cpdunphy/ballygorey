/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/calendar",
        destination: "https://fantastical.app/cpdunphy/general",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
