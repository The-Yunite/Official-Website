"use client"
import React from 'react'
import BlurText from '@/components/BlurText'

export default function EventsPage() {
  return (
    <main className='px-10 py-24 flex flex-col items-center min-h-screen overflow-hidden'>

      {/* Hero Section */}
      <section id='hero' className='w-full flex flex-col justify-center items-center'>
        <BlurText
          text="Crafting unforgettable experiences through events."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 scroll-m-20 text-3xl md:text-7xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="From hackathons to conferences, workshops to corporate gatherings — we bring ideas to life and make every event memorable."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 text-gray-300 mt-5 font-semibold text-xl justify-center"
        />
      </section>

      {/* Upcoming Events */}
      <section className='w-full mx-auto text-center mt-10'>
        <h3 className='font-bold text-4xl'>
          Upcoming Events
        </h3>
        <div className='mt-10 grid md:grid-cols-2 gap-10'>
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Hackathon 2025</h3>
            <p className='text-gray-200 mt-2'>Join innovators and developers for a 48-hour coding marathon to solve real-world challenges.</p>
            <p className='text-sm text-gray-300 mt-2'>📅 January 15–17, 2025 | 📍 New Delhi</p>
          </div>
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Global Tech Conference</h3>
            <p className='text-gray-200 mt-2'>A gathering of industry leaders, startups, and enthusiasts to explore the future of technology.</p>
            <p className='text-sm text-gray-300 mt-2'>📅 March 10–12, 2025 | 📍 Bengaluru</p>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className='w-full pt-16 mx-auto text-center'>
        <h3 className='font-bold text-4xl'>
          Past Events
        </h3>
        <div className='mt-10 grid md:grid-cols-2 gap-10'>
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Startup Pitch Fest 2024</h3>
            <p className='text-gray-300 mt-2'>An exciting showcase where startups pitched groundbreaking ideas to investors and mentors.</p>
            <p className='text-sm text-gray-400 mt-2'>📅 September 2024 | 📍 Mumbai</p>
          </div>
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Design Thinking Workshop</h3>
            <p className='text-gray-300 mt-2'>Interactive sessions that empowered teams to innovate using design thinking principles.</p>
            <p className='text-sm text-gray-400 mt-2'>📅 June 2024 | 📍 Pune</p>
          </div>
        </div>
      </section>
      <section className='w-full min-h-32 flex flex-col justify-center items-center mt-20'>
        <BlurText
          text="Want to host an Event with Us?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin='1px'
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance text-shadow-lg"
        />
        <button className='mt-10 bg-white text-black backdrop-blur-md rounded-full shadow-lg py-4 px-8 font-semibold hover:bg-gray-200 transition'>
          Contact Us Today
        </button>
      </section>
    </main>
  )
}