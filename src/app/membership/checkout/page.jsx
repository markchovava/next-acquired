import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import MembershipCheckout from './_components/MembershipCheckout'
import { _profileAction } from '@/actions/AuthActions'
import { membershipViewFirstAction } from '@/actions/MembershipActions'



export default async function page() {
    const [profileData, membershipData] = await Promise.all([_profileAction(), 
        membershipViewFirstAction()]);

  return (
    <>
     <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-3'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/membership">Membership</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/membership/checkout" className='font-bold '>Membership Checkout</Link></li>
        </ul>
      </div>
     </section>


     <section className='w-[100%] h-[20rem] bg-gradient-to-br from-green-400 to-blue-800 text-white'>
        <div className='w-[90%] h-[100%] mx-auto leading-tight flex flex-col items-center justify-center gap-4'>
            <h1 className='text-[3.6rem] leading-tight font-serif text-white'>
                Membership Checkout
            </h1>
        </div>
    </section>


    <MembershipCheckout dbData={profileData} membershipData={membershipData} />
    </>
  )
}
