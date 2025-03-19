"use client";
import { formatDate } from '@/utils/formatDate';
import React, { useState } from 'react'
import BusinessMessageEditModal from './BusinessMessageEditModal';
import { _businessMessageViewAction } from '@/actions/BusinessMessageActions';




export default function BusinessMessageView({id, dbData }) {
  const [data, setData] = useState(dbData?.data)
  const [isModal, setIsModal] = useState(false)

  async function getData(){
    const res = await _businessMessageViewAction(id)
    setData(res?.data)
  }


  return (
    <>

    <section className='w-[100%] mt-4'>
        <div className='mx-auto w-[90%] pb-[4rem]'>
            <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Business Name:</p>
                <p className='text-lg'>{data?.business?.name}</p>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>{data?.name}</p>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-1'>Status:</p>
                <p className='text-lg'>
                  <span className='bg-green-100 drop-shadow px-2 py-1 rounded-xl'>
                    {data?.status} </span>
                </p>
            </div>
            {/* PHONE */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Phone:</p>
                <p className='text-lg'>
                  {data?.phone}
                </p>
            </div>
            {/* EMAIL */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Email:</p>
                <p className='text-lg'>
                  {data?.email}
                </p>
            </div>
            {/* TIMEFRAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Timeframe:</p>
                <p className='text-lg'>
                  {data?.timeframe}
                </p>
            </div>
            {/* MESSAGE */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Message:</p>
                <p className='text-lg'>
                  {data?.message}
                </p>
            </div>
            {/* UPDATED */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Updated:</p>
                <p className='text-lg'>
                  {formatDate(data?.updated_at)}
                </p>
            </div>
            {/* CREATED */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Created:</p>
                <p className='text-lg'>
                  {formatDate(data?.created_at)}
                </p>
            </div>
        </div>
    </section>

    <BusinessMessageEditModal 
        id={id} 
        getData={getData} 
        domData={data} 
        isModal={isModal} 
        setIsModal={setIsModal} 
    />

    </>
  )
}
