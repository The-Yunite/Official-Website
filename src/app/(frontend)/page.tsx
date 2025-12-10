"use client"
// import { headers as getHeaders } from 'next/headers.js'
// import { getPayload } from 'payload'
// import { fileURLToPath } from 'url'
// import config from '@/payload.config'
import React from 'react'
import BlurText from '@/components/BlurText'
import Link from 'next/link'
import CardSwap, { Card } from '@/components/CardSwap'
import { CalendarCheck, MonitorCloud, PaintBucket } from 'lucide-react'
import SpotlightCard from '@/components/SpotlightCard'

export default function HomePage() {

  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <main className='mt-24 md:mt-12 px-8 md:px-10 flex flex-col items-center min-h-screen overflow-hidden'>
      <section id='hero' className='w-full flex flex-col md:flex-row justify-center'>
        <div className='flex flex-col justify-center md:flex-[60%]'>
          <BlurText
            text="Accelerate Your Brand’s Growth with Yunyt."
            delay={100}
            animateBy="words"
            direction="bottom"
            stepDuration={0.55}
            threshold={1}
            rootMargin='1px'
            // onAnimationComplete={}
            className="w-full inline-block scroll-m-20 text-5xl md:text-7xl font-extrabold tracking-tight text-shadow-lg "
          />
          <BlurText
            text="From hackathons to corporate events, workshops to Tech and printing solutions, Yunyt provides everything you need to make your brand memorable and stand out."
            delay={0}
            animateBy="words"
            direction="bottom"
            stepDuration={0.55}
            threshold={1}
            rootMargin='1px'
            // onAnimationComplete={}
            className="w-full md:w-3/4 text-gray-300 mt-2 md:mt-5 font-semibold text-xl"
          />
          <div className='mt-5 md:mt-10 font-semibold flex gap-5'>
            <button className='bg-white text-black backdrop-blur-md rounded-full shadow-lg py-3 px-6 scaleOnHover'><Link href="/">Learn More</Link></button>
            <button className='glassEffect rounded-full shadow-lg py-3 px-6 scaleOnHover'><Link href="/">Get Started</Link></button>
          </div>
        </div>
        <div className="md:flex-[40%] h-60 md:h-[600px] relative ">
          <CardSwap
            cardDistance={40}
            verticalDistance={70}
            delay={2800}
            pauseOnHover={false}
            skewAmount={6}
            easing='elastic'
          >
            <Card>
              <h3 className='border-b p-2 flex items-center gap-1'><CalendarCheck />Events</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3 className='border-b p-2 flex items-center gap-1'><MonitorCloud />TechLab</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3 className='border-b p-2 flex items-center gap-1'><PaintBucket />PrintLab</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
      </section>
      <section className='w-full my-10 mx-auto text-center'>
        <h2 className='font-bold text-5xl'>
          Our Services
        </h2>
        <div className=' w-full mt-10 flex flex-wrap justify-center gap-7'>
          <div className='glassEffect px-5 py-3 w-md rounded-lg scaleOnHover' >
            <h3 className='font-extrabold text-2xl'>Hackthone</h3>
            <p className='text-balance'>Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences.</p>
          </div>
          <div className='glassEffect px-5 py-3 w-md rounded-lg scaleOnHover ' >
            <h3 className='font-extrabold text-2xl'>Corporate Events</h3>
            <p className='text-balance'>Professional corporate event planning with seamless logistics, team building activities, and brand integration.</p>
          </div>
          <div className='glassEffect px-5 py-3 w-md rounded-lg scaleOnHover' >
            <h3 className='font-extrabold text-2xl'>Workshops</h3>
            <p className='text-balance'>Interactive workshop organization with expert facilitation, hands-on learning, and participant engagement tools.</p>
          </div>
          <div className='glassEffect px-5 py-3 w-md rounded-lg scaleOnHover' >
            <h3 className='font-extrabold text-2xl'>Conferences</h3>
            <p className='text-balance'>Large-scale conference management with speaker coordination, attendee engagement, and technical support.</p>
          </div>
          <div className='glassEffect px-5 py-3 w-md rounded-lg scaleOnHover' >
            <h3 className='font-extrabold text-2xl'>Product Launches</h3>
            <p className='text-balance'>Memorable product launch events with media coverage, influencer engagement, and brand storytelling.</p>
          </div>
          <div className='glassEffect px-5 py-3 w-md rounded-lg scaleOnHover' >
            <h3 className='font-extrabold text-2xl'>Team Building</h3>
            <p className='text-balance'>Custom team building experiences designed to strengthen collaboration and boost workplace morale.</p>
          </div>
        </div>
      </section>
      <section className='w-full my-10 mx-auto text-center'>
        <h1 className='font-bold text-5xl'>
          About Yunyt
        </h1>
        <div className='mt-5 text-gray-300 text-balance flex flex-col gap-4 text-xl'>
          <p>Yunyt is a cutting-edge event management and printing solutions platform designed to streamline the organization and execution of various events. Whether you're planning a hackathon, corporate event, workshop, or conference, Yunyt provides comprehensive tools and services to ensure your event runs smoothly from start to finish.</p>
        </div>
        <div className='mt-10 flex flex-wrap justify-center gap-10 md:gap-16 text-center text-2xl text-gray-300'>
          <SpotlightCard className="custom-spotlight-card scaleOnHover" spotlightColor="rgba(255, 107, 53, 0.3)">
            <b className='text-5xl text-white'>10</b>
            <p>Events managed</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover" spotlightColor="rgba(255, 107, 53, 0.3)">
            <b className='text-5xl text-white'>500</b>
            <p>Events managed</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover" spotlightColor="rgba(255, 107, 53, 0.3)">
            <b className='text-5xl text-white'>98%</b>
            <p>Events managed</p>
          </SpotlightCard>
        </div>
      </section>
    </main>
  )
}
