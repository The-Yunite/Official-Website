import { Star } from 'lucide-react'
import React from 'react'

interface TestimonialProps {
    testimonial: {
    quote: string
    name: string
    rating: number
    }
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
    const { quote, name, rating } = testimonial;
    return (
        <div className="rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 pt-7 transition hover:shadow-xl hover:shadow-[#ff6b35]/30"
        >
            <span className="flex gap-1">{Array(rating).fill(<Star stroke="1" className=" fill-yellow-400 mb-3" />)}</span>
            <p className="text-gray-700 italic mb-6">“{quote}”</p>
            <h4 className="text-black font-semibold">— {name}</h4>
        </div>
    )
}

export default Testimonial
