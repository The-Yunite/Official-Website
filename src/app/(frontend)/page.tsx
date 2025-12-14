"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlurText from '@/components/BlurText'
import SpotlightCard from '@/components/SpotlightCard'
import CustomForm from '@/components/CustomForm'
import {
  ArrowUpRight,
  Bot,
  Building2,
  Calendar,
  CodeXml,
  Globe,
  GraduationCap,
  MapPin,
  Mic,
  Shield,
  Workflow,
  CheckCircle2,
} from 'lucide-react'

export default function HomePage() {
  const events = [
    {
      id: '12345',
      status: 'Past',
      participantsCount: '200 Participants',
      image: {
        src: 'https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png',
        alt: 'Brainhack Ideathon',
      },
      title: 'Brainhack Ideathon',
      date: 'November 17, 2025',
      location: 'Jamia Hamdard, New Delhi, India',
      type: 'Ideathon',
      actions: { href: '/', label: 'Learn More' },
    },
    {
      id: '12346',
      status: 'Past',
      participantsCount: '200 Participants',
      image: {
        src: 'https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png',
        alt: 'Brainhack Ideathon',
      },
      title: 'Brainhack Ideathon',
      date: 'November 17, 2025',
      location: 'Jamia Hamdard, New Delhi, India',
      type: 'Ideathon',
      actions: { href: '/', label: 'Learn More' },
    },
    {
      id: '12347',
      status: 'Past',
      participantsCount: '200 Participants',
      image: {
        src: 'https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png',
        alt: 'Brainhack Ideathon',
      },
      title: 'Brainhack Ideathon',
      date: 'November 17, 2025',
      location: 'Jamia Hamdard, New Delhi, India',
      type: 'Ideathon',
      actions: { href: '/', label: 'Learn More' },
    },
  ]

  const eventServices = [
    {
      id: '1234',
      icon: <CodeXml color="black" size={40} />,
      title: 'Hackathon',
      desc:
        'Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.',
    },
    {
      id: '1235',
      icon: <Building2 color="black" size={40} />,
      title: 'Corporate Events',
      desc:
        'Professional corporate event planning with seamless logistics, team building activities, and brand integration.',
    },
    {
      id: '1236',
      icon: <GraduationCap color="black" size={40} />,
      title: 'Workshops',
      desc:
        'Interactive workshop organization with expert facilitation, hands-on learning, and participant engagement tools.',
    },
    {
      id: '1237',
      icon: <Mic color="black" size={40} />,
      title: 'Conferences',
      desc:
        'Large-scale conference management with speaker coordination, attendee engagement, and technical support.',
    },
  ]

  const techServices = [
    {
      id: 't1234',
      icon: <Globe color="black" size={40} />,
      title: 'Web Development',
      desc:
        'Modern, responsive, and scalable web applications built with the latest frameworks and technologies.',
    },
    {
      id: 't1235',
      icon: <Bot color="black" size={40} />,
      title: 'AI ML Integration',
      desc:
        'Intelligent solutions powered by data — predictive analytics, recommendation systems, and automation.',
    },
    {
      id: 't1236',
      icon: <Workflow color="black" size={40} />,
      title: 'Automations',
      desc: 'We automate your repetitive tasks so you can focus on what truly matters.',
    },
    {
      id: 't1237',
      icon: <Shield color="black" size={40} />,
      title: 'Cybersecurity',
      desc:
        'End-to-end protection with advanced threat detection, compliance, and secure infrastructure design.',
    },
  ]

  return (
    <main className="mt-24 px-8 md:px-10 flex flex-col items-center min-h-screen overflow-hidden">
      {/* Hero Section - UNCHANGED */}
      <section id="hero" className="w-full flex flex-col md:flex-row justify-center">
        <div className="flex flex-col justify-center md:w-[60%]">
          <BlurText
            text="Accelerate Your Brand’s Growth with Yunyt."
            delay={100}
            animateBy="words"
            direction="bottom"
            stepDuration={0.55}
            threshold={1}
            rootMargin="1px"
            className="w-full inline-block scroll-m-20 text-5xl md:text-7xl font-extrabold tracking-tight text-shadow-xs "
          />
          <BlurText
            text="From hackathons to corporate events, workshops to Tech and printing solutions, Yunyt provides everything you need to make your brand memorable and stand out."
            delay={0}
            animateBy="words"
            direction="bottom"
            stepDuration={0.55}
            threshold={1}
            rootMargin="1px"
            className="w-full md:w-3/4 mt-2 md:mt-5 text-shadow-xs text-xl text-gray-800"
          />
          <div className="mt-5 md:mt-10 font-semibold flex gap-5">
            <button className="bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-3 px-6 scaleOnHover transition hover:shadow-xl hover:brightness-110">
              <Link href="/">Learn More</Link>
            </button>
            <button className="border border-black text-black rounded-full py-3 px-6 scaleOnHover hover:bg-black/10 transition hover:shadow-lg">
              <Link href="/">Get Started</Link>
            </button>
          </div>
        </div>
        <div className="md:w-[40%] h-full relative ">
          <Image src={'/logo.png'} fill alt="Yunyt" className="object-cover" />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full my-16 text-center">
        <h2 className="font-bold text-5xl text-black">Our Services</h2>

        <h3 className="mt-4 text-xl text-black underline underline-offset-4">Management Services</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {eventServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-black/10 shadow-lg transition hover:-translate-y-2 hover:scale-105 hover:shadow-[#ff6b35]/40"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                {service.icon}
              </div>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-xl text-black underline underline-offset-4">Tech Services</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {techServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-black/10 shadow-lg transition hover:-translate-y-2 hover:scale-105 hover:shadow-[#ff6b35]/40"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                {service.icon}
              </div>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Events */}
      <section className="w-full my-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-bold text-5xl text-black">Our Events</h2>
          <p className="text-gray-700 mt-4 text-xl">
            Discover our portfolio of memorable events and upcoming opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/10 shadow-lg transition hover:shadow-[#ff6b35]/40 hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image src={event.image.src} fill alt={event.image.alt} className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">{event.status}</span>
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">{event.participantsCount}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{event.title}</h3>
                <p className="flex items-center gap-2 text-gray-700 mt-1">
                  <Calendar size={18} />
                  {event.date}
                </p>
                <p className="flex items-center gap-2 text-gray-700 mt-1">
                  <MapPin size={18} />
                  {event.location}
                </p>
                <p className="text-gray-600 mt-2">{event.type}</p>
                <Link
                  href={event.actions.href}
                  className="mt-4 block w-full text-center rounded-full border border-[#ff6b35] py-2 font-semibold text-black transition hover:bg-[#ff6b35]/15 hover:scale-[1.02]"
                >
                  {event.actions.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto flex justify-center mt-10">
          <Link
            href="/our-events"
            className="bg-gradient-to-r from-[#ff6b35] to-[#b9ff66] text-black text-xl rounded-full shadow-lg py-3 px-6 flex items-center gap-1 transition hover:shadow-xl hover:brightness-110"
          >
            View More <ArrowUpRight className="inline-block" />
          </Link>
        </div>
      </section>

      {/* TechLab */}
      <section className="w-full my-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-5xl text-black">TechLab</h2>
          <p className="text-gray-700 my-5 font-semibold text-xl">
            Empowering Businesses With Reliable Web, Automation, and AI Services
          </p>
        </div>
        <div className="max-w-6xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-gray-800">
          <SpotlightCard
            className="custom-spotlight-card scaleOnHover mx-auto w-xs border border-black/10 bg-white/70 backdrop-blur-md shadow-lg transition hover:shadow-[#ff6b35]/40 rounded-2xl p-6"
            spotlightColor="rgba(255, 107, 53, 0.15)"
          >
            <Globe size={70} className="mx-auto text-black" />
            <p className="text-xl font-semibold text-black mt-3">Web Apps</p>
            <p className="text-gray-700">
              Let us create your website and build your online presence so you can share your services with the world.
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card scaleOnHover mx-auto w-xs border border-black/10 bg-white/70 backdrop-blur-md shadow-lg transition hover:shadow-[#ff6b35]/40 rounded-2xl p-6"
            spotlightColor="rgba(255, 107, 53, 0.15)"
          >
            <Workflow size={70} className="mx-auto text-black" />
            <p className="text-xl font-semibold text-black mt-3">Automations</p>
            <p className="text-gray-700">We automate your repetitive tasks so you can focus on what truly matters.</p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card scaleOnHover mx-auto w-xs border border-black/10 bg-white/70 backdrop-blur-md shadow-lg transition hover:shadow-[#ff6b35]/40 rounded-2xl p-6"
            spotlightColor="rgba(255, 107, 53, 0.15)"
          >
            <Bot size={70} className="mx-auto text-black" />
            <p className="text-xl font-semibold text-black mt-3">AI ML</p>
            <p className="text-gray-700">Integrate AI to make your business smarter, faster, and up-to-date.</p>
          </SpotlightCard>
        </div>
        <div className="max-w-6xl mx-auto flex justify-center">
          <Link
            href="/techLAB"
            className="bg-gradient-to-r from-[#ff6b35] to-[#b9ff66] text-black text-xl rounded-full shadow-lg py-3 px-6 flex items-center gap-1 transition hover:shadow-xl hover:brightness-110"
          >
            View More <ArrowUpRight className="inline-block" />
          </Link>
        </div>
      </section>

      {/* About Yunyt - Neutral & Meaningful with Hover */}
      <section className="w-full my-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-2 sm:px-6">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 bg-clip-text text-transparent transition hover:brightness-110 hover:drop-shadow-md">
              About Yunyt
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Yunyt is more than an event management platform — it’s a canvas for unforgettable experiences. We blend
              creativity, technology, and flawless execution to make every event feel effortless and inspiring.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                { title: 'Seamless Planning', desc: 'From concept to celebration.' },
                { title: 'Tech-Powered', desc: 'Smart tools for flawless execution.' },
                { title: 'Memorable Design', desc: 'Experiences that linger forever.' },
                { title: 'Client-Centric', desc: 'Your vision, our mission.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md transition hover:-translate-y-2 hover:scale-[1.03] hover:shadow-gray-400/50"
                >
                  <CheckCircle2 className="text-gray-600 transition hover:text-gray-800" size={28} />
                  <div>
                    <p className="font-semibold text-black">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Meaningful Quote + Stats */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Quote block */}
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl border border-black/10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center transition hover:scale-105 hover:shadow-gray-400/50">
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 text-center px-6">
                “Crafting experiences that inspire, connect, and leave lasting memories.”
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <SpotlightCard className="rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 text-center shadow-lg p-6 border border-black/10 transition hover:scale-105 hover:shadow-gray-400/50">
                <b className="text-5xl text-black">10</b>
                <p className="text-gray-700">Events Managed</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 text-center shadow-lg p-6 border border-black/10 transition hover:scale-105 hover:shadow-gray-400/50">
                <b className="text-5xl text-black">500+</b>
                <p className="text-gray-700">Happy Attendees</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-2xl bg-gradient-to-r from-gray-300 to-gray-400 text-center shadow-lg p-6 border border-black/10 transition hover:scale-105 hover:shadow-gray-400/50">
                <b className="text-5xl text-black">98%</b>
                <p className="text-gray-700">Client Satisfaction</p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Clean form (no wrapper) */}
      <section className="w-full my-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-bold text-5xl text-black">Get in Touch</h2>
          <p className="text-gray-800 my-5 font-semibold text-xl text-center">
            Ready to make your next event unforgettable? Let's discuss your project.
          </p>

          {/* Original clean form */}
          <CustomForm showHeading={false} clasName={'w-full max-w-md'} />

          <div className="mt-5 text-center">
            <p className="text-gray-800 text-xl">Or reach us directly at:</p>
            <p className="text-xl font-semibold text-[#f07c4a]">weareyunyt@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full my-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
          <h2 className="font-bold text-5xl text-black">Join Our Team</h2>
          <Link
            href="/joinUs"
            className="bg-gradient-to-r from-[#ff6b35] to-[#b9ff66] text-black backdrop-blur-md rounded-full shadow-lg py-3 px-6 font-semibold flex items-center gap-1 transition hover:shadow-xl hover:brightness-110"
          >
            Join Now <ArrowUpRight className="inline-block" />
          </Link>
        </div>
      </section>
    </main>
  )
}
