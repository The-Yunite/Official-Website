import { Calendar, MapPinned } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CustomEventProps {
    event: {
        id: string,
        title: string,
        status: string,
        participantsCount?: number,
        image: {
            Local?: string;
            cloudinaryUrl?: string;
        };
        date: string,
        description?: string,
        location: string,
        type: string,
        action: { href?: string, label?: string },
    }
}

const CustomEventCard = ({ event, }: CustomEventProps) => {
    return (
        <div className={`w-xs bg-white/70 relative group border border-black/10 rounded-3xl backdrop-blur-sm overflow-hidden shadow-lg ${event.status.toLowerCase() !== "past" ? "hover:shadow-[#b9ff66]/40" : "hover:shadow-[#ff6b35]/40"} transition transform hover:-translate-y-3 hover:scale-105`}>
            {(event.image.cloudinaryUrl || event.image.Local) && (
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                        src={event.image.cloudinaryUrl || event.image.Local || ""}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            <div className="p-6 text-left">
                <b className="text-2xl text-black">{event.title}</b>
                <p className="text-gray-800 mt-2">{event.description}</p>
                <p className="flex items-center gap-1 text-gray-700 mt-3"><Calendar size={22} /> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="flex items-center gap-1 text-gray-700"><MapPinned size={22} /> {event.location}</p>
                {event.status.toLowerCase() !== "past" && (
                    <button className="rounded-full hover:bg-[#ff6b35]/15 hover:scale-105 transition-transform duration-500 w-full border border-[#ff6b35] py-2 mt-4 font-semibold text-black">
                        <Link href={event.action.href || ""}>{event.action.label || ""}</Link>
                    </button>
                )}
            </div>
        </div>
    )
}

export default CustomEventCard
