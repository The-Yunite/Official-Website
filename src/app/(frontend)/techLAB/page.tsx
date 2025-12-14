"use client"
import React from "react"
import BlurText from "@/components/BlurText"
import Image from "next/image"
import Link from "next/link"
import { Globe, Workflow, Bot, Shield, ArrowUpRight } from "lucide-react"

export default function TechLabPage() {
  const solutions = [
    {
      id: "s1",
      title: "Web Development",
      desc: "Modern, responsive, and scalable web applications built with the latest frameworks and technologies.",
      sub: "Crafting digital experiences that engage and convert.",
      icon: Globe,
      image: "/logo.png",
    },
    {
      id: "s2",
      title: "DevOps",
      desc: "Streamlined CI/CD pipelines, cloud infrastructure automation, and monitoring for faster, reliable delivery.",
      sub: "Empowering teams with agility and efficiency.",
      icon: Workflow,
      image: "/logo.png",
    },
    {
      id: "s3",
      title: "Artificial Intelligence & Machine Learning",
      desc: "Intelligent solutions powered by data — predictive analytics, recommendation systems, and automation.",
      sub: "Transforming insights into smarter decisions.",
      icon: Bot,
      image: "/logo.png",
    },
    {
      id: "s4",
      title: "Cybersecurity",
      desc: "End-to-end protection with advanced threat detection, compliance, and secure infrastructure design.",
      sub: "Safeguarding your digital assets with confidence.",
      icon: Shield,
      image: "/logo.png",
    },
  ]

  return (
    <main className="px-8 md:px-12 flex flex-col items-center overflow-hidden pb-40">
      {/* Hero Section */}
      <section id="hero" className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center pt-32">
        <BlurText
          text="TechLab — Engineering the Future of Innovation."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="w-full md:w-3/4 text-4xl md:text-7xl font-extrabold tracking-tight text-shadow-lg text-black"
        />
        <BlurText
          text="From scalable web platforms to AI-driven insights, TechLab empowers businesses with cutting-edge technology solutions."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin="1px"
          className="w-full md:w-3/4 text-gray-700 mt-6 font-semibold text-lg md:text-xl"
        />
      </section>

      {/* Solutions Section */}
      <section className="w-full py-20 mx-auto text-center">
        <h2 className="font-bold text-5xl text-shadow-xs py-2 px-4 bg-[#b9ff66] inline-block rounded-xl text-black">
          Our Tech Solutions
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
          {solutions.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.id}
                className="w-full max-w-[400px] h-[480px] flex flex-col bg-white border border-black/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#ff6b35]/40 transition-transform hover:-translate-y-2"
              >
                <div className="relative w-full h-48 bg-white/60">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="flex-1 p-6 text-left flex flex-col justify-between">
                  <div>
                    <Icon size={50} className="text-black mb-3" />
                    <h3 className="text-2xl font-extrabold text-black">{s.title}</h3>
                    <p className="text-gray-800 mt-2">{s.desc}</p>
                    <p className="text-sm text-gray-600 mt-2">{s.sub}</p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link href="/" className="inline-flex items-center gap-2 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-md py-2 px-4 font-semibold hover:shadow-lg transition">
                      Learn More <ArrowUpRight size={18} />
                    </Link>
                    <Link href="/" className="inline-flex items-center gap-2 border border-black rounded-full py-2 px-4 font-semibold text-black hover:bg-black/10 transition">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full mx-auto text-center mt-24">
        <div className="flex flex-wrap justify-center gap-12 text-center text-2xl text-gray-800">
          <div className="w-48 h-48 flex flex-col justify-center items-center border border-black/10 bg-white/70 shadow-lg hover:shadow-[#ff6b35]/40 rounded-2xl">
            <b className="text-5xl text-black">50+</b>
            <p>Projects</p>
          </div>
          <div className="w-48 h-48 flex flex-col justify-center items-center border border-black/10 bg-white/70 shadow-lg hover:shadow-[#ff6b35]/40 rounded-2xl">
            <b className="text-5xl text-black">99.9%</b>
            <p>Uptime</p>
          </div>
          <div className="w-48 h-48 flex flex-col justify-center items-center border border-black/10 bg-white/70 shadow-lg hover:shadow-[#ff6b35]/40 rounded-2xl">
            <b className="text-5xl text-black">100%</b>
            <p>Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full min-h-32 flex flex-col justify-center items-center mt-24">
        <BlurText
          text="Ready to build the future with TechLab?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin="1px"
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-shadow-lg text-black"
        />
        <Link
          href="/contact"
          className="mt-10 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-4 px-10 font-semibold hover:shadow-xl hover:brightness-110 transition inline-flex items-center gap-2"
        >
          Contact Us <ArrowUpRight size={22} />
        </Link>
      </section>
    </main>
  )
}
