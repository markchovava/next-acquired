"use client"
import React, { useState } from 'react'
import BusinessEditModal from './BusinessEditModal';



export default function BusinessView() {
  const [isModal, setIsModal] = useState(false);
  
  return (
    <>
    <section className='w-[100%] mt-4 pb-[4rem]'>
        <div className='mx-auto w-[90%]'>
            <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>Image:</p>
                <div className='w-[30%] rounded-xl overflow-hidden border border-slate-300 aspect-[5/3] relative bg-slate-100 drop-shadow-md'>
                    <img src="" className='absolute z-10 w-[100%] h-[100%] object-cover' />
                </div>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Address:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Province:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>City:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Category:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Asking Price:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Description:</p>
                <p className='text-lg'>N/A</p>
            </div>

            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>Details:</p>
                <div className='w-[50%]'>
                    <div className='flex items-center justify-start border border-gray-300'>
                        <div className='w-[50%] p-2 border-r border-gray-300'>Name</div>
                        <div className='w-[50%] p-2'>Value</div>
                    </div>

                </div>
            </div>
           
          
            {/* */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>N/A</p>
            </div>
        </div>
    </section>

    <BusinessEditModal isModal={isModal} setIsModal={setIsModal} />


    </>
  )
}
