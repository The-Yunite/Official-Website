import { GridBlock } from '@/collections/Grid'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { TestimonialBlock } from './Testimonials'

export const ServicePages: CollectionConfig = {
  slug: 'servicePages',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        GridBlock,
        TestimonialBlock,
        {
          slug: 'content', // NEW: Rich Text Block
          fields: [
            {
              name: 'richText',
              type: 'richText',
              editor: lexicalEditor({}), // Uses the modern Lexical editor
            },
          ],
        },
        // You can add a 'contentBlock' here later for text/images
      ],
    },
  ],
}