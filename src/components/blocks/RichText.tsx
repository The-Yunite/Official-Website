import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'

export const RichText = ({ content }: { content: any }) => {
  if (!content) return null

  return (
    <div className="prose lg:prose-xl mx-auto my-8"> 
      {/* 'prose' is a Tailwind class that makes text look good automatically */}
      <PayloadRichText data={content} />
    </div>
  )
}