import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { CiSearch } from "react-icons/ci";


export default function page() {
  return (
    <>
    <section className='w-full bg-gray-200'>
        <div className='mx-auto w-[90%] flex lg:flex-row flex-col items-center justify-start gap-6 py-10'>
            <div className='flex-1 w-[100%]'>
              <select placeholder='Province' className='w-[100%] rounded-lg border border-slate-300 outline-none p-4'>
                <option value="">Select an option.</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
              </select>
            </div>
            <div className='flex-1 w-[100%]'>
              <select placeholder='Province' className='w-[100%] rounded-lg border border-slate-300 outline-none p-4'>
                <option value="">Select an option.</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
              </select>
            </div>
            <div className='flex-1 w-[100%]'>
              <select placeholder='Province' className='w-[100%] rounded-lg border border-slate-300 outline-none p-4'>
                <option value="">Select an option.</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
              </select>
            </div>
            <div className='flex-1 w-[100%]'>
              <select placeholder='Province' className='w-[100%] rounded-lg border border-slate-300 outline-none p-4'>
                <option value="">Select an option.</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
                <option value="Harare">Harare</option>
              </select>
            </div>
            <div className='flex-1 w-[100%]'>
              <button 
                type='submit' 
                className='flex justify-center items-center gap-3 bg-slate-900 hover:drop-shadow-lg text-white py-4 rounded-lg w-[100%]'>
                <CiSearch className='text-lg' />
                Search 
              </button>
            </div>
        </div>
    </section>

    <section className='w-[100%]'>
      {/*  */}
      <div className='mx-auto w-[90%] flex justify-between items-center pt-[3rem]'>
        <div>
          <h2 className='text-[2.6rem] font-serif leading-tight'>Businesses for sale</h2>
          <p className='font-light'>Showing 90 results</p>
        </div>
        <div className=''>
          <select className='border rounded-2xl p-4 outline-none'>
            <option value="">Select an option.</option>
            <option value="Name">Name</option>
            <option value="Name">Name</option>
          </select>
        </div>
      </div>

      <div className='mx-auto w-[90%] grid lg:grid-cols-3 grid-cols-1 gap-12 pt-[2rem] pb-[3rem]'>
        
        {[...Array(12)].map((key, i) =>
        <div className='flex-1 bg-white drop-shadow hover:drop-shadow-lg transition-all ease-linear duration-100 p-6 rounded-xl'>
          <div className='rounded-xl bg-slate-200 aspect-[4/3] mb-6'></div>
          <div className='flex justify-between items-center'>
            <span className='rounded-lg p-3 bg-amber-400 cursor-pointer'>Service Business</span>
            <span className='text-xl font-serif'>Undisclosed</span>
          </div>
          <h3 className='my-12 font-serif text-[2rem] leading-tight'>Lorem ipsum dolor sit amet.</h3>
          <div className='flex justify-between items-center'>
            <Link href="#" className='text-xl font-serif underline hover:no-underline ease-linear'>Contact</Link>
            <Link href="#" className='group rounded-lg px-6 py-3 bg-slate-900 text-white hover:drop-shadow-md flex items-center justify-center gap-2 ease-linear transition-all duration-100'>
              Details
              <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        )}

      </div>

      {/* PAGINATION */}
      <div className='mx-auto w-[90%] flex items-center justify-end gap-6 pb-[6rem]'>
        <button className='flex items-center justify-center gap-2 group border border-gray-700 px-4 py-2 text-gray-700'>
          <FaArrowLeftLong className="ease-linear transition-all duration-100 group-hover:-translate-x-1" />
          Prev
        </button>
        <button className='flex items-center justify-center gap-2 group border border-gray-700 px-4 py-2 text-gray-700'>
          Next
          <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-1" />
        </button>
      </div>
      
    </section>
    </>
  )
}
