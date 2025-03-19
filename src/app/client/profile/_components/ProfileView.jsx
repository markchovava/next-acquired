"use client"
import React, { useState } from 'react'
import ProfileEditModal from './ProfileEditModal';
import { _profileAction } from '@/actions/AuthActions';
import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';


export default function ProfileView({ dbData }) {
    console.log('dbData', dbData)
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState( dbData?.data );
    
    async function getData() {
        const res = await _profileAction();
        setData(res?.data);
    }


  return (
    <>

    <section className='w-[100%] '>
        <div className='mx-auto w-[90%]'>


            <div className='flex items-center justify-between pt-[3rem] pb-[1rem]'>
                <h3 className='font-serif text-[2rem]'>User Profile</h3>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>
            
            <section className='pb-[5rem]'>
                <h4 className='font-semibold text-[1.4rem] mb-6'>
                    Personal information
                </h4>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Name:</p>
                    <p className='text-lg'>{data?.name ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Email:</p>
                    <p className='text-lg'>{data?.email ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Phone:</p>
                    <p className='text-lg'>{data?.phone ?? 'Not Added.'}</p>
                </div>
                {/* ADDRESS */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Address:</p>
                    <p className='text-lg'>{data?.address ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>LinkedIn Profile:</p>
                    <p className='text-lg'>{data?.linkedin ?? 'Not Added'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Bio:</p>
                    <p className='text-lg'>{data?.bio ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Code:</p>
                    <p className='text-lg'>{data?.code ?? 'Not Added.'}</p>
                </div>
                <h2 className="font-serif text-[2rem] mb-4">
                    Account Settings
                </h2>
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Admin Status:</p>
                    <p className='text-lg'>
                        {data?.is_admin == 'Yes' && 'Has Admin Rights'}
                        {data?.is_admin == 'No' && 'Not Admint'}
                    </p>
                </div>
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Role:</p>
                    <p className='text-lg'>{data?.role?.name ?? 'Not Added.'}</p>
                </div>
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Created:</p>
                    <p className='text-lg'>{ formatDate(data?.created_at) ?? 'Not Added.'}</p>
                </div>
            </section>
        
        </div>
    </section>

    <ProfileEditModal
        isModal={isModal} 
        setIsModal={setIsModal}
        domData={data} 
        getData={getData} 
    />


   
    

    </>
  )
}
