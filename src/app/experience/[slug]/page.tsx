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
  const slugs = ['test', 'secatvt', 'tenable']
  return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false
