"use client"
import { Mail, MapPin, Phone } from "lucide-react"
import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CustomForm from "@/components/CustomForm"

export default function ContactPage() {
  return (
    <main className="px-10 pt-32 flex flex-col items-center min-h-screen overflow-hidden font-semibold pb-40">
      
      {/* Hero Section */}
      <section className="w-full text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-extrabold text-black tracking-tight drop-shadow-sm">
          Let’s Connect
        </h1>
        <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Have questions about Yunyt, events, or collaborations? We’re here to help you create something extraordinary.
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full flex justify-center gap-16 flex-wrap md:flex-nowrap items-start">
        
        {/* Contact Info Cards */}
        <div className="max-w-md flex flex-col gap-8">
          {[
            { icon: <MapPin />, title: "Office", detail: "New Delhi, India" },
            { icon: <Mail />, title: "Email", detail: "weareyunyt@gmail.com" },
            { icon: <Phone />, title: "Phone", detail: "+91 9643748904" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative flex items-center gap-5 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient border aura */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#b9ff66]/40 via-white/20 to-[#ff6b35]/40 opacity-60 pointer-events-none"></div>
              <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-black to-gray-800 text-white shadow-xl z-10 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </span>
              <div className="z-10">
                <p className="font-bold text-black text-lg">{item.title}</p>
                {/* Changed detail color to lighter gray */}
                <p className="text-gray-300">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-[440px]">
          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-transparent shadow-lg p-10 hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl font-bold text-black mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6 text-sm">You can reach us anytime.</p>
            <CustomForm clasName={'flex flex-col gap-6 w-full'} showHeading={false}/>
            <p className="text-xs text-gray-500 mt-4">
              By contacting us, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Designer Map Section */}
      <section className="mt-24 w-full flex justify-center">
        <div className="w-3/4 h-[420px] rounded-3xl overflow-hidden shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.509!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1b5d1b5d1b%3A0x123456789abcdef!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          {/* Floating address overlay */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4">
            <p className="font-bold text-black">Yunyt HQ</p>
            <p className="text-gray-600 text-sm">New Delhi, India</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 w-full text-center">
        <div>
          <h2 className="font-bold text-5xl text-black tracking-tight">
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
            <AccordionTrigger className="font-semibold text-black hover:text-gray-900 transition">
              What is Yunyt?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                Yunyt is a youth-driven company offering digital solutions and event services for startups, businesses, and institutions.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-black hover:text-gray-900 transition">
              What services do you provide?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                We provide web solutions, business analysis, AI models, AI agents, automation, and event management services.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-black hover:text-gray-900 transition">
              Who do you work with?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                We collaborate with startups, businesses, educational institutions, and organizations looking for innovative digital solutions and event services.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
