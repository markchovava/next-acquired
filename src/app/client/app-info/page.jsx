import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import AppInfoView from './_components/AppInfoView'
import { _appInfoViewAction } from '@/actions/AppInfoActions'




export default async function page() {
  const [appInfoData] = await Promise.all([_appInfoViewAction(),  ]) 
  
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
          <li><Link href="/client/app-info" className='font-bold '>AppInfo</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          App Information
        </h1>
        </div>
    </section>


    <AppInfoView dbData={appInfoData} />



    </>
  )
}
