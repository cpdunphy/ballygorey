import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  // Keep the resume out of search engine results. The header works for PDFs
  // (which can't carry a <meta name="robots"> tag). Don't also block these
  // paths in robots.txt, or crawlers can't see the noindex and drop the file.
  headers: async () => {
    return [
      {
        source: '/CollinDunphy_Resume.pdf',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
      {
        source: '/resume',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
    ]
  },
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
