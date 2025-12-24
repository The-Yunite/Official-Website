import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import BlurText from '@/components/BlurText'
import { RichText } from '@/components/blocks/RichText'
import { GridComponent } from '@/components/blocks/GridComp'
import TestimonialComp from '@/components/blocks/TestimonialComp'

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
    collection: 'servicePages',
    where: { slug: { equals: slug[slug.length - 1] } },
  })

  const page: any = result.docs[0]
  if (!page) return notFound()

  // 2. Render the layout blocks
  return (
    <main className="mx-auto py-24 text-center px-10">
      <section className="py-14 flex flex-col justify-center items-center text-center">
        <BlurText
          text={page.title}
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="text-4xl md:text-6xl font-extrabold text-shadow-lg text-black"
        />
        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-3xl">
          {page.description}
        </p>
      </section>
      {page.layout?.map((block: any, i: any) => {
        // Handle Rich Text Block
        if (block.blockType === 'content') {
          return <RichText key={i} content={block.richText} />
        }
        if (block.blockType === 'grid') {
          return <GridComponent key={i} title={block.title} style={block.style} cards={block.cards} />
        }
        if (block.blockType === 'testimonialBlock') {
          return (
            <TestimonialComp key={i} title={block.title} cards={block.cards} description={block.description} />
          )
        }
        return null
      })}
    </main>
  )
}