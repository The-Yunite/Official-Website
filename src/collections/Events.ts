import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique:true
    },
    {
      name: 'status',
      type: 'text',
      required: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      required: true,
      defaultValue:false
    },
    {
      name: 'participantsCount',
      type: 'number',
      required: false,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
      required: true,
    },
    {
      name: 'action',
      type: 'group',
      fields: [
        {
          name: "href",
          type: "text",
        },
        {
          name: "label",
          type: "text",
        }
      ]
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
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
