"use client"
import React, { useState } from 'react'
import ProfileEditModal from './ProfileEditModal';
import { _profileAction } from '@/actions/AuthActions';
import Link from 'next/link';


export default function ProfileView({dbData}) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);
    async function getData() {
        const res = await _profileAction();
        setData(res?.data);
    }




  return (
    <>

    <section className='w-[100%] '>
        <div className='mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-4 gap-8 pt-[4rem] pb-[5rem]'>
            <div className='lg:col-span-3'>
                <div className='flex items-center justify-between mb-[2rem]'>
                    <h3 className='font-serif text-[2rem]'>User Profile</h3>
                    <button 
                        onClick={() => setIsModal(!isModal)}
                        className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                        Edit
                    </button>
                </div>
                <h4 className='font-semibold text-[1.4rem] mb-6'>Personal information</h4>
               
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Name:</p>
                    <p className='text-lg'>{data?.name ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Phone:</p>
                    <p className='text-lg'>{data?.phone ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Address:</p>
                    <p className='text-lg'>{data?.address ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>LinkedIn Profile:</p>
                    <p className='text-lg'>{data?.linkedin ?? 'Not Added.'}</p>
                </div>
        
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Acquisition Target:</p>
                    <p className='text-lg'>{data?.asquisition ?? 'Not Added.'}</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Skillset:</p>
                    <p className='text-lg'>{data?.skillset ?? 'Not Added.'}</p>
                </div>

                <h2 className="font-serif text-[2rem] mb-4">Account Settings</h2>
                <h3 className="font-bold text-lg mb-6">Membership Information</h3>
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Membership Type:</p>
                    <p className='text-lg'>{data?.membership?.name ?? 'Not Added.'}</p>
                </div>
                {data?.membership_status &&
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Membership Status:</p>
                        <p className='text-lg'>
                            {data?.membership_status  == 1 && 'Active'}
                            {data?.membership_status  == 0 && 'Not Active'}
                        </p>
                    </div>
                }
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Role:</p>
                    <p className='text-lg'>{data?.role?.name ?? 'Not Added.'}</p>
                </div>

                        

                
            </div>


            <div className='lg:col-span-1'>
                <div className='w-[100%] border bg-white drop-shadow-md rounded-xl px-8 py-6 mb-6'>
                    <p className='leading-tight mb-1'>
                        You are currently on the
                    </p>
                    {data?.membership?.name ?
                    <h3 className='text-[2rem] leading-tight font-bold mb-6 text-blue-900'>
                        {data?.membership?.name}
                    </h3>
                    :
                    <h3 className='text-[2rem] leading-tight font-bold mb-6 text-blue-900'>
                        No Membership Plan
                    </h3>
                    }
                  
                  <div className='mb-4'>
                    <Link href='/membership' className='w-[100%] transition-all ease-linear hover:drop-shadow-lg hover:bg-gray-900 rounded-full bg-gray-800 py-3 px-5 text-white'>
                        Membership
                    </Link>

                  </div>
                </div>
              
            </div>
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
