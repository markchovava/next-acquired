import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  return (
    <>
    <section className='w-full bg-gray-100 pt-[2rem] pb-[3rem]'>
        {/* GRID */}
        <div className='w-[90%] mx-auto py-[1.5rem] grid lg:grid-cols-4 grid-cols-2'>
            <div className='col-span-2 pb-[2rem]'>
                <Logo />
                <p className='py-8 text-lg'>
                    Make life-changing business moves on your terms, <br /> without the hassle.
                </p>
                <div className="flex items-center gap-4 justify-start">
                    <Link href="#" className='group bg-gray-300 rounded-full p-3 drop-shadow-md'>
                        <FaFacebookF className='text-lg group-hover:scale-110 ease-linear transition-all' />
                    </Link>
                    <Link href="#" className='group bg-gray-300 rounded-full p-3 drop-shadow-md'>
                        <FaXTwitter className='text-lg group-hover:scale-110 ease-linear transition-all' />
                    </Link>
                    <Link href="#" className='group bg-gray-300 rounded-full p-3 drop-shadow-md'>
                        <FaInstagram className='text-lg group-hover:scale-110 ease-linear transition-all' />
                    </Link>
                    <Link href="#" className='group bg-gray-300 rounded-full p-3 drop-shadow-md'>
                        <FaLinkedinIn className='text-lg group-hover:scale-110 ease-linear transition-all' />
                    </Link>
                    <Link href="#" className='group bg-gray-300 rounded-full p-3 drop-shadow-md'>
                        <FaWhatsapp className='text-lg group-hover:scale-110 ease-linear transition-all' />
                    </Link>
                </div>
            </div>
            <div className='col-span-1 pb-[2rem]'>
                <h2 className='font-extrabold text-[1.5rem] mt-3'>
                    Resources
                </h2>

                <ul className='py-6 text-md flex flex-col gap-1'>
                    <li className='group'>
                        <Link href="/terms" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        Terms</Link>
                    </li>
                    <li className='group'>
                        <Link href="/privacy" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-1 pb-[2rem]'>
                <h2 className='font-extrabold text-[1.5rem] mt-3'>
                Contact Us
                </h2>
                <div className="py-6 text-md">
                    <Link href="#">support@biztrade.com</Link> 
                </div>
            </div>
        </div>

        {/*  */}
        <div className='w-[90%] mx-auto flex items-center justify-between text-sm border-t border-gray-300 py-3'>
            <div className=''>{new Date().getFullYear()} BizTrade</div>
            <div className=''>All Rights Reserved.</div>
        </div>
    </section>
    </>
  )
}
