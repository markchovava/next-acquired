"use client"
import { _logoutAction } from '@/actions/AuthActions';
import { cookieAdminClient } from '@/cookies/cookieAdminClient';
import { cookieAuthClient } from '@/cookies/cookieAuthClient';
import { cookieRoleClient } from '@/cookies/cookieRoleClient';
import { reactToastifyDark } from '@/utils/reactToastify';
import { getCookie } from 'cookies-next';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLoginBoxLine } from "react-icons/ri";
import { toast } from 'react-toastify';



const ulVariant = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1, y: 0,
        transition: {type: 'spring', duration: 1} },
}



export default function HeaderAuthLinks() {
    const authToken = getCookie('ACQUIREDZW_AUTH_COOKIE');
    const adminToken = getCookie('ACQUIREDZW_ADMIN_COOKIE');
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const { removeAuthCookie, cookieAuthName } = cookieAuthClient()
    const { removeAdminCookie, cookieAdminName } = cookieAdminClient()
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
    <div className='relative'>
        <button 
            onClick={() => setIsActive(!isActive)} 
            className='group flex items-center gap-4 border border-slate-500 rounded-full px-4 py-3'>
            <GiHamburgerMenu />
            <FaUser className={`group-hover:text-amber-600 duration-100 ease-in-out transtion-all`} />
        </button>
        <AnimatePresence>
            {isActive == true &&
            <motion.ul
                variants={ulVariant} 
                initial='hidden'
                animate='visible'
                exit="hidden" 
                className='absolute top-[100%] right-0 z-50 bg-white drop-shadow-md rounded-lg overflow-hidden'>
                { authToken ?
                <>
                    <li className='w-[100%] px-3 py-2 text-slate-800 hover:bg-gray-100 mb-2'>
                        <Link 
                        href={`/${adminToken == 'Yes' ? 'admin' : 'client'}/profile`} 
                        className='flex items-center justify-between gap-6'>
                            <FaUser className='text-[1.3rem]' />
                            <span>Profile</span>
                        </Link>
                    </li>
                    { adminToken == 'No' &&
                    <li className='w-[100%] px-3 py-2 text-slate-800 hover:bg-gray-100'>
                        <Link href='/client' 
                            className='flex items-center justify-between gap-6'>
                            <RiLoginBoxLine className='text-[1.5rem]' />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    }
                    <li className='w-[100%] px-3 py-2 text-slate-800 hover:bg-gray-100'>
                        <button onClick={postLogout} 
                            className='flex items-center justify-between gap-6'>
                            <RiLoginBoxLine className='text-[1.5rem]' />
                            <span>Logout</span>
                        </button>
                    </li>
                </>
                :
                <li className='w-[100%] px-3 py-2 text-slate-800 hover:bg-gray-100'>
                    <Link href="/login" className='flex items-center justify-between gap-6'>
                    <RiLoginBoxLine className='text-[1.5rem]' />
                    <span>Login</span>
                    </Link>
                </li>
                
                }

            </motion.ul>
            }
        </AnimatePresence>
    </div>
  )
}
