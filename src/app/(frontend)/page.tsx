"use client"
// import { headers as getHeaders } from 'next/headers.js'
// import { getPayload } from 'payload'
// import { fileURLToPath } from 'url'
// import config from '@/payload.config'
import React from 'react'
import BlurText from '@/components/BlurText'
import Link from 'next/link'
import { ArrowUpRight, Bot, Calendar, Coffee, Globe, MapPin, Shirt, SquareUser, Workflow } from 'lucide-react'
import SpotlightCard from '@/components/SpotlightCard'
import CustomForm from '@/components/CustomForm'
import Image from 'next/image'
import { title } from 'process'

export default function HomePage() {

  const events = [
    {
      id: "12345",
      status: "Past",
      participantsCount: 200,
      image: {
        src: "https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png",
        alt: "Brainhack Ideathon",
      },
      title: "Brainhack Ideathon",
      date: "November 17, 2025",
      location: "Jamia Hamdard, New Delhi, India",
      type: "Ideathon",
      actions: {
        href: "/",
        label: "Learn More",
      }
    },
    {
      id: "12346",
      status: "Past",
      participantsCount: 200,
      image: {
        src: "https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png",
        alt: "Brainhack Ideathon",
      },
      title: "Brainhack Ideathon",
      date: "November 17, 2025",
      location: "Jamia Hamdard, New Delhi, India",
      type: "Ideathon",
      actions: {
        href: "/",
        label: "Learn More",
      }
    },
    {
      id: "12347",
      status: "Past",
      participantsCount: "200 Participents",
      image: {
        src: "https://res.cloudinary.com/dd1gsz5ak/image/upload/v1762803416/IMG_65081_ncgpuz.png",
        alt: "Brainhack Ideathon",
      },
      title: "Brainhack Ideathon",
      date: "November 17, 2025",
      location: "Jamia Hamdard, New Delhi, India",
      type: "Ideathon",
      actions: {
        href: "/",
        label: "Learn More",
      }
    },
  ]

  const services = [
    {
      id : "1234",
      title : "Hackthon",
      desc : "Full-service hackathon management from registration to prizes, ensuring smooth execution and memorable experiences."
    },
    {
      id : "1235",
      title : "Corporate Events",
      desc : "Professional corporate event planning with seamless logistics, team building activities, and brand integration."    },
    {
      id : "1236",
      title : "Workshops",
      desc : "Interactive workshop organization with expert facilitation, hands-on learning, and participant engagement tools."
    },
    {
      id : "1237",
      title : "Conferences",
      desc : "Large-scale conference management with speaker coordination, attendee engagement, and technical support."    },
    {
      id : "1238",
      title : "Product Launches",
      desc : "Memorable product launch events with media coverage, influencer engagement, and brand storytelling."    },
    {
      id : "1239",
      title : "Team Building",
      desc : "Custom team building experiences designed to strengthen collaboration and boost workplace morale."    },
  ]

  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <main className='mt-24 px-8 md:px-10 flex flex-col items-center min-h-screen overflow-hidden'>
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
            className="w-full inline-block scroll-m-20 text-5xl md:text-7xl font-extrabold tracking-tight text-shadow-xs "
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
            className="w-full md:w-3/4 mt-2 md:mt-5 text-shadow-xs text-xl"
          />
          <div className='mt-5 md:mt-10 font-semibold flex gap-5'>
            <button className='bg-white text-black backdrop-blur-md rounded-full shadow-lg py-3 px-6 scaleOnHover'><Link href="/">Learn More</Link></button>
            <button className=' hover:glassEffect border border-white text-shadow-xs rounded-full  py-3 px-6 scaleOnHover'><Link href="/">Get Started</Link></button>
          </div>
        </div>
        <div className="md:flex-[40%] h-full relative ">
          <img src="/svg/hero.Cc0GD7y9_dXnqV.svg" alt="" />
        </div>
      </section>
      <section className='w-full my-10 mx-auto'>
        <h2 className='font-semibold text-5xl text-shadow-xs py-2 px-3 bg-[#b9ff66] inline-block rounded-xl text-black'>
          Our Services
        </h2>
        <div className=' w-full mt-10 flex flex-wrap justify-center gap-7'>
          {services.map((service =>(
            <div className='customCard w-md scaleOnHover' key={service.id}>
            <h3 className='font-extrabold text-2xl'>{service.title}</h3>
            <p className='text-balance'>{service.desc}</p>
          </div>
          )))}
        </div>
      </section>
      <section className='my-10'>
        <div className='max-w-3xl'>
          <p className='font-bold text-5xl'>Our Events</p>
          <p className='text-gray-300 my-5 font-semibold text-xl'>Discover our portfolio of memorable events and upcoming opportunities</p>
        </div>
        <div className='flex flex-wrap justify-around gap-6 my-10 text-gray-300'>
          {events.map((event) => (
            <div key={event.id} className="duration-500 w-xs bg-neutral-900 relative group border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl hover:shadow-[#6b554e] transition transform hover:-translate-y-3 hover:scale-105">
              <div className='w-full flex justify-between items-center p-4 absolute top-0 z-10'>
                <span className='rounded-full px-3 bg-neutral-800 font-semibold'>{event.status}</span>
                <span className='rounded-full px-3 bg-neutral-800 font-semibold'>{event.participantsCount}</span>
              </div>
              <div className='relative top-0 w-full aspect-video rounded-3xl'>
                <Image
                  src={event.image.src}
                  // objectFit='contain'
                  fill
                  alt={event.image.alt}
                  className='w-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='p-5'>
                <b className='text-xl text-white'>{event.title}</b>
                <p className='flex items-center gap-1'><Calendar size={18} className='inline-block' />{event.date}</p>
                <p className='flex items-center gap-1'><MapPin size={18} className='inline-block' />{event.location}</p>
                <p className='flex items-center gap-1 my-1'>{event.type}</p>
                <button className=' rounded-full relative hover:glassEffect hover:scale-110 transition-transform duration-500 w-full border border-[#ff6b35] py-1 my-3 font-semibold'><Link href={event.actions.href}>{event.actions.label}</Link></button>
              </div>
            </div>
          ))}
        </div>
        <button className='bg-white text-black backdrop-blur-md text-xl rounded-full shadow-lg py-3 px-6 scaleOnHover mx-auto'><Link href="/" className='flex items-center gap-1'>View More<ArrowUpRight className='inline-block' /></Link></button>
      </section>
      <section className='my-10'>
        <div className='max-w-3xl'>
          <p className='font-bold text-5xl'>TechLab</p>
          <p className='text-gray-300 my-5 font-semibold text-xl'>Empowering Businesses With Reliable Web, Automation, and AI Services</p>
        </div>
        <div className='my-10 flex flex-wrap justify-center gap-10 md:gap-16 text-center text-gray-300'>
          <SpotlightCard className="custom-spotlight-card scaleOnHover mx-auto text-center w-xs" spotlightColor="rgba(255, 107, 53, 0.3)">
            <Globe size={70} className='mx-auto' />
            <p className='text-xl font-semibold'>Web Apps</p>
            <p>Let us create your website and build your online presence so you can share your services with the world.</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover w-xs" spotlightColor="rgba(255, 107, 53, 0.3)">
            <Workflow size={70} className='mx-auto' />
            <p className='text-xl font-semibold'>Automations</p>
            <p>We automate your repetitive tasks so you can focus on what truly matters.”</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover w-xs" spotlightColor="rgba(255, 107, 53, 0.3)">
            <Bot size={70} className='mx-auto' />
            <p className='text-xl font-semibold'>AI ML</p>
            <p>Integrate AI to make your business smarter, faster, and up-to-date.</p>
          </SpotlightCard>
        </div>
        <button className='bg-white text-black backdrop-blur-md text-xl rounded-full shadow-lg py-3 px-6 scaleOnHover mx-auto'><Link href="/" className='flex items-center gap-1'>View More<ArrowUpRight className='inline-block' /></Link></button>
      </section>
      <section className='my-10'>
        <div className='max-w-3xl'>
          <p className='font-bold text-5xl'>PrintLab</p>
          <p className='text-gray-300 my-5 font-semibold text-xl'>Premium printing solutions to elevate your brand and make lasting impressions</p>
        </div>
        <div className='my-10 flex flex-wrap justify-center gap-10 md:gap-16 text-center text-gray-300'>
          <SpotlightCard className="custom-spotlight-card scaleOnHover mx-auto text-center w-xs" spotlightColor="rgba(255, 107, 53, 0.3)">
            <Shirt size={70} className='mx-auto' />
            <p className='text-xl font-semibold'>Custom T-Shirts</p>
            <p>High-quality screen printing and embroidery on premium fabrics</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover w-xs" spotlightColor="rgba(255, 107, 53, 0.3)">
            <Coffee size={70} className='mx-auto' />
            <p className='text-xl font-semibold'>Branded Cups</p>
            <p>Eco-friendly cups with vibrant custom designs for any event</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover w-xs" spotlightColor="rgba(255, 107, 53, 0.3)">
            <SquareUser size={70} className='mx-auto' />
            <p className='text-xl font-semibold'>Name Badges</p>
            <p>Professional badge printing with lanyards and holders</p>
          </SpotlightCard>
        </div>
        <button className='bg-white text-black backdrop-blur-md text-xl rounded-full shadow-lg py-3 px-6 scaleOnHover mx-auto'><Link href="/" className='flex items-center gap-1'>View More<ArrowUpRight className='inline-block' /></Link></button>
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
            <p>Happy Attendees</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card scaleOnHover" spotlightColor="rgba(255, 107, 53, 0.3)">
            <b className='text-5xl text-white'>98%</b>
            <p>Cleint Satisfaction</p>
          </SpotlightCard>
        </div>
      </section>
      <section className='flex items-center flex-col my-10'>
        <p className='font-bold text-5xl'>Get in Touch</p>
        <p className='text-gray-300 my-5 font-semibold text-xl'>Ready to make your next event unforgettable? Let's discuss your project.</p>
        <CustomForm showHeading={false} />
        <div className='mt-5 text-center'>
          <p className='text-gray-300 text-xl'>
            Or reach us directly at:
          </p>
          <p className='text-xl font-semibold text-[#f0bba7eb]'>
            weareyunyt@gmail.com
          </p>
        </div>
      </section>
      <section className='my-10 flex flex-col items-center gap-5'>
        <p className='font-bold text-5xl'>Join Our Team</p>
        <button className='bg-white text-black backdrop-blur-md rounded-full shadow-lg py-3 px-6 scaleOnHover font-semibold'><Link href="/">Join Now<ArrowUpRight className='inline-block' /></Link></button>
      </section>
    </main>
  )
}
