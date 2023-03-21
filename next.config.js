/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
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
