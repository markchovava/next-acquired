"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { getCookie } from 'cookies-next';
import { cookieAuthClient } from '@/cookies/cookieAuthClient';
import { cookieAdminClient } from '@/cookies/cookieAdminClient';
import { cookieRoleClient } from '@/cookies/cookieRoleClient';
import { toast } from 'react-toastify';
import { reactToastifyDark } from '@/utils/reactToastify';
import { _logoutAction } from '@/actions/AuthActions';
import { useRouter } from 'next/navigation';


const ulVariant = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1, y: 0,
        transition: {type: 'spring', duration: 1} },
}


export default function HeaderResponsive() {
    const authToken = getCookie('ACQUIREDZW_AUTH_COOKIE');
    const adminToken = getCookie('ACQUIREDZW_ADMIN_COOKIE');
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const { removeAuthCookie } = cookieAuthClient()
    const { removeAdminCookie } = cookieAdminClient()
    const { removeRoleCookie,  } = cookieRoleClient()

    async function postLogout() {
            try{
            const res = await _logoutAction()
            if(res?.status == 1) {
                removeAuthCookie()
                removeRoleCookie()
                removeAdminCookie()
                toast.success(res?.message, reactToastifyDark)
                router.push('/login')
                return
            } }
            catch (error) {
                console.error(`Error: ${error}`)
                console.error(`Error Message: ${error.message}`);
                console.error(`Error Response: ${error.response}`);
            } 
    
        }


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
                {authToken ?
                <>
                <motion.li className='group'>
                    <Link 
                        href={adminToken == 'Yes' ? '/admin/profile' : '/client/profile'} 
                        className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Profile
                    </Link>
                </motion.li>
                <motion.li className='group'>
                    <Link 
                        href={adminToken == 'Yes' ? '/admin' : '/client'} 
                        className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Dashboard
                    </Link>
                </motion.li>
                {/* EMAIL */}
                <motion.li className='group'>
                    <Link 
                        href={adminToken == 'Yes' ? '/admin/email' : '/client/email'} 
                        className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Email
                    </Link>
                </motion.li>
                {/* PASSWORD */}
                <motion.li className='group'>
                    <Link 
                        href={adminToken == 'Yes' ? '/admin/password' : '/client/password'} 
                        className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Password
                    </Link>
                </motion.li>
                {/* LOGOUT */}
                <motion.li className='group'>
                    <button 
                        onClick={() => postLogout()}
                        className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Logout
                    </button>
                </motion.li>
                </>
                :
                <motion.li className='group'>
                    <Link href="/login" className='group-hover:text-amber-600 ease-linear duration-150 transition-all'>
                        Login
                    </Link>
                </motion.li>
                }
            </motion.ul>
        }
   </AnimatePresence>

        

    </>
  )
}
