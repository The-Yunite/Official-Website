"use client"
// import { headers as getHeaders } from 'next/headers.js'
// import { getPayload } from 'payload'
// import { fileURLToPath } from 'url'
// import config from '@/payload.config'
import React from 'react'
import Image from 'next/image'
import BlurText from '@/components/BlurText'
import ScrollFloat from '@/components/ScrollFloat'
import Iridescence from '@/components/Iridescence'

export default function HomePage() {

  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <main className='px-10 flex flex-col items-center min-h-screen overflow-hidden'>
      <div className=' fixed top-0 left-0 -z-10'>
      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      </div>
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
          className="w-full md:w-3/4 scroll-m-20 text-3xl md:text-7xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="From hackathons to corporate events, workshops to printing solutions, Yunyt provides everything you need to make your events memorable and your brand stand out with PrintLab."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin='1px'
          // onAnimationComplete={}
          className="w-full md:w-3/4 text-gray-300 mt-5 font-semibold text-xl justify-center"
        />
        <div className='mt-10 font-semibold flex gap-5'>
          <button className='bg-white text-black backdrop-blur-md rounded-full shadow-lg py-3 px-6'>Learn More</button>
          <button className='bg-white/20 backdrop-blur-md rounded-full shadow-lg py-3 px-6'>Get Started</button>
        </div>
      </section>
      <section className='w-full min-h-screen pt-16 mx-auto text-center'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='center bottom-=40%'
          stagger={0.07}
          textClassName='font-semibold'
        >
          Our Services
        </ScrollFloat>
      </section>
    </main>
  )
}
