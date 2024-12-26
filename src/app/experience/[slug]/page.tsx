import { promises as fs } from 'fs'
import path from 'path'
import experiences from '@/data/workExperiences.json'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/experience/content/${slug}.mdx`)

  const details = experiences.find((experience) => experience.id === slug)

  return (
    <article className="prose max-w-none dark:prose-invert">
      <h1>{details?.company}</h1>
      <p>{details?.description}</p>
      <Post />
    </article>
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
