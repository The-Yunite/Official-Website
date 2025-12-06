"use client"
import React from 'react'
import BlurText from '@/components/BlurText'
import ScrollFloat from '@/components/ScrollFloat'

export default function PrintLabPage() {
  return (
    <main className='px-10 flex flex-col items-center min-h-screen overflow-hidden'>

      {/* Hero Section */}
      <section id='hero' className='w-full min-h-screen flex flex-col justify-center items-center'>
        <BlurText
          text="PrintLab — Bringing Your Brand to Life."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 scroll-m-20 text-3xl md:text-7xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="From custom apparel to event signage, PrintLab delivers premium printing solutions that make your brand unforgettable."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 text-gray-300 mt-5 font-semibold text-xl justify-center"
        />
      </section>

      {/* Services Section */}
      <section className='w-full min-h-screen pt-16 mx-auto text-center'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=50%'
          scrollEnd='center bottom-=40%'
          stagger={0.07}
          textClassName='font-semibold text-4xl'
        >
          Our Printing Services
        </ScrollFloat>

        <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* Custom T-Shirts */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Custom T-Shirts</h3>
            <p className='text-gray-300 mt-2'>High-quality screen printing and embroidery on premium fabrics.</p>
          </div>

          {/* Branded Cups */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Branded Cups</h3>
            <p className='text-gray-300 mt-2'>Eco-friendly cups with vibrant custom designs for any event.</p>
          </div>

          {/* Event Banners */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Event Banners</h3>
            <p className='text-gray-300 mt-2'>Eye-catching banners in various sizes for maximum visibility.</p>
          </div>

          {/* Name Badges */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Name Badges</h3>
            <p className='text-gray-300 mt-2'>Professional badge printing with lanyards and holders.</p>
          </div>

          {/* Stickers & Decals */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Stickers & Decals</h3>
            <p className='text-gray-300 mt-2'>Durable stickers perfect for branding and giveaways.</p>
          </div>

          {/* Posters & Signage */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Posters & Signage</h3>
            <p className='text-gray-300 mt-2'>Large format printing for impactful event communication.</p>
          </div>

          {/* Business Cards */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Business Cards</h3>
            <p className='text-gray-300 mt-2'>Premium business cards with various finishes and materials.</p>
          </div>

          {/* Custom Notebooks */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Custom Notebooks</h3>
            <p className='text-gray-300 mt-2'>Branded notebooks and journals for corporate gifts.</p>
          </div>
        </div>
      </section>
    </main>
  )
}