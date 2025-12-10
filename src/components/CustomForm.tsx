"use client"
import React, { useState } from 'react'

interface CustomFormProps {
    showHeading: boolean;
}

const CustomForm = ({showHeading}: CustomFormProps) => {

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
        <div className=''>
            <h2 className={`text-3xl font-bold w-lg pb-8 ${!showHeading && "hidden"}`}>Send us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-6 w-xs md:w-md">
                {/* Name */}
                <div>
                    <label className="block mb-2 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] transition"
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] transition"
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] transition"
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#f06d3eeb] hover:bg-[#e65a2d] shadow-lg transition font-medium"
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
    )
}

export default CustomForm
