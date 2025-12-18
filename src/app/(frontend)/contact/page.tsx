"use client";

import React, { useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Faqs from '@/components/Faqs';
import axios from 'axios';
import { validatePhone } from '@/components/CheckPhone';

export default function ContactPage() {

  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone, setphone] = useState<string>("")
  const [message, setmessage] = useState<string>("")

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if(validatePhone(phone)) {
      setResult("Plase enter a valid phone number")
      return
    }
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/form-submissions`, {
        form: process.env.NEXT_PUBLIC_CONTACT_FORM_RESP,
        submissionData: [
          { field: 'name', value: name },
          { field: 'email', value: email },
          { field: 'phone', value: phone },
          { field: 'message', value: message },
        ],

      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)

      const confirmMssage = response.data.doc.form.confirmationMessage.root.children[0].children[0].text;

      if (response.status === 201) {
        setResult(confirmMssage);
        e.target.reset();
        setfirstName("");
        setlastName("");
        setemail("");
        setphone("");
        setmessage("");
      } else {
        setResult("❌ Something went wrong. Please try again later.");
      }
    } catch (err) {
      setResult("❌ Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 flex items-center justify-center flex-col px-8 font-sans text-gray-800">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col justify-between h-full pt-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Contact Us</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
              Email, call, or complete the form and ask anything about Yunyt, events, or collaborations. We’re here to help!
            </p>
            <div className="space-y-2 text-gray-700 font-medium">
              <Link href={'mailto:weareyunyt@gmail.com'} className='block decoration-gray-400 underline underline-offset-4'>weareyunyt@gmail.com</Link>
              <Link href={"tel:+919643748904"} className='block decoration-gray-400 underline underline-offset-4'>+91 9643748904</Link>
              <Link href={"tel:+919718301702"} className='block decoration-gray-400 underline underline-offset-4'>+91 9718301702</Link>
              <Link href="https://maps.app.goo.gl/7HAe9ddcZQAtNkoS8" className="block underline decoration-gray-400 underline-offset-4 hover:text-black transition-colors">
                Shaheen Bagh, New Delhi</Link>
            </div>
          </div>

          {/* Bottom Grid Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto pt-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our support team is available around the clock to address any concerns or queries you may have.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Feedback and Suggestions</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We value your feedback and are continuously working to improve Yunyt. Your input is crucial in shaping the future of Yunyt.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form Card */}
        <div className="bg-white rounded-3xl p-8 md:p-8 shadow-xl shadow-blue-100/50">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-500">You can reach us anytime</p>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First name"
                required
                value={firstName}
                onChange={(e)=> setfirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition-all"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition-all"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setemail(e.target.value)}
                placeholder="Your email"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
              {/* <div className="bg-gray-50 px-4 flex items-center border-r border-gray-200 cursor-pointer hover:bg-gray-100">
                <span className="text-gray-700 font-medium text-sm mr-1">+91</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div> */}
              <input
                type='tel'
                placeholder="Phone number"
                required
                value={phone}
                pattern="^\+?[0-9]{7,15}$"
                onChange={(e) => setphone(e.target.value)}
                className="w-full px-4 py-3 focus:outline-none placeholder-gray-300"
              />
            </div>

            {/* Text Area */}
            <div className="relative">
              <textarea
                rows={4}
                placeholder="How can we help?"
                required
                value={message}
                onChange={(e)  => setmessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} bg-[#92d8e8] hover:bg-[#66d3eb] text-white font-semibold py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-blue-600/20`}
            >
              Submit
            </button>
            <p>{result}</p>
            {/* Terms Footer */}
            <p className="text-center text-xs text-gray-500 mt-4 px-4">
              By contacting us, you agree to our <span className="text-gray-800 font-semibold cursor-pointer">Terms of service</span> and <span className="text-gray-800 font-semibold cursor-pointer">Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>
      <Faqs />
    </div>
  );
}
