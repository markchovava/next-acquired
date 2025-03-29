import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import BusinessMessageView from './_components/BusinessMessageView'
import { _businessMessageViewAction } from '@/actions/BusinessMessageActions'



export default async function page({ params: {id} }) {
    const [businessMessageData, ] = await Promise.all([_businessMessageViewAction(id), ])
  
    return (
        <>
        <section className='w-[100%]'>
          <div className='mx-auto w-[90%] my-[1rem]'>
            {/* HEADER */}
            <ul className='flex items-center justify-start gap-2 text-sm'>
              <li><Link href="/">Home</Link></li>
              <li><FaAngleRight /></li>
              <li><Link href="/client">Dashboard</Link></li>
              <li><FaAngleRight /></li>
              <li><Link href="/client/message/business">Business Message List</Link></li>
              <li><FaAngleRight /></li>
              <li><Link href={`/client/message/business/${id}`} className='font-bold '>Business Message</Link></li>
    
            </ul>
          </div>
         </section>
    
        <section className='w-[100%] pt-[2rem]'>
            <div className='mx-auto w-[90%]'>
            <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
            Business Message Information
            </h1>
            </div>
        </section>
    
        <BusinessMessageView id={id} dbData={businessMessageData} />
        </>
      )
}
