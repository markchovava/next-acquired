"use client"

import { cookieAuthClient } from "@/cookies/cookieAuthClient"
import Link from "next/link"
import { useState } from "react"

export default function Membership({dbData}) {
    const [data, setData] = useState(dbData?.data)
    const { getAuthCookie } = cookieAuthClient();
  return (
    <>
     <section className='w-[100%]'>
      <div className='w-[70%] mx-auto pt-[4rem] pb-[5rem]'>
        <h3 className='mb-4 text-center text-[2rem] font-bold leading-tight'>
          {data?.name}
        </h3>
        <div className='text-[1.6rem] font-light text-center mb-4'
          dangerouslySetInnerHTML={{ __html: data?.description }}>
          </div>
        <p className='text-center font-extrabold text-[2rem] mb-6'>{ '$' + data?.fee}</p>
        <div className='flex items-center justify-center'>
          
        {getAuthCookie() ? 
          <Link href='/membership/login' className='py-4 border border-slate-300 px-[5rem] transition-all ease-linear duration-200 bg-gradient-to-br from-teal-300 to-blue-800 text-white rounded-2xl hover:bg-gradient-to-br hover:from-teal-300 hover:to-blue-900 hover:drop-shadow-lg'>
            Login to Proceeed
          </Link>
        :
          <Link href='/membership/checkout' className='py-4 border border-slate-300 px-[5rem] transition-all ease-linear duration-200 bg-gradient-to-br from-teal-300 to-blue-800 text-white rounded-2xl hover:bg-gradient-to-br hover:from-teal-300 hover:to-blue-900 hover:drop-shadow-lg'>
            Checkout
          </Link>
        }

        </div>
      </div>
    </section>
    </>
  )
}
