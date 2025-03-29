import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { _profileAction } from '@/actions/AuthActions';
import EmailEdit from './_components/EmailEdit';



export default async function page() {
    const [userData, ] = await Promise.all([_profileAction(), ]);
   
  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-2'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/client">Dashboard</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/client/password" className='font-bold'>Password</Link></li>
        </ul>
      </div>
     </section>


    <EmailEdit dbData={userData} />
    
    </>
  )
}
