import { membershipViewFirstAction } from '@/actions/MembershipActions'
import Link from 'next/link'
import React from 'react'
import Membership from './_components/Membership';
import { FaAngleRight } from 'react-icons/fa6';


export default async function page() {
  const [membershipData, ] = await Promise.all([membershipViewFirstAction(), ]);




  return (
    <>
     <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-2'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/membership" className='font-bold '>Membership</Link></li>
        </ul>
      </div>
     </section>

     <section className='w-[100%] h-[20rem] bg-blue-800 text-white'>
        <div className='w-[90%] h-[100%] mx-auto leading-tight flex flex-col items-center justify-center gap-4'>
            <h1 className='text-[3.6rem] leading-tight font-serif text-white'>
                Membership
            </h1>
           {/*  <p className='text-xl'>
                Please read our Terms of Service carefully.
            </p> */}
            <p className='text-sm text-center'>
                If you have any questions, please reach out <br />
                to our team 
                <Link 
                    href="mailto:support@biztrade.com" 
                    className='ml-2 underline hover:no-underline ease-linear'>
                    support@acquiredzw.com
                </Link>.
            </p>
        </div>
    </section>

   <Membership dbData={membershipData} />


    </>
  )
}
