"use client"
import React, { useState } from 'react'
import SubscriptionEditModal from './SubscriptionEditModal';



export default function SubscriptionView() {
  const [isModal, setIsModal] = useState(false);
  
  return (
    <>
    <section className='w-[100%] mt-4 mb-[4rem]'>
        <div className='mx-auto w-[90%]'>
            <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Type:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Status:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Expiry:</p>
                <p className='text-lg'>N/A</p>
            </div>
          
            {/* */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>N/A</p>
            </div>
        </div>
    </section>

    <SubscriptionEditModal isModal={isModal} setIsModal={setIsModal} />


    </>
  )
}
