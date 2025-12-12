"use client"
import React from 'react'
import BlurText from '@/components/BlurText'

export default function TechLabPage() {
  return (
    <main className='px-10 flex flex-col items-center min-h-screen overflow-hidden'>

      {/* Hero Section */}
      <section id='hero' className='w-full min-h-screen flex flex-col justify-center items-center'>
        <BlurText
          text="TechLab — Engineering the Future of Innovation."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 scroll-m-20 text-3xl md:text-7xl font-extrabold tracking-tight text-balance justify-center text-shadow-lg"
        />
        <BlurText
          text="From scalable web platforms to AI-driven insights, TechLab empowers businesses with cutting-edge technology solutions."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin='1px'
          className="w-full md:w-3/4 text-gray-300 mt-5 font-semibold text-xl justify-center"
        />
      </section>

      {/* Solutions Section */}
      <section className='w-full min-h-screen pt-16 mx-auto text-center'>
        <p className ='font-semibold text-4xl'>
          Our Tech Solutions
        </p>
        <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-10'>
          {/* Web Development */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Web Development</h3>
            <p className='text-gray-300 mt-2'>
              Modern, responsive, and scalable web applications built with the latest frameworks and technologies.
            </p>
            <p className='text-sm text-gray-400 mt-2'>Crafting digital experiences that engage and convert.</p>
          </div>

          {/* DevOps */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>DevOps</h3>
            <p className='text-gray-300 mt-2'>
              Streamlined CI/CD pipelines, cloud infrastructure automation, and monitoring for faster, reliable delivery.
            </p>
            <p className='text-sm text-gray-400 mt-2'>Empowering teams with agility and efficiency.</p>
          </div>

          {/* AI & ML */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Artificial Intelligence & Machine Learning</h3>
            <p className='text-gray-300 mt-2'>
              Intelligent solutions powered by data — predictive analytics, recommendation systems, and automation.
            </p>
            <p className='text-sm text-gray-400 mt-2'>Transforming insights into smarter decisions.</p>
          </div>

          {/* Cybersecurity */}
          <div className='glassEffect rounded-xl shadow-lg p-6 text-left'>
            <h3 className='text-2xl font-bold text-white'>Cybersecurity</h3>
            <p className='text-gray-300 mt-2'>
              End-to-end protection with advanced threat detection, compliance, and secure infrastructure design.
            </p>
            <p className='text-sm text-gray-400 mt-2'>Safeguarding your digital assets with confidence.</p>
          </div>
        </div>
      </section>
    </main>
  )
}