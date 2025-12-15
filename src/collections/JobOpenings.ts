import type { CollectionConfig } from 'payload'

export const JobOpenings: CollectionConfig = {
    slug: 'jobOpenings',
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
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: "icon",
            type: 'text'
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
    ],
}
