"use client"
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react'
import { validatePhone } from './CheckPhone';

interface CustomFormProps {
  showHeading: boolean;
  clasName: String;
}

const CustomForm = ({ showHeading, clasName }: CustomFormProps) => {

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("")
  const [message, setmessage] = useState("")

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (validatePhone(phone)) {
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
        setname("");
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
    <div className={` text-black font-semibold ${clasName} `}>
      <h2 className={`text-3xl font-bold w-lg pb-8 ${!showHeading && "hidden"}`}>Send us a Message</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
        <div>
          <label className="block text-sm font-bold text-black mb-2">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-black mb-2">Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-black mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            pattern="^\+?[0-9]{7,15}$"
            required
            onChange={(e) => setphone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-black mb-2">Message</label>
          <textarea
            placeholder="Write your message..."
            rows={4}
            required
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${isSubmitting && "cursor-not-allowed"} mt-4 cursor-pointer bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-3 px-8 font-semibold hover:shadow-xl hover:brightness-110 transition inline-flex items-center gap-2 justify-center`}
        >
          Send Message <ArrowUpRight size={20} />
        </button>
        <p>{result}</p>
      </form>
    </div>
  )
}

export default CustomForm
