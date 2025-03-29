import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import ClientRedirect from '@/app/_components/ClientRedirect';
import StatusEdit from './_components/StatusEdit'
import { _businessViewAction } from '@/actions/BusinessActions';



export default async function page({ params: {id} }) {
    const cookieStore = await cookies();
    const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
    if(!adminCookie?.value){ redirect('/login') }
    if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
    /*  */
    const [businessData, ] = await Promise.all([ _businessViewAction(id), ])


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
            <li><Link href="/admin/business">Business List</Link></li>
            <li><FaAngleRight /></li>
            <li><Link href={`/admin/business/${id}`}>
              {businessData?.data?.name}</Link>
            </li>
            <li><FaAngleRight /></li>
            <li><Link href={`/admin/business/status/${id}`} className='font-bold '>Business Status</Link></li>

          </ul>
        </div>
      </section>

      <section className='w-[100%] pt-[2rem]'>
          <div className='mx-auto w-[90%]'>
          <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
            Update Status Business
          </h1>
          </div>
      </section>

      <StatusEdit id={id} dbData={businessData} />
      </>
    )
}
