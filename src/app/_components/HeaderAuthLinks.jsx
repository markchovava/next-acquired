"use client"
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLoginBoxLine } from "react-icons/ri";



const ulVariant = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1, y: 0,
        transition: {type: 'spring', duration: 1} },
}



export default function HeaderAuthLinks() {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='relative'>
        <button 
            onClick={() => setIsActive(!isActive)} 
            className='group flex items-center gap-4 border border-slate-500 rounded-full px-4 py-3'>
            <GiHamburgerMenu />
            <FaUser className={`group-hover:text-amber-600 duration-100 ease-in-out transtion-all`} />
        </button>
       {/*  <button 
            onClick={() => setIsActive(!isActive)}>
            <FaUser className={`${isActive && "text-amber-600"} hover:text-amber-600 duration-100 ease-in-out transtion-all`} />
        </button> */}
        <AnimatePresence>
            {isActive == true &&
            <motion.ul
                variants={ulVariant} 
                initial='hidden'
                animate='visible'
                exit="hidden" 
                className='absolute top-[100%] right-0 z-50 bg-white drop-shadow-md rounded-lg overflow-hidden'>
                <li className='w-[100%] px-3 py-2 text-slate-800 hover:bg-gray-100 mb-2'>
                    <Link href="/admin/profile" className='flex items-center justify-between gap-6'>
                    <FaUser className='text-[1.3rem]' />
                    <span>Profile</span>
                    </Link>
                </li>
                <li className='w-[100%] px-3 py-2 text-slate-800 hover:bg-gray-100'>
                    <Link href="/login" className='flex items-center justify-between gap-6'>
                    <RiLoginBoxLine className='text-[1.5rem]' />
                    <span>Login</span>
                    </Link>
                </li>
            </motion.ul>
            }
        </AnimatePresence>
    </div>
  )
}
