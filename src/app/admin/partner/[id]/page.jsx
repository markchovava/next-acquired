import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import PartnerView from './_components/PartnerView'




export default function page() {
  return (
    <>
     <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-[1rem]'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin">Dashboard</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin/partner">Partner List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin/partner/1" className='font-bold '>Partner</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          Partner Information
        </h1>
        </div>
    </section>


    <PartnerView />



    </>
  )
}

