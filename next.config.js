/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/secatvt',
        destination: 'https://sec.vt.edu/collin',
        permanent: true,
      },
      {
        source: '/resume',
        destination: 'CollinDunphy_Resume.pdf',
        permanent: true,
      },
      {
        source: '/calendar',
        destination: 'https://fantastical.app/cpdunphy/general',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
