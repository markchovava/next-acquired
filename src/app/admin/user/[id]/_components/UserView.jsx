"use client"
import React, { useState } from 'react'
import UserEditModal from './UserEditModal';



export default function UserView() {
    const [isModal, setIsModal] = useState(false)
    const [isPublic, setIsPublic] = useState(false);
    const toggleIsPublic = () => {
        setIsPublic(!isPublic);
    };
  
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
        <div className='mb-6 flex items-center justify-between'>
            <div className='font-bold text-lg'>Account Visibility</div>
            <div className=' flex items-center justify-end gap-4'>
                <button
                    onClick={toggleIsPublic}
                    className={`relative inline-flex items-center h-8 rounded-full w-16 transition-all focus:outline-none ${
                    isPublic ? 'bg-green-600' : 'bg-gray-400'}`}>
                    <span
                        className={`inline-block h-6 w-6 rounded-full bg-white transform transition-transform ${
                        isPublic ? 'translate-x-8' : 'translate-x-1' }`}/>
                </button>
                <p className='text-lg leading-tight'>Private</p>
            </div>
        </div>
        {/* NAME */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Name:</p>
            <p className='text-lg'>Lorem Thshcj</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Phone:</p>
            <p className='text-lg'>+263 783 200221</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Address:</p>
            <p className='text-lg'>1 First Ave.</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>LinkedIn Profile:</p>
            <p className='text-lg'>Not added</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Amount of Funds Available:</p>
            <p className='text-lg'>Not added</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Acquisition Target:</p>
            <p className='text-lg'>Not added</p>
        </div>
        {/*  */}
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Skillset:</p>
            <p className='text-lg'>Not added</p>
        </div>
        <h2 className="font-serif text-[2rem] mb-4">Account Settings</h2>
        <h3 className="font-bold text-lg mb-6">Login Security</h3>
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Google:</p>
            <p className='text-lg'>Connected</p>
        </div>
        <h3 className="font-bold text-lg mb-6">Billing Information</h3>
        <div className='mb-6'>
            <p className='text-sm font-semibold'>Subscription Type:</p>
            <p className='text-lg'>Free Plan</p>
        </div>

           
        </div>
    </section>

    <UserEditModal isModal={isModal} setIsModal={setIsModal} />


    </>
  )
}
