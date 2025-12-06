"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import ScrollFloat from '@/components/ScrollFloat'
import Image from 'next/image'
import FadeContent from '@/components/FadeContent'

export default function TeamsPage() {
  return (
    <main className='px-10 py-24 flex flex-col items-center overflow-hidden'>

      {/* Hero Section */}
      <section id='hero' className='w-full flex flex-col items-center'>
        <BlurText
          text="About Us"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 scroll-m-20 text-3xl md:text-6xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="Passionate team driving innovation, creativity, and flawless execution at Yunyt."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 text-gray-300 font-semibold text-xl justify-center"
        />
        <FadeContent delay={1} blur={true} duration={1000} ease="ease-out" initialOpacity={0} className=''>
          <div className='glassEffect rounded-lg shadow-lg p-6 mt-10 text-center w-3/4 mx-auto'>
            <p className='font-bold'>Our Mission</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tenetur nesciunt a fuga odit repellendus mollitia officiis eveniet rerum? Ipsam nulla laudantium enim quod adipisci repudiandae iste, illo quaerat in quidem dolores.</p>
          </div>
        </FadeContent>
      </section>

      {/* Team Cards Section */}
      <section className='w-full mx-auto text-center mt-10'>
        <h3 className='font-bold text-4xl'>Our Core Team</h3>
        <div className='mt-10 grid md:grid-cols-3 gap-10'>
          <div className=" relative w-[320px] h-[520px] glassEffect  rounded-4xl shadow-lg overflow-hidden border-2 border-white mx-auto">
            <Image
              src={"/shadab.jpg"}
              alt="Team Member 1"
              fill
              className="object-cover"
            />
            {/* Top Text */}
            <div className="absolute top-10 w-full text-center">
              <h1 className="text-gray-200 text-2xl font-semibold tracking-wide text-shadow-lg bg-white/5 backdrop-blur-xs inline-block px-4 py-2 rounded-lg">
                Mohd Shadab Khan
              </h1>
              <p className="text-gray-300 text-sm mt-1 text-shadow-lg bg-white/5 backdrop-blur-xs inline-block px-4 py-2 rounded-lg">
                Software Engineer
              </p>
            </div>

            {/* Bottom Glass Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3">

                {/* Avatar + Info */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-semibold">
                    Jav.
                  </div>

                  <div className="leading-tight">
                    <p className="text-white text-sm font-medium">
                      @javicodes
                    </p>
                    <p className="text-emerald-400 text-xs">
                      Online
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className=" relative w-[320px] h-[520px] glassEffect  rounded-4xl shadow-lg overflow-hidden border-2 border-white mx-auto">
            <Image
              src={"/shadab.jpg"}
              alt="Team Member 1"
              fill
              className="object-cover"
            />
            {/* Top Text */}
            <div className="absolute top-10 w-full text-center">
              <h1 className="text-gray-200 text-2xl font-semibold tracking-wide text-shadow-lg bg-white/5 backdrop-blur-xs inline-block px-4 py-2 rounded-lg">
                Mohd Shadab Khan
              </h1>
              <p className="text-gray-300 text-sm mt-1 text-shadow-lg bg-white/5 backdrop-blur-xs inline-block px-4 py-2 rounded-lg">
                Software Engineer
              </p>
            </div>

            {/* Bottom Glass Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3">

                {/* Avatar + Info */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-semibold">
                    Jav.
                  </div>

                  <div className="leading-tight">
                    <p className="text-white text-sm font-medium">
                      @javicodes
                    </p>
                    <p className="text-emerald-400 text-xs">
                      Online
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className=" relative w-[320px] h-[520px] glassEffect  rounded-4xl shadow-lg overflow-hidden border-2 border-white mx-auto">
            <Image
              src={"/shadab.jpg"}
              alt="Team Member 1"
              fill
              className="object-cover"
            />
            {/* Top Text */}
            <div className="absolute top-10 w-full text-center">
              <h1 className="text-gray-200 text-2xl font-semibold tracking-wide text-shadow-lg bg-white/5 backdrop-blur-xs inline-block px-4 py-2 rounded-lg">
                Mohd Shadab Khan
              </h1>
              <p className="text-gray-300 text-sm mt-1 text-shadow-lg bg-white/5 backdrop-blur-xs inline-block px-4 py-2 rounded-lg">
                Software Engineer
              </p>
            </div>

            {/* Bottom Glass Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3">

                {/* Avatar + Info */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-semibold">
                    Jav.
                  </div>

                  <div className="leading-tight">
                    <p className="text-white text-sm font-medium">
                      @javicodes
                    </p>
                    <p className="text-emerald-400 text-xs">
                      Online
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition">
                  Contact Me
                </button>
              </div>
            </div>
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