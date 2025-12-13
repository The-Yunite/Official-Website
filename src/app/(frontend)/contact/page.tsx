"use client"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import CustomForm from "@/components/CustomForm"

export default function ContactPage() {
  return (
    <main className="px-10 pt-32 flex flex-col items-center min-h-screen overflow-hidden font-semibold pb-40">
      
      {/* Hero Section */}
      <section className="w-full text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-shadow-lg text-black">
          Get in <span className="bg-[#b9ff66] px-3 py-1 rounded-xl">Touch</span>
        </h1>
        <p className="mt-6 text-gray-700 text-lg md:text-xl">
          Have questions about Yunyt, events, or collaborations? We're here to help!
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full flex justify-center gap-20 flex-wrap md:flex-nowrap">
        {/* Contact Info */}
        <div className="max-w-md flex flex-col gap-6">
          {[
            { icon: <MapPin />, title: "Office", detail: "New Delhi, India" },
            { icon: <Mail />, title: "Email", detail: "weareyunyt@gmail.com" },
            { icon: <Phone />, title: "Phone", detail: "+91 9643748904" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 border border-black/10 shadow-lg hover:shadow-[#ff6b35]/40 transition"
            >
              <span className="rounded-full p-3 bg-[#b9ff66] text-black shadow">
                {item.icon}
              </span>
              <div>
                <p className="font-bold text-black">{item.title}</p>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl bg-white/70 border border-black/10 shadow-lg p-10 hover:shadow-[#ff6b35]/40 transition">
          <CustomForm clasName={'flex flex-col gap-6 w-full'} showHeading={true}/>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 w-full text-center">
        <div>
          <h2 className="font-bold text-5xl text-shadow-xs py-2 px-4 bg-[#b9ff66] inline-block rounded-xl text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-700 text-xl">
            Find answers to the most common questions about Yunyt.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-3/4 mx-auto mt-12 text-left"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold text-black hover:text-[#ff6b35] transition">
              Product Information
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-black hover:text-[#ff6b35] transition">
              Shipping Details
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-black hover:text-[#ff6b35] transition">
              Return Policy
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
