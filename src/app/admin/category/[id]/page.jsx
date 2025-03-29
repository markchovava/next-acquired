import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import CategoryView from './_components/CategoryView'
import { _categoryViewAction } from '@/actions/CategoryActions'
import ClientRedirect from '@/app/_components/ClientRedirect'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'




export default async function page({ params: { id } }) {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
  const [categoryData, ] = await Promise.all([_categoryViewAction(id), ])

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
          <li><Link href="/admin/category">Category List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href={`/admin/category/${id}`} className='font-bold '>Category</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          Category Information
        </h1>
        </div>
    </section>


    <CategoryView 
      id={id} 
      dbData={categoryData} 
    />



    </>
  )
}

