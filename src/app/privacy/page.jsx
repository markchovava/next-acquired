import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <section className='w-[100%] h-[20rem] bg-rose-950 text-white'>
        <div className='w-[90%] h-[100%] mx-auto leading-tight flex flex-col items-center justify-center gap-4'>
            <h1 className='text-[3.6rem] leading-tight font-serif'>Privacy policy</h1>
            <p className='text-xl'>
                Please read our Privacy Policy carefully.
            </p>
            <p className='text-sm text-center'>
                If you have any questions, please reach out <br />
                to our team 
                <Link href="mailto:support@bizscout.com" className='ml-2 underline hover:no-underline ease-linear'>
                support@bizscout.com</Link>.
            </p>
        </div>
    </section>

    <section className='w-[100%]'>
        <div className='w-[90%] mx-auto grid lg:grid-cols-4 grid-col-1 gap-5 pt-[4rem] pb-[5rem]'>
            <div className='lg:col-span-1'>
                <ul>
                    {[...Array(12)].map((key) => (
                        <li className='group p-2 hover:bg-amber-100 ease-linear duration-150 transition-all rounded-2xl overflow-hidden'>
                            <Link href="#" className='text-amber-900'>
                                Who we are and what we do (and what we don't do)?
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='lg:col-span-3 pt-4'>
                {/*  */}
                <div className='mb-4'>
                    <span className='p-3 bg-green-100 text-green-950 rounded-xl'>
                        Last updated: July 15, 2024
                    </span>
                </div>
                {/*  */}
                {[...Array(18)].map((key) => (
                    <div className='mb-4'>
                        <h3 className='leading-tight font-semibold mb-2'>
                            Who we are and what we do (and what we don't do)?
                        </h3>
                        <p className='mb-2'>
                            These Terms of Service constitute a legally binding contract between you and BizScout
                            LLC and govern your access to and use of our website, products, services, and 
                            applications (collectively, the "Services").
                        </p>
                        <p className='mb-2'>
                            These Terms of Service constitute a legally binding contract between you and BizScout
                            LLC and govern your access to and use of our website, products, services, and 
                            applications (collectively, the "Services").
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
