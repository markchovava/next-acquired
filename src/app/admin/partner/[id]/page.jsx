import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import PartnerView from './_components/PartnerView'
import { _partnerViewAction } from '@/actions/PartnerActions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ClientRedirect from '@/app/_components/ClientRedirect'




export default async function page({ params: {id} }) {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
  const [partnerData, ] = await Promise.all([_partnerViewAction(id), ])


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
          <li><Link href={`/admin/partner/${id}`} className='font-bold '>Partner</Link></li>

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


    <PartnerView id={id} dbData={partnerData} />



    </>
  )
}

