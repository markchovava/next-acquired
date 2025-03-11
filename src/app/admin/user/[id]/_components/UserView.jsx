"use client"
import React, { useState } from 'react'
import UserEditModal from './UserEditModal';
import { _userViewAction } from '@/actions/UserActions';



export default function UserView({ id, dbData,  membershipsData, rolesData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);
    const [memberships, setMemberships] = useState(membershipsData?.data)
    const [roles, setRoles] = useState(rolesData?.data)
    
    async function getData() {
        const res = await _userViewAction(id);
        setData(res?.data);
    }

  
  return (
    <>

    <section className='w-[100%] '>
        <div className='mx-auto w-[90%] pt-[4rem] pb-[5rem]'>
           
        <div className='flex items-center justify-between mb-[2rem]'>
            <h3 className='font-serif text-[2rem]'>User Profile</h3>
            <button 
                onClick={() => setIsModal(!isModal)}
                className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                Edit
            </button>
        </div>
        <h4 className='font-semibold text-[1.4rem] mb-6'>Personal information</h4>
        {/* Account Visibility */}
        {/* <div className='mb-6 flex items-center justify-between'>
            <div className='font-bold text-lg'>Account Visibility</div>
            <div className=' flex items-center justify-end gap-4'>
                <button
                    onClick={toggleIsPublic}
                    className={`relative inline-flex items-center h-8 rounded-full w-16 transition-all focus:outline-none ${
                    data?.membership_status ? 'bg-green-600' : 'bg-gray-400'}`}>
                    <span
                        className={`inline-block h-6 w-6 rounded-full bg-white transform transition-transform ${
                        isPublic ? 'translate-x-8' : 'translate-x-1' }`}/>
                </button>
                <p className='text-lg leading-tight'>Private</p>
            </div>
        </div> */}
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
        {/*  */}
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
            <p className='text-sm font-semibold'>Asquisition Target:</p>
            <p className='text-lg'>{data?.asquisition ?? 'Not Added.'}</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Bio:</p>
            <p className='text-lg'>{data?.bio ?? 'Not Added.'}</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Skillset:</p>
            <p className='text-lg'>{data?.skillset ?? 'Not Added.'}</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Code:</p>
            <p className='text-lg'>{data?.code ?? 'Not Added.'}</p>
        </div>
        <h2 className="font-serif text-[2rem] mb-4">Account Settings</h2>
        <h3 className="font-bold text-lg mb-6">Membership Information</h3>
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Membership Type:</p>
            <p className='text-lg'>{data?.membership?.name ?? 'Not Added.'}</p>
        </div>
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Membership Status:</p>
            <p className='text-lg'>
                {data?.membership_status  == 1 && 'Active'}
                {data?.membership_status  == 0 && 'Not Active'}
            </p>
        </div>
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Role:</p>
            <p className='text-lg'>{data?.role?.name ?? 'Not Added.'}</p>
        </div>

           
        </div>
    </section>

    <UserEditModal 
        id={id}
        domData={data} 
        getData={getData} 
        isModal={isModal} 
        setIsModal={setIsModal} 
        roles={roles}
        memberships={memberships}
    />


    </>
  )
}
