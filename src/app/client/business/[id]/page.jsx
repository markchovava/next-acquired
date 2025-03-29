import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import BusinessView from './_components/BusinessView'
import { _businessViewAction } from '@/actions/BusinessActions'
import { _cityListAllAction } from '@/actions/CityActions'
import { _provinceListAllAction } from '@/actions/ProvinceActions'




export default async function page({ params: {id} }) {
  const [businessData, citiesData, provincesData, ] = await Promise.all([
                                                        _businessViewAction(id), 
                                                        _cityListAllAction(), 
                                                        _provinceListAllAction(),
                                                      ])

  return (
    <>
     <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-[1rem]'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/client">Dashboard</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/client/business">Business List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href={`/client/business/${id}`} className='font-bold '>Business</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          Business Information
        </h1>
        </div>
    </section>


    <BusinessView 
      id={id}
      dbData={businessData} 
      citiesData={citiesData} 
      provincesData={provincesData}
    />



    </>
  )
}

