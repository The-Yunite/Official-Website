import type { CollectionConfig } from 'payload'

export const TechServices: CollectionConfig = {
  slug: 'techServices',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      required: true,
      defaultValue: false
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'subDescription',
      type: 'textarea',
    },
    {
      name: 'action',
      type: 'group',
      fields: [
        {
          name: "Learn More Link",
          type: "text",
        },
        {
          name: "Get Quote Link",
          type: "text",
        }
      ]
    },
    {
      name: "icon",
      type: 'text'
    },
    {
      name: "image",
      type: 'group',
      fields: [
        {
          name: 'Local',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'cloudinaryUrl',
          type: 'text',
        }
      ]
    }
  ],
}
