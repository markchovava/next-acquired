import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import FaqList from './_components/FaqList'
import { _faqListAction } from '@/actions/FaqActions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ClientRedirect from '@/app/_components/ClientRedirect'


export default async function page() {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
  const [faqsData, ] = await Promise.all([_faqListAction(), ])
  
  
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
          <li><Link href="/admin/faq" className='font-bold '>FAQ List</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          FAQ List
        </h1>
        </div>
    </section>

    <FaqList dbData={faqsData} />
    </>
  )
}
