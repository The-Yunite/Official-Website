"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowUpRight, MapPinned } from 'lucide-react'
import CustomEventCard from '@/components/CustomEventCard'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "up1",
      title: "Python X Github Series",
      status: 'Upcoming',
      description: "Intensive Series covering Python and github from Basic to Advance level.",
      date: "To be announced",
      location: "New Delhi",
      participantsCount: '200 Participants',
      image: {
        src: 'https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png',
        alt: 'Brainhack Ideathon',
      },
      type: 'Ideathon',
      actions: { href: '/', label: 'Learn More' },
    },
    {
      id: "up2",
      title: "Education Enclave",
      status: 'Upcoming',
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "February 22, 2026",
      date: "17 november 2025",
      location: "American centre sector 43 Gurgaon",
      participantsCount: '200 Participants',
      image: {
        src: 'https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png',
        alt: 'Brainhack Ideathon',
      },
      type: 'Ideathon',
      actions: { href: '/', label: 'Learn More' },
    },
    {
      id: "up3",
      title: "Bootcamp AI X ML",
      status: 'Upcoming',
      description: "Thorough hands-on bootcamp on AI and ML technologies and applications.",
      date: "March 20, 2026",
      location: "to be announced",
      participantsCount: '200 Participants',
      image: {
        src: 'https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png',
        alt: 'Brainhack Ideathon',
      },
      type: 'Ideathon',
      actions: { href: '/', label: 'Learn More' },
    },
  ]

  const pastEvents = [
    {
      id: "past1",
      title: "BrainHack Ideaathon 2025",
      status: "Past",
      participantsCount: "150+",
      image: {
        src: "/shadab.jpg",
        alt: "BrainHack Ideaathon 2025 event",
      },
      date: "17 November 2025",
      description:
        "An exciting showcase where startups pitched groundbreaking ideas to investors and mentors.",
      location: "Convention Center, Jamia Hamdard University",
      type: "Ideaathon",
      actions: {
        href: "/events/brainhack-ideaathon-2025",
        label: "View Details",
      },
    },
    {
      id: "past2",
      title: "Hands-on AI x AR Workshop",
      status: "Past",
      participantsCount: "80+",
      image: {
        src: "/shadab.jpg",
        alt: "Hands-on AI x AR Workshop",
      },
      date: "28 October 2025",
      description:
        "Learn about Augmented Reality and build AR filters yourself.",
      location: "HAH Lab, Jamia Hamdard University",
      type: "Workshop",
      actions: {
        href: "/events/ai-ar-workshop",
        label: "View Details",
      },
    },
    {
      id: "past3",
      title: "ICIDSSD 2024",
      status: "Past",
      participantsCount: "300+",
      image: {
        src: "/shadab.jpg",
        alt: "ICIDSSD 2024 conference",
      },
      date: "17 November 2024",
      description:
        "An exciting showcase where startups pitched groundbreaking ideas to investors and mentors.",
      location: "Convention Center, Jamia Hamdard University",
      type: "Conference",
      actions: {
        href: "/events/icidssd-2024",
        label: "View Details",
      },
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
        <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 inline-block rounded-xl text-black">
          Upcoming Events
        </h3>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {upcomingEvents.map(event => (
            <CustomEventCard event={event} key={event.id} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full mx-auto text-center mt-20">
        <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 inline-block rounded-xl text-black">
          Past Events
        </h3>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {pastEvents.map(event => (
            <CustomEventCard key={event.id} event={event}/>
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
          <Link href="/contact" className="flex items-center gap-1">Contact Us Today <ArrowUpRight size={20} /></Link>
        </button>
      </section>
    </main>
  )
}
