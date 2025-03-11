"use client"
import React, { useState } from 'react'
import PartnerEditModal from './PartnerEditModal';
import { baseURL } from '@/apis/BaseURL';
import { _partnerViewAction } from '@/actions/PartnerActions';
import Image from 'next/image';



export default function PartnerView({id, dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);
      
      async function getData(){
          const res = await _partnerViewAction(id);
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
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>Image:</p>
                <div className='w-[25%] rounded-xl overflow-hidden border border-slate-300 aspect-[5/2] relative bg-slate-100 drop-shadow-md'>
                    <Image
                        fill
                        style={{ objectFit: 'cover' }} 
                        src={baseURL + data?.image} 
                        alt={data?.name}
                    />
                </div>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>{data?.name ? data?.name : 'Not Added.'}</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Link:</p>
                <p className='text-lg'>
                    {data?.link ? data?.link : 'Not Added.'}
                </p>
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

    <PartnerEditModal 
        id={id}
        getData={getData} 
        domData={data}
        isModal={isModal} 
        setIsModal={setIsModal} 
    />

    </>
  )
}
