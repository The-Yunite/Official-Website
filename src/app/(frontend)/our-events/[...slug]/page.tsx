import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function Page({ params }: PageProps) {
  const payload = await getPayload({ config })
  const { slug } = await params

  // 1. Find the page in the database
  const result = await payload.find({
    //@ts-ignore
    collection: 'eventPages',
    where: { slug: { equals: slug[slug.length - 1] } },
  })

  const page :any = result.docs[0]
  if (!page) return notFound()

  // 2. Render the layout blocks
  return (
    <main className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-10">{page.title}</h1>
      <h2 className="text-xl font-bold text-center mb-10">{page.description}</h2>
      {page.layout?.map((block:any, i:any) => {

      })}
    </main>
  )
}