"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong, FaEye } from 'react-icons/fa6';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import SubscriptionAddModal from './SubscriptionAddModal';



export default function SubscriptionList() {
    const [isModal, setIsModal] = useState(false)

  return (
    <>
    <section className='w-[100%] pt-4'>
        {/* FORM */}
        <div className='mx-auto w-[90%] flex lg:flex-row flex-col items-center justify-between gap-4 lg:pb-2 pb-6'>
            <form className='border lg:w-[50%] w-[100%] flex items-center justify-start'>
                <input 
                    type='text' 
                    placeholder='Search' 
                    className='outline-none border-r border-gray-300 px-4 py-3 w-[85%]' />
                <button className='hover:scale-125 ease-linear transition-all h-[100%] w-[15%] px-4 py-3 text-center flex items-center justify-center'>
                    <FaSearch />
                </button>
            </form>
            <div className='lg:w-auto w-[100%]'>
                <select className='w-[100%] px-4 py-3 outline-none border border-gray-300'>
                    <option value="">Sort By</option>
                    <option value="">Sort By Date ASC</option>
                    <option value="">Sort By Date DESC</option>
                    <option value="">Sort By Type ASC</option>
                    <option value="">Sort By Type DESC</option>
                    <option value="">Sort By Status ASC</option>
                    <option value="">Sort By Status DESC</option>
                </select>
            </div>
        </div>

        {/* TABLE */}
        <section className="mx-auto w-[90%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[30%] border-r border-white px-3 py-2'>USER</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>TYPE</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>STATUS</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>EXPIRY</div>
                    <div className='w-[10%] px-3 py-2 text-end'>ACTION</div>
                </div>

                {/* COLUMN */}
                <div className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                    <div className='w-[30%] border-r border-gray-300 px-3 py-2'>NAME</div>
                    <div className='w-[20%] border-r border-gray-300 px-3 py-2'>TYPE</div>
                    <div className='w-[20%] border-r border-gray-300 px-3 py-2'>STATUS</div>
                    <div className='w-[20%] border-r border-gray-300 px-3 py-2'>EXPIRY</div>
                    <div className='w-[10%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                        <Link title='View' href={`/admin/subscription/1`}> 
                        <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                        </Link> 
                        <button title='Delete'> 
                            <MdDeleteForever
                            className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                        </button> 
                    </div>
                </div>
               
            </section>
        </section>

        {/* PAGINATION */}
        <section className='w-[90%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
            {/* PREVIOUS */}
            <button
                className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
                Prev
            </button>
        
            {/* NEXT */}
            <button 
                className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                <span>Next</span>
                <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
            </button>

        </section>

    </section>

    <SubscriptionAddModal isModal={isModal} setIsModal={setIsModal} />
    </>
  )
}
