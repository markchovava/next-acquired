"use client"
import React, { useState } from 'react'
import PartnerEditModal from './PartnerEditModal';



export default function PartnerView() {
  const [isModal, setIsModal] = useState(false);
  
  return (
    <>
    <section className='w-[100%] mt-4'>
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
                <div className='w-[25%] rounded-xl overflow-hidden border border-slate-300 aspect-[5/2] relative bg-slate-100 drop-shadow-md'>
                    <img src="" className='absolute z-10 w-[100%] h-[100%] object-cover' />
                </div>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>N/A</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Link:</p>
                <p className='text-lg'>N/A</p>
            </div>
          
            {/* */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>N/A</p>
            </div>
        </div>
    </section>

    <PartnerEditModal isModal={isModal} setIsModal={setIsModal} />


    </>
  )
}
