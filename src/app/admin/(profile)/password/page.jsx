import React from 'react'
import PasswordEdit from './_components/PasswordEdit'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientRedirect from '@/app/_components/ClientRedirect';
import { _profileAction } from '@/actions/AuthActions';



export default async function page() {
    const cookieStore = await cookies();
    const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
    if(!adminCookie?.value){ redirect('/login') }
    if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
   



  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-2'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin">Dashboard</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin/password" className='font-bold'>Password</Link></li>
        </ul>
      </div>
     </section>


    <PasswordEdit />
    
    </>
  )
}
