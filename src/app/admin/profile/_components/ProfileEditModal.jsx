"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ProfileEditModal({isModal, setIsModal}) {
    const [data, setData] = useState({})
    const handleInput = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
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
        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50 overflow-y-auto' >
            <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
            <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form>
                    <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Edit Profile
                    </h2>
                    <div className='flex items-center justify-start gap-3'>
                        {/*  */}
                        <div className='w-[100%] mb-6'>
                            <p className='mb-2 leading-none text-sm font-semibold'>First Name:</p>
                            <input 
                                type='text' 
                                name='name'
                                placeholder='Name' 
                                className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        </div>
                        {/*  */}
                        <div className='w-[100%] mb-6'>
                            <p className='mb-2 leading-none text-sm font-semibold'>Last Name:</p>
                            <input 
                                type='text' 
                                name='name'
                                placeholder='Last Name' 
                                className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        </div>
                    </div>
                    {/* ADDRESS */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Address:</p>
                        <input 
                            type='text' 
                            name='address'
                            placeholder='Address' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/* LINKEDIN */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>LinkedIn:</p>
                        <input 
                            type='text' 
                            name='linkedin'
                            placeholder='LinkedIn' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/* SKILLSET */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Skillset:</p>
                        <textarea 
                            type='text' 
                            name='skillset'
                            placeholder='Skillset' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>
                    {/* Asquisition Target */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Asquisition Target:</p>
                        <textarea 
                            type='text' 
                            name='asquisition_target'
                            placeholder='Asquisition Target' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>
                    {/* About Me */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>About Me (Bio):</p>
                        <textarea 
                            type='text' 
                            name='bio'
                            placeholder='About Me' 
                            className='w-[100%] h-[8rem] rounded-xl border border-gray-300 outline-none p-3'></textarea>
                    </div>

                    <div className='w-[100%] mb-6'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                            Submit
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
