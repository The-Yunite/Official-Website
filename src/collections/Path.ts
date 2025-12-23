import { Block } from 'payload'

export const PathBlock: Block = {
  slug: 'path',
  fields: [
    { name: 'title', type: 'text' },
    { name: "style", type: 'code' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      // maxRows: 6,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}