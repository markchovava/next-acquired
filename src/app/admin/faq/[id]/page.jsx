import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import FaqView from './_components/FaqView'
import { _faqViewAction } from '@/actions/FaqActions'




export default async function page({params: { id } }) {
  const [faqData, ] = await Promise.all([_faqViewAction(id), ])
  
  
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
          <li><Link href="/admin/faq">FAQ List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin/faq/1" className='font-bold '>FAQ</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          FAQ Information
        </h1>
        </div>
    </section>


    <FaqView id={id} dbData={faqData} />



    </>
  )
}

