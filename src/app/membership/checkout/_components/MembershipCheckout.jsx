"use client";
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function MembershipCheckout({ dbData, membershipData }) {
    console.log('membershipData', membershipData?.data)
    const [membership, setMembership] = useState(membershipData?.data)
    const [data, setData] = useState({
        name: dbData?.data?.name, 
        phone: dbData?.data?.phone, 
        email: dbData?.data?.email, 
        address: dbData?.data?.address, month: 1, total: null
    })
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }


    function calculateTotal() {
        const res = data?.month ? membership?.fee * data?.month : null;
       return res
    }

    console.log(calculateTotal())


    async function postData(){
        if(!data?.name){
            const message = 'Full name is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({name: message});
            setIsSubmit(false);
            return;
        }
        if(!data?.phone){
            const message = 'Phone number is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({phone: message});
            setIsSubmit(false);
            return;
        }
        if(!data?.email){
            const message = 'Email is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({email: message});
            setIsSubmit(false);
            return;
        }
        if(!data?.address){
            const message = 'Address is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({address: message});
            setIsSubmit(false);
            return;
        }
        if(!data?.month){
            const message = 'Month is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({month: message});
            setIsSubmit(false);
            return;
        }

        const formData = {
            name,
            phone,
            email,
            address,
            month,
            total,
        }

    }
  
  
  
  
  
  
    return (
    <>
    <section className='w-[100%]'>
        <div className='w-[90%] mx-auto pt-[4rem] pb-[5rem] flex lg:flex-row flex-col items-start justify-start gap-6'>
            <div className='lg:w-[60%] w-[100%]'>
            <form 
                    action={postData} 
                    onSubmit={() => setIsSubmit(true)} 
                    className='bg-white border drop-shadow p-8 rounded-xl mb-[3rem]'>
                    <h3 className='text-2xl font-serif mb-4'>Personal Information</h3>
                    {/* NAME */}
                    <div className='mb-4'>
                        <input 
                            type='text' 
                            name='name' 
                            value={data?.name}
                            onChange={handleInput}
                            placeholder='Full Name' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                        {errMsg?.name &&
                            <p className='text-sm text-red-500'>{errMsg?.name}</p>}
                    </div>
                    {/* PHONE */}
                    <div className='mb-4'>
                        <input 
                            type='text' 
                            name='phone' 
                            value={data?.phone}
                            onChange={handleInput}
                            placeholder='Phone Number' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                        {errMsg?.phone &&
                            <p className='text-sm text-red-500'>{errMsg?.phone}</p>}
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <input 
                            type='text' 
                            name='email' 
                            value={data?.email}
                            onChange={handleInput}
                            placeholder='Email' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                        {errMsg?.email &&
                            <p className='text-sm text-red-500'>{errMsg?.email}</p>}
                    </div>
                    {/* ADDRESS */}
                    <div className='mb-4'>
                        <input 
                            type='text' 
                            name='address' 
                            value={data?.address}
                            onChange={handleInput}
                            placeholder='Address' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                        {errMsg?.address &&
                            <p className='text-sm text-red-500'>{errMsg?.address}</p>}
                    </div>
                    {/* MONTH */}
                    <div className='mb-4'>
                        <input 
                            type='number' 
                            min={1}
                            name='month'
                            value={data?.month}
                            onChange={handleInput} 
                            placeholder='Number of Months' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                        {errMsg?.month &&
                            <p className='text-sm text-red-500'>{errMsg?.month}</p>}
                    </div> 

            </form>
            </div>
            <div className='lg:w-[40%] w-[100%]'>
                <div className='bg-white border drop-shadow p-8 rounded-xl mb-[3rem]'>
                    <h3 className='text-2xl font-serif mb-4'>Checkout Information</h3>
                    <h1 className='text-[1.6rem] font-bold mb-6'>Standard Membership</h1>
                    <div className='px-3 border-x border-t border-blue-200 py-1 flex items-center justify-between gap-4 text-[1.2rem]'>
                        <p className='font-light w-[70%] border-r border-blue-200'>Standard Membership: </p>
                        <p className='w-[30%] text-end'>{membership?.fee && '$' + membership?.fee}</p>
                    </div>
                    <div className='mb-8 px-3 border border-blue-200 py-1 flex items-center justify-between gap-4 text-[1.6rem]'>
                        <p className='font-light w-[70%] border-r border-blue-200'>Fee: </p>
                        <p className='font-extrabold w-[30%] text-end text-blue-700'>
                            {calculateTotal() ? '$' + calculateTotal().toFixed(2) : '00'}
                        </p>
                    </div>
                   
                    <div className='mb-3'>
                        <button 
                            type='submit' 
                            className='w-[100%] bg-slate-900 text-white rounded-xl hover:drop-shadow-lg py-4'>
                            {isSubmit ? 'Processing' : 'Proceed'}
                        </button>
                    </div>

                    <p className='text-sm mt-2 mb-4'>
                        By clicking the button, you agree to AcquiredZW's 
                        <Link href="/terms" className="mx-2 text-blue-700 underline ease-linear hover:no-underline">
                        Terms of Service
                        </Link>  
                        and 
                        <Link href="/privacy" className="mx-2 text-blue-700 underline ease-linear hover:no-underline">
                        Privacy Notice</Link>.
                    </p>


                </div>
            </div>
        </div>
    </section>
    </>
  )
}
