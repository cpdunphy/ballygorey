/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/secatvt',
        destination: 'https://sec.vt.edu/collin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
