"use client"
import React, { useState } from 'react'
import CityEditModal from './CityEditModal';
import { _cityViewAction } from '@/actions/CityActions';



export default function CityView({id, dbData, provinces}) {
  const [isModal, setIsModal] = useState(false);
      const [data, setData] = useState(dbData?.data);
      const [provincesData, setProvincesData] = useState(provinces?.data)
      
      async function getData() {
          const res = await _cityViewAction(id);
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
                <p className='text-lg'>{data?.name}</p>
            </div>
            {/* AADDRESS */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Province:</p>
                <p className='text-lg'>{data?.province?.name ? data?.province?.name : 'Not added'}</p>
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

    <CityEditModal 
        id={id} 
        domData={data}
        getData={getData} 
        isModal={isModal} 
        setIsModal={setIsModal} 
        provincesData={provincesData}
    />


    </>
  )
}
