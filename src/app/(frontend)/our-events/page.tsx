"use client"
import React, { useEffect, useState } from 'react'
import BlurText from '@/components/BlurText'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CustomEventCard from '@/components/CustomEventCard'
import axios from "axios";
import Event from '@/types/events'

export default function EventsPage() {

  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getEvents", {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const apiResponse = response.data;

        if (apiResponse.success) {
          setPastEvents(apiResponse.pastEvents);
          setUpcomingEvents(apiResponse.upcomingEvents);
        }
        else {
          console.error("error : " + apiResponse.error)
        }
      } catch (error) {
        console.log("Error fetching events data:", error);
      }
    }
    fetchData();
  }, [])


  return (
    <main className="px-8 md:px-12 py-24 flex flex-col items-center min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col justify-center items-center text-center">
        <BlurText
          text="Crafting unforgettable experiences through events."
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.55}
          threshold={1}
          rootMargin="1px"
          className="w-full md:w-3/4 text-4xl md:text-7xl font-extrabold tracking-tight text-shadow-lg"
        />
        <BlurText
          text="From hackathons to conferences, workshops to corporate gatherings — we bring ideas to life and make every event memorable."
          delay={0}
          animateBy="words"
          direction="bottom"
          stepDuration={0.35}
          threshold={1}
          rootMargin="1px"
          className="w-full md:w-3/4 text-gray-700 mt-5 font-semibold text-xl"
        />
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="w-full mx-auto text-center mt-20">
          <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 inline-block rounded-xl text-black">
            Upcoming Events
          </h3>
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            {upcomingEvents.map(event => (
              <CustomEventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="w-full mx-auto text-center mt-20">
          <h3 className="font-bold text-5xl text-shadow-xs py-2 px-4 inline-block rounded-xl text-black">
            Past Events
          </h3>
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            {pastEvents.map(event => (
              <CustomEventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full min-h-32 flex flex-col justify-center items-center mt-24 text-center">
        <BlurText
          text="Want to host an Event with Us?"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          threshold={1}
          rootMargin="1px"
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-shadow-lg"
        />
        <button className="mt-10 bg-linear-to-r from-[#ff6b35] to-[#b9ff66] text-black rounded-full shadow-lg py-4 px-8 font-semibold hover:shadow-xl hover:brightness-110 transition">
          <Link href="/contact" className="flex items-center gap-1">Contact Us Today <ArrowUpRight size={20} /></Link>
        </button>
      </section>
    </main>
  )
}
