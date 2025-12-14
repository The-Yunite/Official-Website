"use client"
import React from "react"
import BlurText from "@/components/BlurText"
import Link from "next/link"
import { ArrowUpRight, Users, Briefcase, Lightbulb } from "lucide-react"

export default function JoinYunytPage() {
  const positions = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Craft beautiful, scalable interfaces using React, Tailwind, and modern tooling.",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      desc: "Design magical experiences and brand-aligned visuals that inspire and engage.",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Project Coordinator",
      desc: "Drive flawless execution and seamless collaboration across Yunyt projects.",
      icon: Users,
    },
  ]

  return (
    <main className="px-10 flex flex-col items-center">
      
      {/* Hero Section - Centered with safe spacing */}
      <section className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center pt-24">
        <BlurText
          text="Join Yunyt"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="text-5xl md:text-7xl font-extrabold text-shadow-lg text-black"
        />
        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl">
          Be part of a passionate team driving innovation, creativity, and flawless execution.
        </p>
      </section>

      {/* Why Join Section */}
      <section className="w-full md:w-3/4 mb-20">
        <div className="rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 hover:shadow-xl hover:shadow-[#ff6b35]/30 transition">
          <h2 className="text-3xl font-bold text-black mb-4">Why Join Yunyt?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Yunyt, your craft matters. We pair creative ambition with technical precision to build
            experiences that feel effortless and unforgettable. You’ll grow fast, ship boldly, and
            collaborate with people who care about the details as much as the big picture.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full text-center mb-20">
        <h2 className="font-bold text-5xl text-shadow-xs py-2 px-4 bg-[#b9ff66] inline-block rounded-xl text-black">
          Open Positions
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-12 place-items-center">
          {positions.map((pos) => {
            const Icon = pos.icon
            return (
              <article
                key={pos.id}
                className="w-full max-w-[320px] h-80 flex flex-col justify-between bg-white/80 border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:shadow-[#ff6b35]/30 transition-transform hover:-translate-y-2 hover:scale-[1.02] p-6 text-left"
              >
                <div>
                  <Icon size={40} className="text-black mb-3" />
                  <h3 className="text-xl font-extrabold text-black">{pos.title}</h3>
                  <p className="text-gray-700 mt-2 text-sm">{pos.desc}</p>
                </div>
                <Link
                  href="/apply"
                  className="mt-6 inline-flex items-center gap-2 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-md py-2 px-4 font-semibold hover:shadow-lg transition"
                >
                  Apply Now <ArrowUpRight size={18} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      {/* General Form Section */}
      <section className="w-full md:w-3/4 mb-20">
        <h2 className="text-center font-bold text-4xl text-black mb-10">General Application Form</h2>
        <div className="rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 hover:shadow-xl hover:shadow-[#ff6b35]/30 transition">
          <form className="flex flex-col gap-6 w-full">
            <div>
              <label className="block text-sm font-bold text-black mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Message</label>
              <textarea
                placeholder="Tell us why you want to join Yunyt..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] bg-white text-black shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-3 px-8 font-semibold hover:shadow-xl hover:brightness-110 transition inline-flex items-center gap-2 justify-center"
            >
              Submit Application <ArrowUpRight size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full min-h-32 flex flex-col justify-center items-center mt-24 text-center">
        <BlurText
          text="Ready to build the future with Yunyt?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin="1px"
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-shadow-lg text-black"
        />
        <Link
          href="/apply"
          className="mt-10 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-4 px-10 font-semibold hover:shadow-xl hover:brightness-110 transition inline-flex items-center gap-2"
        >
          Join Us Today <ArrowUpRight size={22} />
        </Link>
      </section>
    </main>
  )
}
