import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  redirects: async () => {
    return [
      {
        source: '/secatvt',
        destination: 'https://sec.vt.edu/collin',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/CollinDunphy_Resume.pdf',
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

const withMDX = createMDX({
  // Add any MDX options here
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
