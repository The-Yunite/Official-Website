import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className='w-full flex justify-between items-center fixed z-10 top-0 py-5 font-semibold px-10 glassEffect md:backdrop-blur-none md:bg-transparent'>
            <div className='flex items-center'>
                <span><Image
                    src={"/logo.png"}
                    alt="Yunyt"
                    width={40}
                    height={40}
                /></span>
                <h1>Yunyt</h1>
            </div>
            <nav className='hidden h-16 min-w-1/2 glassEffect mx-auto rounded-full px-4 md:flex justify-center items-center '>
                <ul className='w-full flex items-center justify-around'>
                    <li className=''><Link href="/">Home</Link></li>
                    <li className=''><Link href="/our-events">Our Events</Link></li>
                    <li className=''><Link href="/printLAB">PrintLAB</Link></li>
                    <li className=''><Link href="/techLAB">TechLAB</Link></li>
                    <li className=''><Link href="/aboutUs">About Us</Link></li>
                    <li className=''><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="hidden md:block underline mb-1"><Link href="/joinUs">Join Yunyt</Link></div>
            <div className="md:hidden">
                <Drawer>
                    <DrawerTrigger><Menu /></DrawerTrigger>
                    <DrawerContent className='text-black px-2'>
                        <DrawerTitle>Menu</DrawerTitle>
                        <ul className='w-full flex flex-col items-center py-2 gap-1.5'>
                            <li className=''><Link href="/">Home</Link></li>
                            <li className=''><Link href="/our-events">Our Events</Link></li>
                            <li className=''><Link href="/printLAB">PrintLAB</Link></li>
                            <li className=''><Link href="/techLAB">TechLAB</Link></li>
                            <li className=''><Link href="/aboutUs">About Us</Link></li>
                            <li className=''><Link href="/contact">Contact Us</Link></li>
                        </ul>
                        <DrawerFooter>
                            <DrawerClose>
                                <Button className='w-3/4' variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}

export default Navbar
