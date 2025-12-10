"use client"
import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {

    const [result, setResult] = useState("");
    const [isSuccess, setIsSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async () => {
        // event.preventDefault();
        // setIsSubmitting(true);
        // setResult("Sending...");
        // const formData = new FormData(event.target);

        // try {
        //     const response = await axios.post(sendMessageApiEndPoint, formData, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     const apiResponse = await response.data;
        //     if (apiResponse.success) {
        //         setIsSuccess(true);
        //         setResult("✅ Your message has been sent successfully!");
        //         toast.success("Your message has been sent successfully!")
        //         event.target.reset();
        //     } else {
        //         setIsSuccess(false);
        //         setResult(apiResponse.error || "❌ Something went wrong. Please try again later.");
        //         toast.error(apiResponse.error || "Something went wrong. Please try again later.")
        //     }
        // } catch (err) {
        //     setIsSuccess(false);
        //     setResult(err.response?.data?.error || "❌ Network error. Please check your connection.");
        //     toast.error(err.response?.data?.error || "Network error. Please check your connection.")
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    return (
        <div className='px-10 pt-24 flex flex-col items-center min-h-screen overflow-hidden font-semibold'>
            <section className='w-full flex justify-between'>
                <div>
                    <p className='text-3xl font-bold mb-2'>Get in Touch</p>
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
                            <span className='rounded-full p-3 glassEffect backdrop-blur-lg'><Mail /></span>
                            <span>
                                <p>Email</p>
                                <p className='text-gray-300'>weareyunyt@gmail.com</p>
                            </span>
                        </li>
                        <li className='flex items-center gap-4'>
                            <span className='rounded-full p-3 glassEffect backdrop-blur-lg'><Phone /></span>
                            <span>
                                <p>Phone</p>
                                <p className='text-gray-300'>+91 9643748904</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className="text-3xl font-bold w-md py-8">Send us a Message</h2>
                    <form onSubmit={onSubmit} className="space-y-6 -md">
                        {/* Name */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your message..."
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg transition font-medium"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {/* Result */}
                        {result && (
                            <p
                                className={`mt-4 text-center p-3 rounded-xl ${isSuccess
                                    ? "bg-green-600/20 text-green-300 border border-green-500/30"
                                    : "bg-red-600/20 text-red-300 border border-red-500/30"
                                    }`}
                            >
                                {result}
                            </p>
                        )}
                    </form>
                </div>
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