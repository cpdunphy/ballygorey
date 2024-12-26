export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/experience/content/${slug}.mdx`)

  return <Post />
}

export async function generateStaticParams() {
  const slugs = ['test', 'secatvt', 'tenable']
  return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false
