import { Block } from 'payload'

export const GridBlock: Block = {
  slug: 'grid',
  fields: [
    { name: 'title', type: 'text' }, // "Our Core Services"
    { name: "style", type: 'code' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      // maxRows: 6,
      fields: [
        { name: 'icon', type: 'text' }, // e.g., "code", "mobile"
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
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
      ],
    },
  ],
}