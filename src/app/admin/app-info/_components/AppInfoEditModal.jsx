"use client";
import { _appInfoStoreAction } from '@/actions/AppInfoActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function AppInfoEditModal({domData, isModal, setIsModal, getData}) {
    const [data, setData] = useState(domData)
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData(){
        if(!data?.name){
            const message = 'Name is required.'
            setErrMsg({name: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false);
            return
        }
        if(!data?.phone){
            const message = 'Phone is required.'
            setErrMsg({phone: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false);
            return
        }
        if(!data?.email){
            const message = 'Email is required.'
            setErrMsg({email: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false);
            return
        }
        if(!data?.website){
            const message = 'Website is required.'
            setErrMsg({website: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false);
            return
        }
        
        const formData = {
            name: data?.name,
            phone: data?.phone,
            address: data?.address,
            email: data?.email,
            linkedin: data?.linkedin,
            facebook: data?.facebook,
            whatsapp: data?.whatsapp,
            website: data?.website,
            twitter: data?.twitter,
            description: data?.description,
        }

        try{
            const res = await _appInfoStoreAction(formData)
            console.log('res', res)
            if(res.status == 1) {
                toast.success(res?.message, reactToastifyDark);
                setIsSubmit(false);
                setErrMsg({});
                setData({})
                await getData()
                setIsModal(false)
                setIsSubmit(false);
                return
            }
            toast.warn("Something went wrong, try again.", reactToastifyDark);
            setIsSubmit(false);
            return;
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false); 
        }

    }

  return (
    <>
    <AnimatePresence>
        {isModal &&
        <motion.section
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto' >
            <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
            <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Edit App Information
                    </h2>
                    {/* Name */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            value={data?.name}
                            onChange={handleInput}
                            placeholder='Name' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        {errMsg.name && 
                        <p className='text-red-600 text-sm'>{errMsg.name}</p>}
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Phone Number:</p>
                        <input 
                            type='text' 
                            name='phone'
                            value={data?.phone}
                            onChange={handleInput}  
                            placeholder='Phone Number' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                         {errMsg?.phone && 
                        <p className='text-red-600 text-sm'>{errMsg?.phone}</p>}
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Address:</p>
                        <input 
                            type='text' 
                            name='address'
                            value={data?.address}
                            onChange={handleInput}  
                            placeholder='Address' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Email:</p>
                        <input 
                            type='text' 
                            name='email'
                            value={data?.email}
                            onChange={handleInput}  
                            placeholder='Email' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                         {errMsg?.email && 
                        <p className='text-red-600 text-sm'>{errMsg.email}</p>}
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Website:</p>
                        <input 
                            type='text' 
                            name='website'
                            value={data?.website}
                            onChange={handleInput}  
                            placeholder='Website' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                         {errMsg?.website && 
                        <p className='text-red-600 text-sm'>{errMsg?.website}</p>}
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Facebook:</p>
                        <input 
                            type='text' 
                            name='facebook'
                            value={data?.facebook}
                            onChange={handleInput}  
                            placeholder='Facebook' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>WhatsApp:</p>
                        <input 
                            type='text' 
                            name='whatsapp'
                            value={data?.whatsapp}
                            onChange={handleInput}  
                            placeholder='WhatsApp' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Twitter / X:</p>
                        <input 
                            type='text' 
                            name='twitter'
                            value={data?.twitter}
                            onChange={handleInput}  
                            placeholder='Twitter' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                   
                    
                    {/* About Me */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Description:</p>
                        <textarea
                            value={data?.description}
                            onChange={handleInput}  
                            name='description'
                            placeholder='Description' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>

                    <div className='w-[100%] mb-6'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                            {isSubmit ?'Processing' : 'Submit'}
                        </button>
                    </div>

                </form>

            </section>
            </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
