import { MapPin } from 'lucide-react'
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
    return (
        <div className='px-10 pt-20 flex flex-col items-center min-h-screen overflow-hidden font-semibold'>
            <section className='w-full flex justify-between'>
                <div>
                    <p>Get in Touch</p>
                    <p>Have questions about Yunyt, events, or collaborations? We're here to help!</p>
                    <ul className='flex flex-col gap-4 py-3'>
                        <li className='flex items-center gap-4'>
                            <span className='rounded-full p-3 glassEffect backdrop-blur-lg'><MapPin /></span>
                            <span>
                                <p>Office</p>
                                <p className='text-gray-300'>New Delhi, India</p>
                            </span>
                        </li>
                        <li className='flex items-center gap-4'>
                            <span className='rounded-full p-3 glassEffect backdrop-blur-lg'><MapPin /></span>
                            <span>
                                <p>Office</p>
                                <p className='text-gray-300'>New Delhi, India</p>
                            </span>
                        </li>
                        <li className='flex items-center gap-4'>
                            <span className='rounded-full p-3 glassEffect backdrop-blur-lg'><MapPin /></span>
                            <span>
                                <p>Office</p>
                                <p className='text-gray-300'>New Delhi, India</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div></div>
            </section>
            <section className='my-10 w-full'>
                <p className='text-center text-shadow-lg font-bold text-5xl my-5'>Frequently Asked Questions</p>
                <p className='text-center text-gray-300 text-shadow-md text-xl'>Find answers to the most common questions about Yunite.</p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-3/4 mx-auto"
                    // defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Product Information</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>
                            <p>
                                Key features include advanced processing capabilities, and an
                                intuitive user interface designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Shipping Details</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Return Policy</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    )
}