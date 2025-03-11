"use client";
import { _partnerStoreAction } from '@/actions/PartnerActions';
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


export default function PartnerAddModal({getData, isModal, setIsModal}) {
    const [data, setData] = useState({
        name: '',
        image: '',
        link: '',
    });
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
        const formData = new FormData();
        formData.append('image', data?.image)
        formData.append('name', data?.name)
        formData.append('link', data?.link)
        
        const formDataObj = Object.fromEntries(formData.entries());
        console.log('FormData as object:', formDataObj);

        try{
            const res = await _partnerStoreAction(formData);
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
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(false)} 
                    className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                {/* FORM */}
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Add Partner
                    </h2>
                    {/* IMAGE */}
                    <div className='mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Image:</p>
                        <input 
                            type='file' 
                            name='image'
                            onChange={ (e) => setData({
                                ...data, 
                                image: e.target.files[0], 
                                img: URL.createObjectURL(e.target.files[0]), })
                            }
                            className='mb-2' />
                        <div className='mx-auto w-[40%] rounded-xl overflow-hidden border border-slate-300 aspect-[5/2] relative bg-slate-100 drop-shadow-md'>
                            <img src={data.img} alt='Image' className='absolute z-10 w-[100%] h-[100%] object-cover' />
                        </div>
                    </div>
                    {/* NAME */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            onChange={handleInput}
                            value={data?.name}
                            placeholder='Name' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        {errMsg?.name &&
                        <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                    </div>
                    {/* LINK */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Link:</p>
                        <input 
                            type='text' 
                            name='link'
                            onChange={handleInput}
                            value={data?.link}
                            placeholder='Link https://' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/* SUBMIT */} 
                    <div className='w-[100%] mb-6'>
                        <button 
                            type='submit' 
                            className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
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
