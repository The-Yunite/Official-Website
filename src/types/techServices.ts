export default interface TechService {
    id: string
    title: string
    isFeatured: boolean
    description?: string
    subDescription?: string

    action?: {
        'Learn More Link'?: string
        'Get Quote Link'?: string
    }

    icon?: string

    image?: {
        Local?: {
            url: string
        }
        cloudinaryUrl?: string
    }
}
