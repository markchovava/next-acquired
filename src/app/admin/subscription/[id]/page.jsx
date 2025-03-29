import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import SubscriptionView from './_components/SubscriptionView'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientRedirect from '@/app/_components/ClientRedirect';




export default async function page() {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */

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
          <li><Link href="/admin/subscription">Subscription List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin/subscription/1" className='font-bold '>Subscription</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          Subscription Information
        </h1>
        </div>
    </section>


    <SubscriptionView />



    </>
  )
}

