"use client"
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react'

interface CustomFormProps {
    showHeading: boolean;
    clasName: String;
}

const CustomForm = ({showHeading, clasName}: CustomFormProps) => {

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
        <div className={` text-black font-semibold ${clasName} `}>
            <h2 className={`text-3xl font-bold w-lg pb-8 ${!showHeading && "hidden"}`}>Send us a Message</h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-3 px-8 font-semibold hover:shadow-xl hover:brightness-110 transition inline-flex items-center gap-2 justify-center"
              >
                Send Message <ArrowUpRight size={20} />
              </button>
            </form>
        </div>
    )
}

export default CustomForm
