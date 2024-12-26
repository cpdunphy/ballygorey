export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post } = await import(`@/app/experience/content/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return [{ slug: 'test' }, { slug: 'secatvt' }, { slug: 'tenable' }]
}

export const dynamicParams = false
