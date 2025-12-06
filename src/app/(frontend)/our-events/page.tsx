"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import ScrollFloat from '@/components/ScrollFloat'

export default function EventsPage() {
  return (
    <main className='px-10 flex flex-col items-center min-h-screen overflow-hidden'>

      {/* Hero Section */}
      <section id='hero' className='w-full min-h-screen flex flex-col justify-center items-center'>
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
      <section className='w-full min-h-screen pt-16 mx-auto text-center'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='center bottom-=40%'
          stagger={0.07}
          textClassName='font-semibold text-4xl'
        >
          Upcoming Events
        </ScrollFloat>
        <div className='mt-10 grid md:grid-cols-2 gap-10'>
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Hackathon 2025</h3>
            <p className='text-gray-300 mt-2'>Join innovators and developers for a 48-hour coding marathon to solve real-world challenges.</p>
            <p className='text-sm text-gray-400 mt-2'>📅 January 15–17, 2025 | 📍 New Delhi</p>
          </div>
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Global Tech Conference</h3>
            <p className='text-gray-300 mt-2'>A gathering of industry leaders, startups, and enthusiasts to explore the future of technology.</p>
            <p className='text-sm text-gray-400 mt-2'>📅 March 10–12, 2025 | 📍 Bengaluru</p>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className='w-full min-h-screen pt-16 mx-auto text-center'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='center bottom-=40%'
          stagger={0.07}
          textClassName='font-semibold text-4xl'
        >
          Past Events
        </ScrollFloat>
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
    </main>
  )
}