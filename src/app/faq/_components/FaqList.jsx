"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaArrowLeftLong, FaArrowRightLong, FaMinus, FaPlus } from 'react-icons/fa6';


const variants = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1, y: 0,
        transition: {type: 'spring', duration: 1} },
}


export default function FaqList() {
    const [isOpen, setIsOpen] = useState([...Array(12).fill(false)]);
    const [isActive, setIsActive] = useState({});

    const handleIsOpen = (i, newValue) => {
        // 1. Create a copy of the array
        const newIsOpen = [...isOpen];
        // 2. Modify the copy
        newIsOpen[i] = newValue;
        // 3. Update the state with the new array
        setIsOpen(newIsOpen);
    };


    const handleIsActive = (i, newValue) => {
        const newList = [...isActive];
        newList[i] = newValue;
        setIsActive(newList);
    };


      console.log('isActive')
      console.log(isActive)
    


  return (
    <>
     <section className='w-[100%] bg-gray-100'>
        <div className='mx-auto w-[90%] h-[30rem] flex items-center justify-center flex-col'>
            <h2 className='text-[2.5rem] leading-tight font-serif text-center mb-4'>
                Welcome to BizScout 
                <br /> Help Center
            </h2>
            <p className='text-2xl font-light leading-tight mb-6'>
                Find articles and discussions to help 
                <br /> answer your BizScout questions
            </p>
            <div className='lg:w-[60%] w-[100%] lg:h-[4rem] py-3 flex items-center justify-center bg-white drop-shadow-lg rounded-full overflow-hidden'>
                <div className='lg:w-[15%] hidden lg:flex items-center justify-center'>
                    <CiSearch className='text-3xl text-gray-500' />
                </div>
                <input type='text' name='search' className='h-[100%] border-l border-slate-300 outline-none px-4 py-4 w-[100%]' />
                <button className='rounded-full mr-3 px-8 py-3 text-white bg-gradient-to-br from-amber-500 to-amber-600 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-amber-600'>
                    Search
                </button>
            </div>
        </div>
    </section>

    <section className='w-[100%]'>
        <div className='pt-[4rem] pb-[3rem] mx-auto w-[90%] grid lg:grid-cols-6 grid-cols-2 gap-4'>
            <button 
                onClick={ () => setIsActive({one: true}) } 
                className={`${isActive.one && 'bg-gray-800 text-white'} px-8 py-3 border border-gray-400 rounded-full ease-linear duration-100 transition-all hover:bg-gray-800 hover:text-white`}>
                All
            </button>
            <button
                onClick={() => setIsActive({two: true})} 
                className={`${isActive.two && 'bg-gray-800 text-white'} px-8 py-3 border border-gray-400 rounded-full ease-linear duration-100 transition-all hover:bg-gray-800 hover:text-white`}>
                Getting Started
            </button>
            <button 
                onClick={() => setIsActive({three: true}) }
                className={`${isActive.three && 'bg-gray-800 text-white'} px-8 py-3 border border-gray-400 rounded-full ease-linear duration-100 transition-all hover:bg-gray-800 hover:text-white`}>
                Account
            </button>
            <button 
                onClick={() => setIsActive({four: true}) } 
                className={`${isActive.four && 'bg-gray-800 text-white'} px-8 py-3 border border-gray-400 rounded-full ease-linear duration-100 transition-all hover:bg-gray-800 hover:text-white`}>
                Product Pricing
            </button>
            <button
                onClick={() => setIsActive({five: true})} 
                className={`${isActive.five && 'bg-gray-800 text-white'} px-8 py-3 border border-gray-400 rounded-full ease-linear duration-100 transition-all hover:bg-gray-800 hover:text-white`}>
                Selling
            </button>
        </div>
    </section>

    <section className='w-[100%]'>
            <div className='mx-auto w-[90%] pb-[4rem]'>
                {isOpen.map((key, i) => (

                <section className='w-[100%] '>
                    {/*  */}
                    <div onClick={() => {
                        handleIsOpen(i, !isOpen[i])
                        }} className='cursor-pointer w-[100%] flex justify-between items-center border border-gray-300 p-6'>
                        <p className='text-lg font-semibold font-serif'>{++i}. What is ScoutSights?</p>
                        <motion.button onClick={() => handleIsOpen(i, !isOpen[i])} className='flex items-center gap-3'>
                            { isOpen[i] 
                            ? <FaMinus />
                            : <FaPlus /> }
                            
                        </motion.button>
                    </div>
                    {/*  */}
                    <AnimatePresence>
                        {isOpen[i] &&
                        <motion.div
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden"  
                            className='relative transition-all ease-linear pt-4 pb-8 bg-gray-100 p-6'>
                            <p className='text-lg'>
                                ScoutSights is BizScout's feature that offers detailed financial and operational 
                                insights into businesses listed on the platform. It includes key financial metrics 
                                such as Cash Flow, Revenue, and EBITDA, plus operational metrics like Profit Margins 
                                and Debt Service. This helps potential buyers or investors understand the health of a 
                                business at a glance, making it easier to make informed decisions. All this data is 
                                presented in a clear and user-friendly format, so you can analyze it quickly and 
                                effectively.
                            </p>
                        </motion.div>
                        }
                    </AnimatePresence>
                </section>
    
                ))}
               
            </div>

            {/* PAGINATION */}
            <div className='mx-auto w-[90%] flex items-center justify-end gap-6 pb-[6rem]'>
            <button className='flex items-center justify-center gap-2 group border border-gray-700 px-4 py-2 text-gray-700'>
                <FaArrowLeftLong className="ease-linear transition-all duration-100 group-hover:-translate-x-1" />
                Prev
            </button>
            <button className='flex items-center justify-center gap-2 group border border-gray-700 px-4 py-2 text-gray-700'>
                Next
                <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-1" />
            </button>
            </div>
    </section>
    </>
  )
}
