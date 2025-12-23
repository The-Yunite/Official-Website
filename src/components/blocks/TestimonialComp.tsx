import React from 'react'
import Testimonial from '../Testimonial'

const TestimonialComp = ({ title, cards, description}: any) => {
    return (
        <section id='testimonials' className="w-full mx-auto md:w-5/6 my-16 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-bold text-5xl text-black">{title}</h2>
                <p className="text-gray-700 my-5 font-semibold text-xl">
                    {description}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 text-left">
                {cards.map((card: any, idx: any) => (
                    <Testimonial key={idx} testimonial={card.testimonial}></Testimonial>
                ))}
            </div>
        </section>
    )
}

export default TestimonialComp
