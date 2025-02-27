import Link from 'next/link'
import React from 'react'

import HeaderAuthLinks from './HeaderAuthLinks';
import HeaderResponsive from './HeaderResponsive';
import Logo from './Logo';


export default function Header() {
    
  return (
    <>
    <section className='relative z-50 w-full bg-white drop-shadow'>
        
        {/* HEADER */}
        <div className='w-[90%] mx-auto py-[1.8rem] hidden lg:flex items-center justify-between'>
            {/* LOGO */}
            <Logo />

            {/* NAV */}
            <nav>
                <ul className='flex items-center justify-start gap-4 font-medium'>
                    <li className='group'>
                        <Link href="/" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>Home</Link>
                    </li>
                    <li className='group'>
                        <Link href="/about" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        About Us
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href="/marketplace" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        Marketplace
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href="faq" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        FAQs
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href="/partner" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        Partners
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href="/broker" className='group-hover:text-amber-700 ease-linear duration-150 transition-all'>
                        Brokers
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* AUTH */}
            <HeaderAuthLinks />
            
        </div>

        <HeaderResponsive />

    </section>
    </>
  )
}
