import React from 'react'
import ProfileView from './_components/ProfileView'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { _profileAction } from '@/actions/AuthActions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientRedirect from '@/app/_components/ClientRedirect';



export default async function page() {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
   const [userData, ] = await Promise.all([_profileAction(), ]);
   

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
          <li><Link href="/admin/profile" className='font-bold'>User Profile</Link></li>
        </ul>
      </div>
     </section>


    <ProfileView dbData={userData} />
    
    </>
  )
}
