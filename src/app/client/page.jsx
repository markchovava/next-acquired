import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { _businessMessageIndexAllByStatusAction } from '@/actions/BusinessMessageActions';
import { FaMessage } from "react-icons/fa6";



export default async function page() {
  const status = 'Unread';
  const [businessMessageData, ] = await Promise.all([
      _businessMessageIndexAllByStatusAction(status) 
  ]);

  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-[1rem]'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="#">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link 
            href="/client" 
            className='font-bold '>
              Client Dashboard
            </Link>
          </li>

        </ul>
      </div>
    </section>

    <section className='w-[100%]'>
      <div className='mx-auto w-[90%]'>
        
        {businessMessageData?.data &&
          <div className='flex items-center justify-end'>
            <Link href='/client/message/business' className=' hover:drop-shadow-md flex items-center justify-end gap-2 bg-gray-800 rounded-full p-2'>
              <FaMessage className='text-xl text-white' />
              <span className='text-white'>{businessMessageData?.data && businessMessageData?.data.length}</span>
            </Link>
          </div>
        }

        <div className='mb-12'>
          <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300 '>
            Client Dashboard
          </h1>
        </div>

        <section className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-[5rem]'> 
          {/* APPINFO */}
          <Link href="/client/app-info">
            <div className='border border-stone-300 text-stone-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaInfoCircle className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                App Info
              </h3>
            </div>
          </Link>
          
         
         {/* BUSINESS */}
          <Link href="/client/business">
            <div className='border border-pink-300 text-pink-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <MdBusinessCenter className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Business
              </h3>
            </div>
          </Link>

          {/* MESSAGE */}
          <Link href="/client/message/business">
            <div className='border border-teal-300 text-teal-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaMessage className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Message
              </h3>
            </div>
          </Link>
         
          
        </section>

      </div>
    </section>
    </>
  )
}
