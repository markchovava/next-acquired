import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import MembershipView from './_components/MembershipView'
import { _membershipViewAction } from '@/actions/MembershipActions'


export default async function page({ params: {id} }) {
  const [membershipData, ] = await Promise.all([_membershipViewAction(id), ])


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
          <li><Link href="/admin/membership">Membership List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href={`/admin/membership/${id}`} className='font-bold '>Membership</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          Membership Information
        </h1>
        </div>
    </section>


    <MembershipView id={id} dbData={membershipData} />



    </>
  )
}

