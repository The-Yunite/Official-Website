"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "up1",
      title: "Hackathon 2025",
      desc: "Join innovators and developers for a 48-hour coding marathon to solve real-world challenges.",
      date: "January 15–17, 2025",
      location: "New Delhi",
      image: "/shadab.jpg",
    },
    {
      id: "up2",
      title: "Global Tech Conference",
      desc: "A gathering of industry leaders, startups, and enthusiasts to explore the future of technology.",
      date: "March 10–12, 2025",
      location: "Bengaluru",
      image: "/shadab.jpg",
    },
  ]

  const pastEvents = [
    {
      id: "past1",
      title: "Startup Pitch Fest 2024",
      desc: "An exciting showcase where startups pitched groundbreaking ideas to investors and mentors.",
      date: "September 2024",
      location: "Mumbai",
      image: "/shadab.jpg",
    },
    {
      id: "past2",
      title: "Design Thinking Workshop",
      desc: "Interactive sessions that empowered teams to innovate using design thinking principles.",
      date: "June 2024",
      location: "Pune",
      image: "/shadab.jpg",
    },
  ]

  return (
    <main className="px-8 md:px-12 py-24 flex flex-col items-center min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col justify-center items-center text-center">
        <BlurText
          text="Crafting unforgettable experiences through events."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="w-full md:w-3/4 text-4xl md:text-7xl font-extrabold tracking-tight text-shadow-lg"
        />
        <BlurText
          text="From hackathons to conferences, workshops to corporate gatherings — we bring ideas to life and make every event memorable."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin="1px"
          className="w-full md:w-3/4 text-gray-700 mt-5 font-semibold text-xl"
        />
      </section>

      {/* Upcoming Events */}
      <section className="w-full mx-auto text-center mt-20">
        <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 bg-[#b9ff66] inline-block rounded-xl text-black">
          Upcoming Events
        </h3>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {upcomingEvents.map(event => (
            <div key={event.id} className="w-xs bg-white/70 relative group border border-black/10 rounded-3xl backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-[#ff6b35]/40 transition transform hover:-translate-y-3 hover:scale-105">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <b className="text-2xl text-black">{event.title}</b>
                <p className="text-gray-800 mt-2">{event.desc}</p>
                <p className="flex items-center gap-1 text-gray-700 mt-3"><Calendar size={18} /> {event.date}</p>
                <p className="flex items-center gap-1 text-gray-700"><MapPin size={18} /> {event.location}</p>
                <button className="rounded-full hover:bg-[#ff6b35]/15 hover:scale-105 transition-transform duration-500 w-full border border-[#ff6b35] py-2 mt-4 font-semibold text-black">
                  <Link href="/">Learn More</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full mx-auto text-center mt-20">
        <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 bg-[#ff6b35]/90 inline-block rounded-xl text-white">
          Past Events
        </h3>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {pastEvents.map(event => (
            <div key={event.id} className="w-xs bg-white/70 relative group border border-black/10 rounded-3xl backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-[#b9ff66]/40 transition transform hover:-translate-y-3 hover:scale-105">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <b className="text-2xl text-black">{event.title}</b>
                <p className="text-gray-800 mt-2">{event.desc}</p>
                <p className="flex items-center gap-1 text-gray-700 mt-3"><Calendar size={18} /> {event.date}</p>
                <p className="flex items-center gap-1 text-gray-700"><MapPin size={18} /> {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full min-h-32 flex flex-col justify-center items-center mt-24 text-center">
        <BlurText
          text="Want to host an Event with Us?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin="1px"
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-shadow-lg"
        />
        <button className="mt-10 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-4 px-8 font-semibold hover:shadow-xl hover:brightness-110 transition">
          <Link href="/" className="flex items-center gap-1">Contact Us Today <ArrowUpRight size={20} /></Link>
        </button>
      </section>
    </main>
  )
}
