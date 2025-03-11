"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';


const ulVariant = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1, y: 0,
        transition: {type: 'spring', duration: 1} },
}


export default function HeaderResponsive() {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
    {/* HEADER */}
    <div className='w-[90%] mx-auto py-[1.5rem] flex lg:hidden items-center justify-between'>
        {/* LOGO */}
        <Logo />

        <button 
            onClick={() => setIsActive(!isActive)} 
            className='group flex items-center gap-4 border border-slate-500 rounded-full px-4 py-3'>
            <GiHamburgerMenu />
            <FaUser className={`group-hover:text-amber-600 duration-100 ease-in-out transtion-all`} />
        </button>
    </div>
   


   <AnimatePresence>
        {isActive &&
            <motion.ul 
                variants={ulVariant} 
                initial='hidden'
                animate='visible'
                exit="hidden" 
                className='w-[100%] py-4 lg:hidden flex flex-col items-center justify-start gap-4 font-medium bg-white drop-shadow'>
                <motion.li className='group'>
                    <Link href="/" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Home
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/about" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        About Us
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/membership" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Membership
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/faq" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        FAQs
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/partner" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        Partners
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/broker" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Brokers
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/login" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Login
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link href="/admin/profile" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Profile
                    </Link>
                </motion.li>
            </motion.ul>
        }
   </AnimatePresence>

        

    </>
  )
}
