"use client"
import React, { useState } from 'react'
import AppInfoEditModal from './AppInfoEditModal'
import { _appInfoViewAction } from '@/actions/AppInfoActions'
import Loader from '@/app/_components/Loader'



export default function AppInfoView({dbData}) {
    const [data, setData] = useState(dbData?.data)
    const [isModal, setIsModal] = useState(false)

    async function getData(){
        const res = await _appInfoViewAction()
        console.log(res)
        await setData(res?.data);
    }


   


  return (
    <>
    <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[90%]'>
            <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>

            {!data ?
                <section className='w-[100%]'>
                    <h3 className='text-[3rem] font-light'>No Data Available at the moment.</h3>
                    <p>Click 
                        <span className='cursor-pointer underline hover:no-underline mx-1' onClick={() => setIsModal(!isModal)}>
                            Edit
                            </span> 
                        to add.
                    </p>
                </section>
             :
                <section>
                    {/* NAME */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Name:</p>
                        <p className='text-lg'>{data?.name ?? 'N/A'}</p>
                    </div>
                    {/* AADDRESS */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Address:</p>
                        <p className='text-lg'>{data?.address ?? 'N/A'} </p>
                    </div>
                    {/*  */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Phone Number:</p>
                        <p className='text-lg'>{data?.phone ?? 'N/A'}</p>
                    </div>
                    {/*  */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Email:</p>
                        <p className='text-lg'>{data?.email ?? 'N/A'}</p>
                    </div>
                    {/*  */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Website:</p>
                        <p className='text-lg'>{data?.website ?? 'N/A'}</p>
                    </div>
                    {/*  */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Facebook:</p>
                        <p className='text-lg'>{data?.facebook ?? 'N/A'}</p>
                    </div>
                    {/* WHATSAPP */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>WhatsApp:</p>
                        <p className='text-lg'>{data?.whatsapp ?? 'N/A'}</p>
                    </div>
                    {/* TWITTER */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Twitter / X:</p>
                        <p className='text-lg'>{data?.twitter ?? 'N/A'}</p>
                    </div>
                    {/* DESCRIPTION */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Description:</p>
                        <p className='text-lg'>{data?.description ?? 'N/A'}</p>
                    </div>
                    {/* */}
                    <div className='mb-6'>
                        <p className='text-sm font-semibold'>Author:</p>
                        <p className='text-lg'>{data?.user?.name ? data?.user?.name : (data?.user?.email ? data?.user?.email : 'N/A') }</p>
                    </div>
                </section>
            }

        </div>
    </section>

    <AppInfoEditModal domData={data} getData={getData} isModal={isModal} setIsModal={setIsModal} />
    </>
  )
}
