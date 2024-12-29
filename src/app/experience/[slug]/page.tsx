import { promises as fs } from 'fs'
import path from 'path'
import experiences from '@/data/workExperiences.json'
import TechChips from '../TechChips'
import Link from 'next/link'
import { formatDateString } from '../utils'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/experience/content/${slug}.mdx`)

  const details = experiences.find((experience) => experience.id === slug)

  return (
    <div className="space-y-4">
      {/* Title */}
      {details && (
        <h1 className="text-4xl font-bold">
          {details?.role} @{' '}
          <Link href={details?.url} className="hover:text-teal-500">
            {details?.company}
          </Link>
        </h1>
      )}

      {/* Dates */}
      {details?.startDate && (
        <h3>
          {`${formatDateString(details.startDate)} — ${
            details.endDate ? formatDateString(details.endDate) : 'Present'
          }`}
        </h3>
      )}

      {/* Skills */}
      {details?.skills && <TechChips skills={details.skills} />}

      <hr className="my-4" />

      <Post />
    </div>
  )
}

export async function generateStaticParams() {
  // Read all files content directory
  const contentDir = path.join(process.cwd(), 'src/app/experience/content')
  const files = await fs.readdir(contentDir)

  // Extract slugs by removing the file extensions
  const slugs = files
    .filter((file) => file.endsWith('.mdx')) // Ensure only MDX files are processed
    .map((file) => file.replace(/\.mdx$/, ''))

  // Return the slugs in param format
  return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false
