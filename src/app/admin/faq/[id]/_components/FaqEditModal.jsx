"use client";
import { _faqUpdateAction } from '@/actions/FaqActions';
import RichTextEditor from '@/app/_components/RichTextEditor';
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


export default function FaqEditModal({id, getData, domData, isModal, setIsModal}) {
    const [data, setData] = useState(domData)
    const [description, setDescription] = useState(domData?.description)
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    
    async function postData() {
        if(!data?.title){
            const message = "Title is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({title: message})
            setIsSubmit(false)
            return
        }
        if(!description){
            const message = "Description is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({title: message})
            setIsSubmit(false)
            return
        }
        const formData = {
            title: data?.title,
            description: description,
        }
        try{
            const res = await _faqUpdateAction(formData, id);
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
            <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Edit FAQ
                    </h2>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Title:</p>
                        <input 
                            type='text' 
                            name='title'
                            value={data?.title}
                            onChange={handleInput}
                            placeholder='Title' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        {errMsg?.title &&
                        <p className='text-red-600 text-sm'>{errMsg?.title}</p>}
                    </div>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Title:</p>
                        <div className='w-[100%] mb-6'>
                            <p className='mb-2 leading-none text-sm font-semibold'>Description:</p>
                            <div className='w-[100%] h-auto mb-12 overflow-hidden'>
                            <RichTextEditor content={description} setContent={setDescription} />
                            {errMsg?.description &&
                        <p className='text-red-600 text-sm'>{errMsg?.description}</p>}
                            </div>
                        </div>
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
