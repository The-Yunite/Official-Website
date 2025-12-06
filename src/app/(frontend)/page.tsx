"use client"
// import { headers as getHeaders } from 'next/headers.js'
// import { getPayload } from 'payload'
// import { fileURLToPath } from 'url'
// import config from '@/payload.config'
import React from 'react'
import Image from 'next/image'
import BlurText from '@/components/BlurText'
import ScrollFloat from '@/components/ScrollFloat'
import Link from 'next/link'
import AnimatedContent from '@/components/AnimatedContent'

export default function HomePage() {

  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <main className='px-10 flex flex-col items-center min-h-screen overflow-hidden'>
      <section id='hero' className='w-full min-h-screen flex flex-col justify-center items-center'>
        <BlurText
          text="There is a better way to run events and print."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          // onAnimationComplete={}
          className="w-full md:w-3/4 scroll-m-20 text-4xl md:text-7xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="From hackathons to corporate events, workshops to printing solutions, Yunyt provides everything you need to make your events memorable and your brand stand out with PrintLab."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          // onAnimationComplete={}
          className="w-full md:w-3/4 text-gray-300 mt-5 font-semibold text-xl justify-center"
        />
        <div className='mt-10 font-semibold flex gap-5'>
          <button className='bg-white text-black backdrop-blur-md rounded-full shadow-lg py-3 px-6'><Link href="/">Learn More</Link></button>
          <button className='glassEffect rounded-full shadow-lg py-3 px-6'><Link href="/">Get Started</Link></button>
        </div>
      </section>
      <section className='w-full my-10 mx-auto text-center'>
        <h2 className='font-bold text-5xl'>
          Our Services
        </h2>
        <div className=' w-full mt-10 flex flex-wrap justify-center gap-7 grid-cols-3'>
            <div className='glassEffect px-5 py-3 w-md rounded-lg' >
              <h3 className='font-extrabold text-2xl'>Hackthone</h3>
              <p className='text-balance'>Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.</p>
            </div>
            <div className='glassEffect px-5 py-3 w-md rounded-lg' >
              <h3 className='font-extrabold text-2xl'>Hackthone</h3>
              <p className='text-balance'>Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.</p>
            </div>
            <div className='glassEffect px-5 py-3 w-md rounded-lg' >
              <h3 className='font-extrabold text-2xl'>Hackthone</h3>
              <p className='text-balance'>Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.</p>
            </div>
            <div className='glassEffect px-5 py-3 w-md rounded-lg' >
              <h3 className='font-extrabold text-2xl'>Hackthone</h3>
              <p className='text-balance'>Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.</p>
            </div>
            <div className='glassEffect px-5 py-3 w-md rounded-lg' >
              <h3 className='font-extrabold text-2xl'>Hackthone</h3>
              <p className='text-balance'>Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.</p>
            </div>
        </div>
      </section>
    </main>
  )
}
