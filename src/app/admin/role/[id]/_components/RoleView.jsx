"use client"
import React, { useState } from 'react'
import RoleEditModal from './RoleEditModal';
import { _roleViewAction } from '@/actions/RoleActions';



export default function RoleView({ dbData, id }) {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState(dbData?.data);

  async function getData(){
    const res = await _roleViewAction(id);
    setData(res?.data);
  }
  
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
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>{data?.name ?? 'Not Added.'}</p>
            </div>
            {/* LEVEL */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Level:</p>
                <p className='text-lg'>{data?.level ?? 'Not Added.'}</p>
            </div>
            {/* */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>
                    {data?.user?.name ? data?.user?.name : (data?.user?.email ? data?.user?.email : 'Not Added.')}
                </p>
            </div>
        </div>
    </section>


    <RoleEditModal 
        id={id}
        domData={data} 
        getData={getData} 
        isModal={isModal} 
        setIsModal={setIsModal} 
    />

    </>
  )
}
