"use client";
import { _roleUpdateAction } from '@/actions/RoleActions';
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


export default function RoleEditModal({id, getData, domData, isModal, setIsModal}) {
    const [data, setData] = useState(domData)
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        if(!data?.name){
            const message = "Name is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        if(!data?.level){
            const message = "Level is required."
            toast.warn(level, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        const formData = {
            name: data?.name,
            level: data?.level,
        }
        try{
            const res = await _roleUpdateAction(formData, id);
            if(res.status == 1) {
                await getData();
                toast.success(res.message, reactToastifyDark);
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
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(false)} 
                    className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Edit Role
                    </h2>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            value={data?.name}
                            onChange={handleInput}
                            placeholder='Name' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        { errMsg.name &&
                          <p className='text-red-600 text-sm'>{errMsg?.name}</p> }
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Level:</p>
                        <select
                            name='level'
                            onChange={handleInput}
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                            <option value="">Select Level</option>
                            <option value={1} selected={data?.level == 1 && 'selected'}>1</option>
                            <option value={2} selected={data?.level == 2 && 'selected'}>2</option>
                            <option value={3} selected={data?.level == 3 && 'selected'}>3</option>
                            <option value={4} selected={data?.level == 4 && 'selected'}>4</option>
                        </select>
                        { errMsg.level &&
                          <p className='text-red-600 text-sm'>{errMsg?.level}</p> }
                    </div>                    

                    <div className='w-[100%] mb-6'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                            { isSubmit ? 'Processing' : 'Submit' }
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
