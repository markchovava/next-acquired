"use client"
import React, { useState } from 'react'
import MembershipEditModal from './MembershipEditModal';
import { _membershipViewAction } from '@/actions/MembershipActions';



export default function MembershipView({id, dbData}) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);

    async function getData() {
        const res = await _membershipViewAction(id);
        setData(res?.data);
    }
  
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
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>{data?.name}</p>
            </div>
            {/* FEE */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Fee:</p>
                <p className='text-lg'>{data?.fee ? '$' + data?.fee : 'Not Added.'}</p>
            </div>
            {/* DESCRIPTION */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Description:</p>
                <div className='text-lg article leading-tight' 
                    dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>
            {/* AUTHOR */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>
                {data?.user?.name ? data?.user?.name : (data?.user?.email ? data?.user?.email : 'Not Added.')}
                </p>
            </div>
        </div>
    </section>

    <MembershipEditModal 
        id={id}
        domData={data} 
        getData={getData} 
        isModal={isModal} 
        setIsModal={setIsModal}
    />


    </>
  )
}
