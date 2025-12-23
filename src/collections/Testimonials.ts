import type { Block, CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: { useAsTitle: 'name' },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'quote',
            type: 'textarea',
            required: true,
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'rating',
            type: 'number',
            required: true,
            min: 1,
            max: 5,
        },
        {
            name: 'isFeatured',
            type: 'checkbox',
            required: true,
            defaultValue: true
        },
    ],
}

export const TestimonialBlock: Block = {
    slug: 'testimonialBlock',
    fields: [
        { name: 'title', type: 'text' },
        { name: "description", type: 'textarea' },
        {
            name: 'cards',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    name: 'testimonial',
                    type: 'relationship',
                    //@ts-ignore
                    relationTo: 'testimonials',
                    required: true,
                },
            ],
        }
    ],
}