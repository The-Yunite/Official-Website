import type { CollectionConfig } from 'payload'

export const FormPages: CollectionConfig = {
  slug: 'formPages',
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
        {
          slug: 'formBlock',
          fields: [
            {
              name: 'form',
              type: 'relationship',
              //@ts-ignore
              relationTo: 'forms', // This connects to the plugin's collection
              required: true,
            },
          ],
        },
        // You can add a 'contentBlock' here later for text/images
      ],
    },
  ],
}