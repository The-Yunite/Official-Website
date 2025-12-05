import Link from 'next/link'
import React from 'react'
import {Menu} from 'lucide-react'

const Navbar = () => {
    return (
            <header className='w-full flex justify-between items-center fixed z-10 top-5 font-semibold px-10'>
                <div>Logo</div>
                <nav className='hidden h-16 min-w-1/2 bg-white/20 backdrop-blur-md  mx-auto rounded-full px-4 md:flex justify-center items-center shadow-lg '>
                    <ul className='w-full flex items-center justify-around'>
                        <li className=''><Link href="/">Home</Link></li>
                        <li className=''><Link href="/">Home</Link></li>
                        <li className=''><Link href="/">Home</Link></li>
                        <li className=''><Link href="/">Home</Link></li>
                        <li className=''><Link href="/">Home</Link></li>
                    </ul>
                </nav>
                <div className="hidden md:block">additional</div>
                <Menu className="md:hidden" />
            </header>
    )
}

export default Navbar
