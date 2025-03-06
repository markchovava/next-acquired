"use client";
import { _faqStoreAction } from '@/actions/FaqActions';
import { _membershipStoreAction } from '@/actions/MembershipActions';
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


export default function MembershipAddModal({getData, isModal, setIsModal}) {
        const [data, setData] = useState({
            name: '',
        });
       const [description, setDescription] = useState("");
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
            if(!data?.fee){
                const message = "Fee is required."
                toast.warn(message, reactToastifyDark)
                setErrMsg({fee: message})
                setIsSubmit(false)
                return
            }
            if(!description){
                const message = "Description is required."
                toast.warn(message, reactToastifyDark)
                setErrMsg({description: message})
                setIsSubmit(false)
                return
            }
            const formData = {
                name: data?.name,
                fee: data?.fee,
                description: description,
            }
            try{
                const res = await _membershipStoreAction(formData);
                if(res.status == 1) {
                    await getData();
                    toast.success(res.message, reactToastifyDark);
                    setData({});
                    setDescription('');
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
                    Add Membership
                    </h2>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            onChange={handleInput}
                            value={data?.name}
                            placeholder='Name' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        { errMsg?.name && 
                            <p className='text-red-600 text-sm'>{errMsg?.name}</p> }
                    </div>
                   
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Fee:</p>
                        <input 
                            type='number' 
                            name='fee'
                            onChange={handleInput}
                            value={data?.fee}
                            placeholder='Fee' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        { errMsg?.fee && 
                            <p className='text-red-600 text-sm'>{errMsg?.fee}</p> }
                    </div>

                     {/*  */}
                     <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Description:</p>
                        <div className='w-[100%] h-auto mb-12 overflow-hidden'>
                        <RichTextEditor content={description} setContent={setDescription} />
                        { errMsg?.description && 
                            <p className='text-red-600 text-sm'>{errMsg?.description}</p> }
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
