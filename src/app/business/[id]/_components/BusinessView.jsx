"use client";
import { businessMessageStoreAction } from '@/actions/BusinessMessageActions';
import { baseURL } from '@/apis/BaseURL';
import { cookieRoleClient } from '@/cookies/cookieRoleClient';
import { reactToastifyDark } from '@/utils/reactToastify';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { toast } from 'react-toastify';




export default function BusinessView({id, dbData}) {
    const { getRoleCookie } = cookieRoleClient()
    const [data, setData] = useState(dbData?.data);
    const [errMsg, setErrMsg] = useState({})
    const [isRes, setIsRes] = useState(false)
    const [input, setInput] = useState({
        name: '',
        phone: '',
        email: '',
        timeframe: '',
        message: '',
    });
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    async function postData() {
        if(!input?.name) {
            const message = 'Full Name is required.'
            toast.warn(message, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        if(!input?.phone) {
            const message = 'Phone is required.'
            toast.warn(message, reactToastifyDark)
            setErrMsg({phone: message})
            setIsSubmit(false)
            return
        }
        if(!input?.email) {
            const message = 'Email is required.'
            toast.warn(message, reactToastifyDark)
            setErrMsg({email: message})
            setIsSubmit(false)
            return
        }
        const formData = {
            business_id: id,
            name: input?.name,
            phone: input?.phone,
            email: input?.email,
            timeframe: input?.timeframe,
            message: input?.message,
        };
        try{
            const res = await businessMessageStoreAction(formData);
            console.log('res', res)
            if(res?.status == 1) {
                toast.success(res?.message, reactToastifyDark);
                setInput({});
                setErrMsg({});
                setIsSubmit(false);
                setIsRes(true);
                return;
            }
            toast.warn('Something went wrong, try again.', reactToastifyDark);
            setIsSubmit(false);
            return;
            } catch (error) {
                console.error(`Error: ${error}`);
                setIsSubmit(false)
                return;
        }

    }

 

  return (
    <>
    <section className='w-[100%] pt-[3rem]'>
        {/*  */}
        <div className='mx-auto w-[90%] mb-6'>
            <h1 className='font-serif text-[3rem] leading-tight'>
                {data?.name}
            </h1>
            <p className='font-serif text-xl'>{data?.address}</p>
        </div>
        <div className='mx-auto w-[90%] flex lg:flex-row flex-col justify-start items-start gap-10'>
            <div className="lg:w-[60%] w-[100%]">
                <div className='w-[100%] aspect-[5/3] overflow-hidden bg-gray-400 rounded-xl drop-shadow-lg mb-4'>
                    <Image
                        fill
                        style={{ objectFit: 'cover' }} 
                        src={data?.image ? baseURL + data?.image : './assets/img/no-img.png' } 
                        alt={data?.name}
                    />
                </div>
                <section className='flex items-center justify-between my-6'>
                    <div className=''>
                        {  data?.categories && 
                            data?.categories.map((a) => (
                            <Link 
                                key={a?.id} 
                                href={`/category/${a?.id}`} 
                                className='rounded-lg py-3 px-2 bg-amber-400 cursor-pointer mr-2'>
                                {a?.name}
                            </Link>
                        ))} 
                    </div>
                    {/* ASKING PRICE */}
                    <div className='flex justify-end items-center mb-4'>
                        <p className='font-light'>Asking price:</p>
                        <p className='text-3xl font-serif ml-2'>
                            {data?.price ? '$' + data?.price : 'Undisclosed'}</p>
                    </div>
                </section>
                {/* ABOUT THIS BUSINESS */}
                <div className='mb-5'>
                    <h3 className='leading-tight text-xl font-extrabold mb-4'>About this Business</h3>
                    <div className='text-sm article leading-tight' 
                        dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                </div>

                {/* CONTACT INFORMATION */}
                {   getRoleCookie() &&
                    getRoleCookie() <= 3 &&
                    <section className='mb-5'>
                        <h3 className='leading-tight text-lg font-semibold mb-2'>Contact information</h3>
                        <div className='flex items-center justify-start gap-3 mb-1'>
                            <div>Email</div>
                            <div>{data?.email}</div>
                        </div>
                        <div className='flex items-center justify-start gap-3 mb-1'>
                            <div>Phone</div>
                            <div>{data?.phone}</div>
                        </div>
                        <div className='flex items-center justify-start gap-3 mb-1'>
                            <div>Province</div>
                            <div>{data?.province?.name}</div>
                        </div>
                    </section>

                }

                { data?.business_details?.length > 0 &&
                <div className='lg:pb-[5rem] pb-[3rem]'>
                    <h3 className='leading-tight text-lg font-semibold mb-2'>Detailed information</h3>
                    { data?.business_details.map((i) => (
                        <div key={i?.id} className='w-[100%] flex items-center justify-start border-b border-gray-300 font-sm'>
                        <div className='w-[30%]'>{i?.name}: </div>
                            <div className='w-[70%]'>{i?.value}</div>
                        </div> 
                    ))}
                </div>
                }

            </div>
            <div className='lg:w-[40%] w-[100%]'>
                <form 
                    action={postData} 
                    onSubmit={() => setIsSubmit(true)} 
                    className='bg-white border drop-shadow p-8 rounded-xl mb-[3rem]'>
                    <h3 className='text-2xl font-serif mb-4'>Interested?</h3>
                    <p className='text-lg mb-2'>We're excited to kick-start your business search.</p>
                    <p className='font-medium text-lg mb-4'>First off, tell us more about you.</p>
                    {/* NAME */}
                    <div className='mb-4'>
                        <input 
                            type='text' 
                            name='name' 
                            value={input?.name}
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
                            value={input?.phone}
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
                            value={input?.email}
                            onChange={handleInput}
                            placeholder='Email' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                        {errMsg?.email &&
                            <p className='text-sm text-red-500'>{errMsg?.email}</p>}
                    </div>
                    {/* TIMEFRAME */}
                    <div className='mb-4'>
                        <input 
                            type='text' 
                            name='timeframe'
                            value={input?.timeframe}
                            onChange={handleInput} 
                            placeholder='Purchase Timeframe' 
                            className='w-[100%] px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                    </div> 
                    {/* MESSAGE */}
                    <div className='mb-4'>
                        <textarea
                            name='message' 
                            value={input?.message}
                            onChange={handleInput} 
                            placeholder='Anything you would like us to know.' 
                            className='w-[100%] h-[8rem] px-3 py-4 outline-none border border-slate-300 rounded-xl'></textarea>
                    </div>           


                    {isRes ? 
                    <div className='px-8 pb-6'>
                        <p className='text-3xl pb-2 font-light border-b-4 border-green-600'>
                            Sent successfully.
                        </p>
                    </div>
                    :
                    <div className='mb-3'>
                        <button 
                            type='submit' 
                            className='w-[100%] bg-slate-900 text-white rounded-xl hover:drop-shadow-lg py-4'>
                            {isSubmit ? 'Processing' : 'Submit'}
                        </button>
                    </div>
                    }

                    <p className='text-sm mt-2 mb-4'>
                        By clicking the button, you agree to BizScout's 
                        <Link href="/terms" className="mx-2 text-blue-700 underline ease-linear hover:no-underline">
                        Terms of Service
                        </Link>  
                        and 
                        <Link href="/privacy" className="mx-2 text-blue-700 underline ease-linear hover:no-underline">
                        Privacy Notice</Link>.
                    </p>

                </form>
            </div>
        </div>
    </section>
    </>
  )
}
