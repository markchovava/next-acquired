"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import generateUniqueId from '@/utils/generateUniqueId';
import { _businessUpdateAction } from '@/actions/BusinessActions';
import { toast } from 'react-toastify';
import { reactToastifyDark } from '@/utils/reactToastify';
import RichTextEditor from '@/app/_components/RichTextEditor';
import { baseURL } from '@/apis/BaseURL';



const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}



export default function BusinessEditModal({id, domData, getData, cities, provinces, isModal, setIsModal}) {
    const [data, setData] = useState({
        name: domData?.name,
        phone: domData?.phone,
        email: domData?.email,
        address: domData?.address,
        city_id: domData?.city_id,
        province_id: domData?.province_id,
        province: domData?.province_id,
        price: domData?.price,
        image: domData?.image,
        img: baseURL + domData?.image,
    });
    const [errMsg, setErrMsg] = useState({});
    const [description ,setDescription] = useState(domData?.description)
    const [isSubmit, setIsSubmit] = useState(false)

    const [dList, setDList] = useState(domData?.business_details);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleAddDList = () => {
        if(data.detail_name.trim() !== '' && data.detail_value.trim()  !== '') {
            const obj = {
                id: generateUniqueId(),
                name: data.detail_name, 
                value: data.detail_value,
            }
            setDList([ obj, ...dList])
            console.log("obj :: ", obj)
        }
        return
    }

    const handleDeleteDlist = (itemId) => {
        setDList((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    async function postData() {
        if(!data?.name){
            const message = "Name is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        if(!data?.phone){
            const message = "Phone is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({phone: message})
            setIsSubmit(false)
            return
        }
        if(!data?.email){
            const message = "Email is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({email: message})
            setIsSubmit(false)
            return
        }
        if(!data?.price){
            const message = "Price is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({price: message})
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
        const formData = new FormData();
        formData.append('image', data?.image)
        formData.append('name', data?.name)
        formData.append('phone', data?.phone)
        formData.append('email', data?.email)
        formData.append('address', data?.address)
        formData.append('description', description)
        formData.append('price', data?.price)
        formData.append('province_id', data?.province_id)
        formData.append('city_id', data?.city_id)
        formData.append('business_details', JSON.stringify(dList))
        // const formDataObj = Object.fromEntries(formData.entries());
        // console.log('FormData as object:', formDataObj);
        try{
            const res = await _businessUpdateAction(formData, id);
             if(res?.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
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
                <form action={postData} onSubmit={() => setIsSubmit(true) }>
                   <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
                    Edit Business
                    </h2>
                    {/*  */}
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
                        <div className='mx-auto w-[40%] rounded-xl overflow-hidden border border-slate-300 aspect-[5/3] relative bg-slate-100 drop-shadow-md'>
                            <img src={data.img} className='absolute z-10 w-[100%] h-[100%] object-cover' />
                        </div>
                    </div>
                    {/* NAME */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            value={data?.name}
                            onChange={handleInput}
                            placeholder='Name' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
                    {/* PHONE */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Phone Number:</p>
                        <input 
                            type='text' 
                            name='phone'
                            value={data?.phone}
                            onChange={handleInput}
                            placeholder='Phone' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                    </div>
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
                    </div>
                    {/* ADDRRESS */}
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
                    
                    {/* PROVINCE */}
                    { provinces &&
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Province:</p>
                        <select  
                            name='province_id'
                            onChange={handleInput}
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                            <option value="">Select an option</option>
                            {provinces.map((i, key) => (
                                <option 
                                key={key} 
                                value={i?.id} 
                                selected={i?.id == data?.province_id && 'selected'}>
                                    {i?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    }
                    {/* CITY */}
                    { cities &&
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>City:</p>
                        <select  
                            name='city_id'
                            onChange={handleInput}
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                            <option value="">Select an option</option>
                            {cities?.map((i, key) => (
                                <option
                                key={key} 
                                value={i?.id} 
                                selected={i?.id == data?.city_id && 'selected'}>
                                    {i?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    }

                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-semibold'>Asking Price:</p>
                        <input 
                            type='text' 
                            name='price'
                            onChange={handleInput}
                            value={data?.price}
                            placeholder='Asking Price' 
                            className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
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
                    {/* DETAILS */}
                    <div className='w-[100%] grid grid-cols-9 gap-4'>
                        <div className='col-span-4'>
                            <p className='mb-2 leading-none text-sm font-semibold'>Detail Name:</p>
                            <input 
                                type='text' 
                                name='detail_name'
                                onChange={handleInput}
                                placeholder='Detail Name' 
                                className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        </div>
                        <div className='col-span-4'>
                            <p className='mb-2 leading-none text-sm font-semibold'>Detail Value:</p>
                            <input 
                                type='text' 
                                name='detail_value'
                                onChange={handleInput}
                                placeholder='Detail Value' 
                                className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        </div>
                        <div className='col-span-1 flex items-end justify-center'>
                            <button type='button'
                                onClick={handleAddDList}
                                className='py-3'>
                                <IoMdAddCircleOutline className='text-3xl hover:scale-110 transition-all ease-linear duration-150' />
                            </button>
                        </div>
                    </div>

                    {/*  */}
                    <div className=' mt-3'>
                        {dList && dList.map((i, key) => (
                            <div key={i.id} className='w-[100%] grid grid-cols-9 gap-4 border border-gray-300'>
                                <div className='w-[100%] col-span-4 px-3 py-2 border-r border-gray-300'>{i.name}</div>
                                <div className='w-[100%] col-span-4 px-3 py-2 border-r border-gray-300'> {i.value}</div>
                                <div className='col-span-1 flex items-center justify-center'>
                                    <button type='button'
                                        onClick={() => handleDeleteDlist(i.id)}
                                        className='py-1 flex items-center justify-center'>
                                        <MdDeleteForever className='text-xl hover:scale-110 transition-all ease-linear duration-150' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    <div className='w-[100%] my-8'>
                        <button
                            type='submit' 
                            className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                            { isSubmit ? 'Processing' : 'Submit'}
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
