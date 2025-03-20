"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaHome } from "react-icons/fa";
import TopAdminNavResponsive from './TopAdminNavResponsive';
import { getCookie } from 'cookies-next';

const variants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {type: 'spring', duration: 1} },
}


export default function TopAdminNav() {
    const [isActive, setIsActive] = useState({
        zero: false,
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
    })
    const adminToken = getCookie('ACQUIREDZW_ADMIN_COOKIE');


  return (
    <>
    {adminToken == 'Yes' &&
    <>
    <section className='w-[100%] bg-slate-900 text-gray-300'>
        <div className='hidden lg:flex mx-auto w-[90%] py-3 items-center justify-between'>
            <ul className='lg:w-auto flex items-center lg:justify-start gap-6'>
                
                {/* DASHBOARD */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <Link 
                        href="/admin"
                        onClick={() => setIsActive({zero: !isActive.zero})}
                        className={`${isActive.zero && "text-white font-semibold"} flex items-center justify-center gap-2`}>
                        <FaHome />
                        Dashboard
                    </Link>
                </li>

                {/* SETTINGS */}
                <motion.li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {eight: !isActive.eight} )}
                        className={`${isActive.eight && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Settings
                    </button>
                    <AnimatePresence>
                        {isActive.eight &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[220%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/role">Roles</Link>
                            </li>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/app-info">AppInfo</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </motion.li>

                {/* USER */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {two: !isActive.two} )}
                        className={`${isActive.two && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Users
                    </button>
                    <AnimatePresence>
                        {isActive.two &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[220%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/user">User List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                
                {/* FAQ */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {one: !isActive.one} )}
                        className={`${isActive.one && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        FAQs
                    </button>
                    <AnimatePresence>
                        {isActive.one &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[220%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/faq">FAQ List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>

                {/* BUSINESS */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {three: !isActive.three} )}
                        className={`${isActive.three && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Businesses
                    </button>
                    <AnimatePresence>
                        {isActive.three &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[160%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/business">Business List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>

                {/* CATEGORY */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {four: !isActive.four} )}
                        className={`${isActive.four && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Categories
                    </button>
                    <AnimatePresence>
                        {isActive.four &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[150%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/category">Category List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>

                {/* CITIES */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {five: !isActive.five} )}
                        className={`${isActive.five && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Cities
                    </button>
                    <AnimatePresence>
                        {isActive.five &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[180%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/city">City List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
               
                {/* Subscription */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {seven: !isActive.seven} )}
                        className={`${isActive.seven && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Subscription
                    </button>
                    <AnimatePresence>
                        {isActive.seven &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[150%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/subscription">Subscription List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>

                {/* MESSAGE */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {nine: !isActive.nine} )}
                        className={`${isActive.nine && "text-white font-semibold"} w-[100%] h-[100%]`}>
                        Message
                    </button>
                    <AnimatePresence>
                        {isActive.nine &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm absolute z-10 w-[150%] top-[140%] drop-shadow border border-gray-600 bg-slate-900 rounded-b-lg'>
                            <li className='px-2 pb-2 hover:bg-slate-950'>
                                <Link href="/admin/message/business">Business Messages</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>

            </ul>
        </div>
    </section>
    <TopAdminNavResponsive />
    </>
    }

    </>
  )
}
