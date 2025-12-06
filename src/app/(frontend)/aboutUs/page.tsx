"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import ScrollFloat from '@/components/ScrollFloat'
import Image from 'next/image'

export default function TeamsPage() {
  return (
    <main className='px-10 flex flex-col items-center min-h-screen overflow-hidden'>

      {/* Hero Section */}
      <section id='hero' className='w-full min-h-screen flex flex-col justify-center items-center'>
        <BlurText
          text="Meet Our Expert Team"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 scroll-m-20 text-3xl md:text-7xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="Passionate team driving innovation, creativity, and flawless execution at Yunyt."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 text-gray-300 mt-5 font-semibold text-xl justify-center"
        />
      </section>

      {/* Team Cards Section */}
      <section className='w-full min-h-screen pt-16 mx-auto text-center'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='center bottom-=40%'
          stagger={0.07}
          textClassName='font-semibold text-4xl'
        >
          Our Core Team
        </ScrollFloat>

        <div className='mt-10 grid md:grid-cols-3 gap-10'>
          {/* Md Atif Khan */}
          <div className='glassEffect rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition'>
            <Image
              src="/Teams/atif.jpg" // replace with actual image path
              alt="Md Atif Khan"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className='mt-5 text-2xl font-bold text-white'>Md Atif Khan</h3>
            <p className='text-gray-300'>Co-Founder</p>
            <p className='text-sm text-gray-400 mt-3'>
              Visionary leader redefining events and brand experiences with innovation and strategy.
            </p>
            <button className='mt-5 bg-white text-black rounded-full py-2 px-6 font-semibold shadow hover:bg-gray-200 transition'>
              Connect
            </button>
          </div>

          {/* Mohd Shadab Khan */}
          <div className='glassEffect rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition'>
            <Image
              src="/Teams/shadab.jpg" // replace with actual image path
              alt="Mohd Shadab Khan"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className='mt-5 text-2xl font-bold text-white'>Mohd Shadab Khan</h3>
            <p className='text-gray-300'>Co-Founder</p>
            <p className='text-sm text-gray-400 mt-3'>
              Strategic thinker shaping partnerships and growth, ensuring impactful delivery every time.
            </p>
            <button className='mt-5 bg-white text-black rounded-full py-2 px-6 font-semibold shadow hover:bg-gray-200 transition'>
              Connect
            </button>
          </div>

          {/* Wajid Ali */}
          <div className='glassEffect rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition'>
            <Image
              src="/Teams/wajid.jpg" // replace with actual image path
              alt="Wajid Ali"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className='mt-5 text-2xl font-bold text-white'>Wajid Ali</h3>
            <p className='text-gray-300'>Technical Executive</p>
            <p className='text-sm text-gray-400 mt-3'>
              Technical mastermind blending creativity with precision to deliver seamless solutions.
            </p>
            <button className='mt-5 bg-white text-black rounded-full py-2 px-6 font-semibold shadow hover:bg-gray-200 transition'>
              Connect
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full min-h-[40vh] flex flex-col justify-center items-center mt-20'>
        <BlurText
          text="Ready to shape the future with us?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin='1px'
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance text-shadow-lg"
        />
        <button className='mt-10 bg-white text-black backdrop-blur-md rounded-full shadow-lg py-4 px-8 font-semibold hover:bg-gray-200 transition'>
          Join Our Expert Team
        </button>
      </section>
    </main>
  )
}