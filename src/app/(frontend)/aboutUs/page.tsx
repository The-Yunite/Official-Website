"use client"
import React from "react"
import BlurText from "@/components/BlurText"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function TeamsPage() {
  const team = [
    {
      id: 1,
      name: "Mohd Shadab Khan",
      role: "Software Engineer",
      image: "/shadab.jpg",
      bio: "Focused on building scalable solutions and driving innovation through code.",
      handle: "@javicodes",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Creative Director",
      image: "/shadab.jpg",
      bio: "Passionate about design, storytelling, and creating memorable brand experiences.",
      handle: "@janedoe",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Project Manager",
      image: "/shadab.jpg",
      bio: "Ensures flawless execution and seamless collaboration across all projects.",
      handle: "@johnsmith",
    },
  ]

  return (
    <main className="px-10 py-24 flex flex-col items-center overflow-hidden min-h-screen pb-40">
      
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center text-center pt-32">
        <BlurText
          text="About Us"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-shadow-lg text-black"
        />
        <BlurText
          text="Passionate team driving innovation, creativity, and flawless execution at Yunyt."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin="1px"
          className="text-gray-700 font-semibold text-lg md:text-xl mt-6"
        />
        <div className="mt-10 w-full md:w-3/4">
          <div className="rounded-2xl shadow-lg p-8 text-center bg-white/70 border border-black/10 hover:shadow-[#ff6b35]/40 transition">
            <p className="font-bold text-2xl text-black mb-3">Our Mission</p>
            <p className="text-gray-700">
              We empower brands and communities by delivering unforgettable experiences, blending creativity with flawless execution. Our mission is to innovate, inspire, and leave lasting impressions through every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="w-full mx-auto text-center mt-20">
        <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 bg-[#b9ff66] inline-block rounded-xl text-black">
          Our Core Team
        </h3>
        <div className="mt-16 grid md:grid-cols-3 gap-12 place-items-center">
          {team.map((member) => (
            <article
              key={member.id}
              className="w-full max-w-[320px] bg-white/70 border border-black/10 rounded-3xl shadow-lg hover:shadow-[#ff6b35]/40 transition-transform hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-xl font-extrabold text-black">{member.name}</h4>
                  <p className="text-gray-700 text-sm font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-3 text-sm">{member.bio}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{member.handle}</span>
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-full text-sm font-semibold text-black border border-black hover:bg-black/10 transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full min-h-[40vh] flex flex-col justify-center items-center mt-24 text-center">
        <BlurText
          text="Ready to shape the future with us?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin="1px"
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-shadow-lg text-black"
        />
        <Link
          href="/"
          className="mt-10 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-4 px-10 font-semibold hover:shadow-xl hover:brightness-110 transition inline-flex items-center gap-2"
        >
          Join Our Expert Team <ArrowUpRight size={22} />
        </Link>
      </section>
    </main>
  )
}
