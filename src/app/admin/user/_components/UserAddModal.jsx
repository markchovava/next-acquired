"use client";
import { _userStoreAction } from '@/actions/UserActions';
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


export default function UserAddModal({memberships, roles, getData, isModal, setIsModal}) {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        email: '',
        phone: '',
        address: '',
        membership_status: '',
        membership_id: '',
        linkedin: '',
        skillset: '',
        asquisition: '',
        role_level: '',
        bio: '',
    })
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        if(!data?.name){
            const message = "Full Name is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        if(!data?.role_level){
            const message = "Role is required."
            toast.warn(role_level, reactToastifyDark)
            setErrMsg({role_level: message})
            setIsSubmit(false)
            return
        }
        if(!data?.membership_id){
            const message = "Membership is required."
            toast.warn(membership_id, reactToastifyDark)
            setErrMsg({membership_id: message})
            setIsSubmit(false)
            return
        }
        if(!data?.membership_status){
            const message = "Membership Status is required."
            toast.warn(membership_status, reactToastifyDark)
            setErrMsg({membership_status: message})
            setIsSubmit(false)
            return
        }
        if(!data?.email){
            const message = "Email is required."
            toast.warn(email, reactToastifyDark)
            setErrMsg({email: message})
            setIsSubmit(false)
            return
        }
        
        const formData = {
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            role_level: data?.role_level,
            membership_id: data?.membership_id,
            membership_status: data?.membership_status,
            linkedin: data?.linkedin,
            address: data?.address,
            bio: data?.bio,
            skillset: data?.skillset,
            asquisition: data?.asquisition,
        }

        try{
            const res = await _userStoreAction(formData);
            console.log('res', res)
            if(res?.status == 0){
                const message = res?.message;
                oast.success(message, reactToastifyDark);
                setErrMsg({email: message});
                setIsSubmit(false);
                return;
            }
            if(res?.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                setData({});
                setErrMsg({});
                setIsSubmit(false)
                setIsModal(false);
                return;
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false)
            return;
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
            <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                    <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Add User
                    </h2>
                    {/* FULL NAME */}
                     
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Full Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            value={data?.name}
                            onChange={handleInput}
                            placeholder='Full Name' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        {errMsg?.name &&
                            <p className='text-red-500 text-sm'>{errMsg?.name}</p>}
                    </div>
                    {/* ROLES */}
                    {roles &&
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Role:</p>
                        <select 
                            type='text' 
                            name='role_level'
                            onChange={handleInput} 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                            <option value=''>Select an option.</option>
                            { roles.length > 0 &&
                                roles.map((i, key) => (
                                    <option key={key} value={i?.level}>{i?.name}</option>
                                ))
                            }
                        </select>
                        {errMsg?.role_level &&
                                <p className='text-red-500 text-sm'>{errMsg?.role_level}</p>}
                    </div>
                    }
                    {/* MEMBERSHIPS */}
                    {memberships &&
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Membership Type:</p>
                        <select 
                            name='membership_id'
                            onChange={handleInput} 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                            <option value=''>Select an option.</option>
                            {memberships.length > 0 &&
                                memberships.map((i, key) => (
                                    <option key={key} value={i?.id}>{i?.name}</option>
                                ))
                            }
                        </select>
                        {errMsg?.membership_id &&
                            <p className='text-red-500 text-sm'>{errMsg?.membership_id}</p>}
                    </div>
                    }
                    {/* MEMBERSHIP STATUS */}
                    { memberships &&
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Membership Status:</p>
                        <select 
                            name='membership_status'
                            onChange={handleInput} 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                            <option value=''>Select an option.</option>
                            <option value={0}>Not Active</option>
                            <option value={1}>Active</option>
                        </select>
                        {errMsg?.membership_status &&
                            <p className='text-red-500 text-sm'>{errMsg?.membership_status}</p>}
                    </div>
                    }
                    {/* EMAIL */}
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
                            <p className='text-red-500 text-sm'>{errMsg?.email}</p>}    
                    </div>
                    {/* PHONE */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Phone:</p>
                        <input 
                            type='text' 
                            name='phone'
                            value={data?.phone}
                            onChange={handleInput}
                            placeholder='Phone' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/* ADDRESS */}
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
                    {/* LINKEDIN */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>LinkedIn:</p>
                        <input 
                            type='text' 
                            name='linkedin'
                            value={data?.linkedin}
                            onChange={handleInput}
                            placeholder='LinkedIn' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/* SKILLSET */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Skillset:</p>
                        <textarea 
                            type='text' 
                            name='skillset'
                            value={data?.skillset}
                            onChange={handleInput}
                            placeholder='Skillset' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>
                    {/* Asquisition Target */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Asquisition Target:</p>
                        <textarea 
                            type='text' 
                            name='asquisition'
                            value={data?.asquisition}
                            onChange={handleInput}
                            placeholder='Asquisition Target' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>
                    {/* About Me */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>About Me (Bio):</p>
                        <textarea 
                            type='text' 
                            name='bio'
                            value={data?.bio}
                            onChange={handleInput}
                            placeholder='About Me' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>

                    <div className='w-[100%] mb-6'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                            {isSubmit ? 'Processing' : 'Submit'}
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
