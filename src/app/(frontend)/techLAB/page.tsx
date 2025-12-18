"use client"
import React, { useEffect, useState } from "react"
import BlurText from "@/components/BlurText"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import axios from "axios"
import TechService from "@/types/techServices"
import DynamicLucideIcon from "@/components/DynamicLucideIcon"

export default function TechLabPage() {

  const [fetching, setFetching] = useState<boolean>();
  const [techServices, settechServices] = useState<TechService[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      setFetching(true);
      try {

        const storedtechServices = sessionStorage.getItem('techServices');

        if (storedtechServices) {
          settechServices(JSON.parse(storedtechServices));
          setFetching(false);
        }
        else {

          const response = await axios.get("/getTechServices", {
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const apiResponse = response.data;

          if (apiResponse.success) {
            setFetching(false);
            const data = apiResponse.techServices;
            settechServices(data);
            sessionStorage.setItem('techServices', JSON.stringify(data))
          }
          else {
            console.error("error : " + apiResponse.error)
            setFetching(false)
          }
        }
      } catch (error) {
        console.log("Error fetching events data:", error);
        setFetching(false)
      }
      finally {
        setFetching(false)
      }
    }
    fetchData();
  }, [])

  return (
    <main className="px-8 md:px-12 flex flex-col items-center overflow-hidden pb-40">
      {/* Hero Section */}
      <section id="hero" className="w-full] flex flex-col justify-center items-center text-center pt-32">
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
        <h2 className="font-bold text-5xl text-shadow-xs underline underline-offset-4 px-4 inline-block rounded-xl text-black">
          Our Tech Solutions
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
          {techServices.map((s) => {
            return (
              <article
                key={s.id}
                className="w-full max-w-[400px] flex flex-col bg-white border border-black/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#ff6b35]/40 transition-transform hover:-translate-y-2"
              >
                {(s.image?.cloudinaryUrl || s.image?.Local) && (

                  <div className="relative w-full h-48 bg-white/60">
                    <Image
                      src={s.image?.cloudinaryUrl || s.image.Local?.url || ""}
                      alt={s.title}
                      fill
                      className="object-cover w-full"
                    />
                  </div>
                )}
                <div className="flex-1 p-6 text-left flex flex-col justify-between">
                  <div>
                    <DynamicLucideIcon
                      iconName={s.icon}
                      size={50}
                      // color="" 
                      className="text-black mb-3"
                    />
                    <h3 className="text-2xl font-extrabold text-black">{s.title}</h3>
                    <p className="text-gray-800 mt-2">{s.description}</p>
                    <p className="text-sm text-gray-600 mt-2">{s.subDescription}</p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link href="/Webdev" className="inline-flex items-center gap-2 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-md py-2 px-4 font-semibold hover:shadow-lg transition">
                      Learn More <ArrowUpRight size={18} />
                    </Link>
                    <Link href="/quote" className="inline-flex items-center gap-2 border border-black rounded-full py-2 px-4 font-semibold text-black hover:bg-black/10 transition">
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
