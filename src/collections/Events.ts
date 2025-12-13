import type { CollectionConfig } from 'payload'

export const Event: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'text',
      required: true,
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
      required: true,
      fields: [
        {
          name: "href",
          type: "text",
          required: true
        },
        {
          name: "label",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    }
  ],
}
