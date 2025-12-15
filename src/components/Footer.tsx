import { SiLinktree } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-white/10 backdrop-blur-md text-primary rounded-t-lg'>
            <div className='w-full flex px-10 py-5 items-start justify-between flex-col md:flex-row gap-7'>
                <div className='max-w-xs flex-1/4'>
                    <Image
                        src={"/logo.png"}
                        alt="Yunyt"
                        width={80}
                        height={80}
                    />
                    <div>Making events memorable and brands stand out since 2025.</div>
                </div>
                <div className="flex w-full md:flex-2/4">
                <ul className="flex-1/2">
                    <div className='font-bold'>Quick Links</div>
                    <li><Link href="/our-events">Our Events</Link></li>
                    <li><Link href="/techLAB">TechLab</Link></li>
                    <li><Link href="/aboutUs">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/joinUs">Join Yunyt</Link></li>
                </ul>
                <ul className="flex-1/2">
                    <div className='font-bold'>Services</div>
                    <li><Link href="/our-events">Event Management</Link></li>
                    <li><Link href="/techLAB">Tech Services</Link></li>
                </ul>
                </div>
                <div className='flex-1/4'>
                    <ul>
                        <div className='font-bold'>Contact Us</div>
                        <li>Email: <Link href={"mailto:weareyunyt@gmail.com"} >weareyunyt@gmail.com</Link></li>
                        <li>Phone: <Link href={"tel:+919643748904"} >+91 9643748904</Link></li>
                        <li>Phone: <Link href={"tel:+919718301702"} >+91 9718301702</Link></li>
                        <li>Address: <Link href={"https://maps.app.goo.gl/VwGMguWRiWrXJEpp8"} >Okhla, New Delhi, India</Link></li>
                        <li className="mt-2 flex gap-4 "><SiLinktree size={24}/> <FiInstagram size={24}/> <FaLinkedinIn size={24}/> <FaWhatsapp size={24}/></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between px-5 py-7'>
                <div>&copy; 2025 Yunyt. All rights reserved.</div>
                <ul className='flex items-center justify-center gap-3'>
                    <li><Link href="/">Policies</Link></li>
                    <li><Link href="/">Terms</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
