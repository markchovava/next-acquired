"use client"
import React, { useState } from 'react'
import BusinessEditModal from './BusinessEditModal';
import { baseURL } from '@/apis/BaseURL';
import Image from 'next/image';
import { _businessViewAction } from '@/actions/BusinessActions';
import Link from 'next/link';



export default function BusinessView({id, dbData, citiesData, provincesData}) {
    const [isModal, setIsModal] = useState(false);
    const [cities, setCities] = useState(citiesData?.data);
    const [provinces, setProvinces] = useState(provincesData?.data);
    const [data, setData] = useState(dbData?.data);
    
    async function getData(){
        const res = await _businessViewAction(id);
        setData(res?.data);
    }
  
  return (
    <>
    <section className='w-[100%] mt-4 pb-[4rem]'>
        <div className='mx-auto w-[90%]'>
            <div className='flex items-center justify-end gap-3'>
                <Link
                    href={`/admin/business/category/${id}`}
                    className='duration-100 ease-linear transition-all border border-white bg-gradient-to-br from-blue-300 to-gray-800 hover:bg-gradient-to-br hover:from-white hover:to-white hover:border hover:border-gray-800 text-white hover:text-gray-800 hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit Category
                </Link>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>
            {/*  */}
            {data?.image &&
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>Image:</p>
                <div className='w-[30%] rounded-xl overflow-hidden border border-slate-300 aspect-[5/3] relative bg-slate-100 drop-shadow-md'>
                    <Image
                        fill
                        style={{ objectFit: 'cover' }} 
                        src={data?.image ? (baseURL + data?.image) : '/assets/img/no-img.jpg'} 
                        alt={data?.name}
                    />
                </div>
            </div>
            }
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>{data?.name}</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Address:</p>
                <p className='text-lg'>{data?.address}</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Province:</p>
                <p className='text-lg'>{data?.province?.name}</p>
            </div>
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>City:</p>
                <p className='text-lg'>{data?.city?.name}</p>
            </div>
            {/*  */}
            {data?.categories?.length > 0 &&
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-1'>Category:</p>
                <p className='text-lg flex'>
                    {data?.categories?.map((i, key) => (
                        <span className='px-2 py-1 rounded-lg bg-blue-100 mr-2'>{i.name}</span>
                        ) 
                    )}
                </p>
            </div>
            }
            {/*  */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Asking Price:</p>
                <p className='text-lg'>{data?.price}</p>
            </div>
            {/* DESCRIPTION */}
            <div className='mb-6'>
                <p className='text-sm mb-1 font-semibold'>Description:</p>
                <div className='text-lg article leading-tight' 
                    dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>

            {/* BUSINESS DETAILS */}
            {data?.business_details?.length > 0 &&
            <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>Details:</p>
                {data?.business_details?.map((i, key) => (
                    <div key={key} className='w-[50%]'>
                        <div className='flex items-center justify-start border border-gray-300'>
                            <div className='w-[50%] p-2 border-r border-gray-300'>{i?.name}</div>
                            <div className='w-[50%] p-2'>{i?.value}</div>
                        </div>
                    </div>

                ))}
            </div>
            }
           
          
            {/* */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>
                    { data?.user?.name 
                    ? data?.user?.name 
                    : (data?.user?.email ? data?.user?.email : 'Not Added.') }
                </p>
            </div>
        </div>
    </section>

    <BusinessEditModal 
        id={id}
        getData={getData}
        domData={data}
        cities={cities}
        provinces={provinces}
        isModal={isModal} 
        setIsModal={setIsModal} 
    />


    </>
  )
}
