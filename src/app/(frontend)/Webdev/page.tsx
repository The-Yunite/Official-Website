"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import BlurText from "@/components/BlurText"
import { Code, Smartphone, ShoppingCart, Cloud, Shield, Layout, ExternalLink } from "lucide-react"
import Link from "next/link"


function useInView(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState<boolean>(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, inView }
}

/* Impact card*/
type ImpactCardProps = { stat: string; label: string }

function ImpactCard({ stat, label }: ImpactCardProps) {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const [count, setCount] = useState<number>(0)

  const isAnimatable = /^\d+\+?$/.test(stat)
  const target = isAnimatable ? parseInt(stat.replace(/\D/g, ""), 10) || 0 : null

  useEffect(() => {
    if (!inView || !isAnimatable || target === null) return
    let start = 0
    const duration = 1200
    const step = Math.max(1, Math.ceil(target / (duration / 30)))
    const interval = setInterval(() => {
      start += step
      if (start >= target) {
        clearInterval(interval)
        setCount(target)
      } else {
        setCount(start)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [inView, isAnimatable, target])

  return (
    <div
      ref={ref}
      className={`rounded-3xl bg-gradient-to-br from-white/90 to-white/70 border border-gray-200 shadow-lg p-10 transition-transform duration-500
                  ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                  hover:shadow-2xl hover:shadow-[#ff6b35]/30 hover:-translate-y-2 hover:scale-[1.03]`}
    >
      <h3 className="text-4xl font-extrabold text-black mb-2">
        {isAnimatable ? (
          <>
            {count}
            {stat.endsWith("+") ? "+" : ""}
          </>
        ) : (
          stat
        )}
      </h3>
      <p className="text-gray-800 text-md font-semibold">{label}</p>
    </div>
  )
}

/*Project card*/
type ProjectCardProps = { title: string; desc: string; href: string }

function ProjectCard({ title, desc, href }: ProjectCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 transition-all duration-500
        ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
        hover:shadow-xl hover:shadow-[#ff6b35]/30 hover:-translate-y-2`}
    >
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: "0 0 80px 20px rgba(255,107,53,0.15)" }}
      />
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
      <p className="text-gray-700 text-sm mb-5">{desc}</p>
      <Link href={href} target="_blank" className="inline-flex items-center gap-2 text-[#ff6b35] font-semibold hover:underline">
        View project <ExternalLink size={18} />
      </Link>
    </div>
  )
}

/* Process timeline data */
const steps: { title: string; desc: string }[] = [
  { title: "Discovery", desc: "Understanding your goals and audience." },
  { title: "Design", desc: "Wireframes and prototypes with clarity." },
  { title: "Development", desc: "Robust code and scalable architecture." },
  { title: "Launch", desc: "Deployment, optimization, and support." },
]

/* Process timeline */
type Point = { x: number; y: number }
type ProcessTimelineProps = { activeStep: number; setActiveStep: React.Dispatch<React.SetStateAction<number>> }

function ProcessTimeline({ activeStep, setActiveStep }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [centers, setCenters] = useState<Point[]>([])

  const setBtnRef = (index: number) => (el: HTMLButtonElement | null): void => {
    btnRefs.current[index] = el
  }

  const measureCenters = (): void => {
    const container = containerRef.current
    if (!container) return
    const containerRect = container.getBoundingClientRect()
    const pts: Point[] = steps.map((_, i) => {
      const el = btnRefs.current[i]
      if (!el) return { x: 0, y: 0 }
      const rect = el.getBoundingClientRect()
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      }
    })
    setCenters(pts)
  }

  useLayoutEffect(() => {
    measureCenters()
    const onResize = () => measureCenters()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    measureCenters()
  }, [activeStep])

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Capsules row */}
      <div className="grid grid-cols-4 gap-24 items-start relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            <button
              ref={setBtnRef(i)} // callback ref returns void
              type="button"
              onClick={() => setActiveStep(i)}
              className={`rounded-full px-6 py-2 text-sm font-semibold border transition-all duration-300 min-w-36 text-center
                ${i <= activeStep
                  ? "bg-[#b9ff66] text-black border-[#a2f253] shadow-md"
                  : "bg-white/80 text-black border-gray-200"}
                ${i === activeStep ? "scale-105" : "opacity-80 hover:opacity-100"}`}
              aria-pressed={i === activeStep}
            >
              {step.title}
            </button>
            <p className="mt-3 max-w-xs text-gray-700 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* SVG connectors */}
      {centers.length === steps.length && (
        <svg className="absolute inset-0 z-0 pointer-events-none" width="100%" height="100%">
          {centers.slice(0, -1).map((p: Point, i: number) => {
            const q: Point = centers[i + 1]
            return (
              <line
                key={i}
                x1={p.x}
                y1={p.y}
                x2={q.x}
                y2={q.y}
                stroke={i < activeStep ? "#ff6b35" : "#d1d5db"}
                strokeWidth={2}
                strokeDasharray="6 6"
              />
            )
          })}
        </svg>
      )}
    </div>
  )
}

export default function WebDevPage() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <main className="px-10 flex flex-col items-center">

      {/* Hero */}
      <section className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center pt-24">
        <BlurText
          text="Web Development by Yunyt"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="text-4xl md:text-6xl font-extrabold text-shadow-lg text-black"
        />
        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-3xl">
          We build immersive, premium web experiences — where elegant design meets technical rigor.
        </p>
      </section>

      {/* Services */}
      <section className="w-full md:w-5/6 mb-28">
        <h2 className="text-3xl font-bold text-black text-center mb-14">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Code, title: "Custom Websites", desc: "Brand‑aligned sites crafted with performance and polish." },
            { icon: Smartphone, title: "Responsive Design", desc: "Optimized layouts for every device." },
            { icon: ShoppingCart, title: "E‑Commerce", desc: "Scalable stores with secure payments." },
            { icon: Cloud, title: "Web Apps & SaaS", desc: "Robust apps and cloud‑ready architectures." },
            { icon: Shield, title: "Security & Optimization", desc: "Speed, SEO, and protection baked in." },
            { icon: Layout, title: "UI/UX Engineering", desc: "Premium visuals and frictionless flows." },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 transition-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#ff6b35]/30"
            >
              <s.icon size={42} className="text-black mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>
              <p className="text-gray-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="w-full md:w-5/6 mb-28">
        <h2 className="text-3xl font-bold text-black text-center mb-14">How We Work</h2>
        <ProcessTimeline activeStep={activeStep} setActiveStep={setActiveStep} />
      </section>

      {/* Showcase */}
      <section className="w-full md:w-5/6 mb-28">
        <h2 className="text-3xl font-bold text-black text-center mb-14">Showcase of Our Work</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Corporate Website", desc: "Enterprise site redefining digital presence.", href: "https://yourprojectlink1.com" },
            { title: "Analytics Dashboard", desc: "Real‑time insights for a fintech startup.", href: "https://yourprojectlink2.com" },
            { title: "Creative Landing Page", desc: "Campaign page boosting conversions.", href: "https://yourprojectlink3.com" },
          ].map((proj, i) => (
            <ProjectCard key={i} title={proj.title} desc={proj.desc} href={proj.href} />
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="w-full md:w-5/6 mb-28">
        <h2 className="text-3xl font-bold text-black text-center mb-14">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <ImpactCard stat="50+" label="Projects" />
          <ImpactCard stat="10+" label="Industries" />
          <ImpactCard stat="100%" label="Satisfaction" />
          <ImpactCard stat="24/7" label="Support" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full md:w-5/6 mb-28">
        <h2 className="text-3xl font-bold text-black text-center mb-14">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { name: "Tech Startup CEO", quote: "Yunyt turned our vision into a product that scales — beautiful, fast, and reliable." },
            { name: "E‑commerce Founder", quote: "Performance jumped, checkout feels premium, and conversions followed. True partners." },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 transition hover:shadow-xl hover:shadow-[#ff6b35]/30"
            >
              <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
              <h4 className="text-black font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
