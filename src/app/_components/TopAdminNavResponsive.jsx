"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaHome } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi';



const variants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {type: 'spring', duration: 1} },
}


export default function TopAdminNavResponsive() {
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
    
    const [isOpen, setIsOpen] = useState(false);


  return (
    <>
 
    <div className='text-white mx-auto w-[90%] lg:hidden flex items-center justify-end py-3'>
        <button onClick={ () => setIsOpen(!isOpen) }>
            { isOpen ? 
            <IoClose /> : 
            <GiHamburgerMenu /> }  
        </button>
    </div>

    <AnimatePresence>
        {isOpen &&
        <motion.div 
            variants={variants} 
            initial='hidden'
            animate='visible'
            exit="hidden" 
            className='lg:hidden flex mx-auto w-[100%] py-3 items-center justify-between'>
            <ul className='w-[100%] flex flex-col items-center justify-center gap-6'>
                
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
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {eight: !isActive.eight} )}
                        className={`${isActive.eight && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
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
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/role" className='text-center'>Role List</Link>
                            </li>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/app-info" className='text-center'>AppInfo</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* USER */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {two: !isActive.two} )}
                        className={`${isActive.two && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
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
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/user" className='text-center'>User List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* FAQ */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {one: !isActive.one} )}
                        className={`${isActive.one && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
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
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/faq" className='text-center'>FAQ List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* BUSINESS */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {three: !isActive.three} )}
                        className={`${isActive.three && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
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
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/business" className='text-center'>Business List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* CATEGORY */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {four: !isActive.four} )}
                        className={`${isActive.four && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
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
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/category" className='text-center'>Category List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* PROVINCES */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {nine: !isActive.nine} )}
                        className={`${isActive.nine && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
                        Provinces
                    </button>
                    <AnimatePresence>
                        {isActive.nine &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/city" className='text-center'>Province List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* CITY */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {five: !isActive.five} )}
                        className={`${isActive.five && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
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
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/city" className='text-center'>City List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* MEMBERSHIP */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {six: !isActive.six} )}
                        className={`${isActive.six && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
                        Memberships
                    </button>
                    <AnimatePresence>
                        {isActive.six &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/membership" className='text-center'>Mmebership List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>


                {/*SUBSCRIPTIONS */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {seven: !isActive.seven} )}
                        className={`${isActive.seven && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
                        Subscriptions
                    </button>
                    <AnimatePresence>
                        {isActive.seven &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/subscription" className='text-center'>Subscriptions List</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>
                {/* MESSAGE */}
                <li className='relative z-[100] w-[100%] h-[100%]'>
                    <button 
                        onClick={() => setIsActive( {nine: !isActive.nine} )}
                        className={`${isActive.nine && "text-white font-semibold"} pb-2 w-[100%] h-[100%]`}>
                        Messages
                    </button>
                    <AnimatePresence>
                        {isActive.nine &&
                        /*  */
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='text-gray-200 text-sm relative w-[100%] drop-shadow bg-slate-950'>
                            <li className='px-2 py-2 hover:bg-black flex items-center justify-center'>
                                <Link href="/admin/message/business" className='text-center'>Business Messages</Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence>
                </li>

                


            </ul>
        </motion.div>
        }
    </AnimatePresence>


       
    </>
  )
}
