import type { CollectionConfig } from 'payload'

export const Event: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
        name: 'Date',
        type: 'date',
        required: true,
    },
    {
        name: 'Location',
        type: 'text',
        required: true,
    },
    {
        name: 'Description',
        type: 'textarea',
        required: false,
    },
    {
        name: 'Image',
        type: 'upload',
        relationTo: 'media',
        required: false,
    }
  ],
}
