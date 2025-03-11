import { businessViewAction } from '@/actions/BusinessActions'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import BusinessView from './_components/BusinessView'





export default async function page({params: {id} }) {
    const [businessData, detailsData] = await Promise.all([businessViewAction(id)])

  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-[1rem]'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href={`/business/${id}`} className='font-bold '>{businessData?.data?.name}</Link></li>

        </ul>
      </div>
     </section>

    <BusinessView id={id} dbData={businessData} />
    
    </>
  )
}
