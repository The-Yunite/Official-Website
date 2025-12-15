"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pages = [
        { name: "Home", href: "/" },
        { name: "Our Events", href: "/our-events" },
        { name: "TechLAB", href: "/techLAB" },
        { name: "About Us", href: "/aboutUs" },
        { name: "Contact Us", href: "/contact" },
    ]

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full text-primary flex justify-between items-center fixed z-10 top-0 py-5 px-14 transition-all duration-300 glassEffect ${scrolled ? 'md:glassEffect' : 'md:backdrop-blur-none md:bg-transparent'}`}>
            <div className='flex items-center'>
                <span><Image
                    src={"/logo.png"}
                    alt="Yunyt"
                    width={40}
                    height={40}
                /></span>
                <h1 className=' font-semibold text-lg'>Yunyt</h1>
            </div>
            <nav className={`hidden h-16 min-w-1/2 mx-auto rounded-full px-4 md:flex justify-center items-center transition-all duration-300 ${scrolled ? '' : 'glassEffect'}`}>
                <ul className={`w-full flex items-center justify-around ${scrolled && "text-shadow-lg"}`}>
                    {pages.map((page) => (
                        <li key={page.href} className={`popOnHover scaleOnHover ${(pathname === page.href) && " font-semibold "}`}><Link href={page.href}>{page.name}</Link></li>
                    ))}
                </ul>
            </nav>
            <div className="hidden md:block underline mb-1"><Link href="/joinUs">Join Yunyt</Link></div>
            <div className="md:hidden">
                {/* Hamburger Button */}
                <button
                    onClick={() => setOpen(true)}
                    className=""
                >
                    <Menu />
                </button>
            </div>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-xl font-bold"
                    >
                        <X />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="p-4 space-y-4">
                    <ul className='ml-4'>
                        {pages.map((page) => (
                            <li key={page.href} className={`popOnHover my-3 scaleOnHover ${(pathname === page.href) && " font-semibold"}`}><Link href={page.href}>{page.name}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
