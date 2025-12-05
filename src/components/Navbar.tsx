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
        <header className='w-full flex justify-between items-center fixed z-10 top-0 py-5 font-semibold px-10 backdrop-blur-md bg-white/20 md:backdrop-blur-none md:bg-transparent'>
            <div className='flex items-center'>
                <span><Image
                    src={"/logo.png"}
                    alt="Yunyt"
                    width={40}
                    height={40}
                /></span>
                <span>Yunyt</span>
            </div>
            <nav className='hidden h-16 min-w-1/2 bg-white/20 backdrop-blur-md  mx-auto rounded-full px-4 md:flex justify-center items-center '>
                <ul className='w-full flex items-center justify-around'>
                    <li className=''><Link href="/">Home</Link></li>
                    <li className=''><Link href="/">Home</Link></li>
                    <li className=''><Link href="/">Home</Link></li>
                    <li className=''><Link href="/">Home</Link></li>
                    <li className=''><Link href="/">Home</Link></li>
                </ul>
            </nav>
            <div className="hidden md:block">additional</div>
            <div className="md:hidden">
                <Drawer>
                    <DrawerTrigger><Menu /></DrawerTrigger>
                    <DrawerContent className='text-black px-2'>
                        <DrawerTitle>Menu</DrawerTitle>
                        <ul className='w-full flex flex-col items-center py-2 gap-1.5'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Home</Link></li>
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
