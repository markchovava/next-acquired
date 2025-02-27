import Link from 'next/link'
import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function page({ params: {id} }) {
  return (
    <>
    <section className='w-[100%] pt-[3rem]'>
        <div className='mx-auto w-[90%] mb-6'>
            <h1 className='font-serif text-[3rem] leading-tight'>
                22 FedEx Ground Routes - Mesquite, TX
            </h1>
            <p className='font-serif text-xl'>Mesquite, TX, Dallas County</p>
        </div>
        <div className='mx-auto w-[90%] flex lg:flex-row flex-col justify-start items-start gap-10'>
            <div className="lg:w-[60%] w-[100%]">
                <div className='w-[100%] aspect-[5/3] bg-gray-700 rounded-xl drop-shadow-lg mb-4'></div>
                {/*  */}
                <div className='flex justify-end items-center mb-4'>
                    <p className='font-light'>Asking price:</p>
                    <p className='text-2xl font-serif ml-2'>$3,000,000</p>
                </div>

                <div className='w-[100%] grid lg:grid-cols-4 grid-cols-2 gap-5 mb-5'>
                    {/*  */}
                    <div className='bg-gray-200 rounded-lg px-4 py-3'>
                        <h4 className='font-bold text-xl leading-tight mb-1'>$848,124</h4>
                        <p className='relative text-sm flex items-center justify-start gap-2'>
                            <span>Cash flow</span>
                            <IoMdInformationCircleOutline className='cursor-pointer text-gray-800' />
                            <div className='absolute hidden z-[60] p-2 top-[100%] bg-gray-700 text-white text-sm rounded-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Veniam, esse facere. Ea earum eligendi tempora laudantium 
                                ad sunt laboriosam, voluptatibus dignissimos expedita 
                                excepturi assumenda voluptate iste facilis, quis id deserunt.
                            </div>
                        </p>
                    </div>
                    {/*  */}
                    <div className='bg-gray-200 rounded-lg px-4 py-3'>
                        <h4 className='font-bold text-xl leading-tight mb-1'>$848,124</h4>
                        <p className='relative text-sm flex items-center justify-start gap-2'>
                            <span>Gross Revenue</span>
                            <IoMdInformationCircleOutline className='cursor-pointer text-gray-800' />
                            <div className='absolute hidden z-[60] p-2 top-[100%] bg-gray-700 text-white text-sm rounded-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Veniam, esse facere. Ea earum eligendi tempora laudantium 
                                ad sunt laboriosam, voluptatibus dignissimos expedita 
                                excepturi assumenda voluptate iste facilis, quis id deserunt.
                            </div>
                        </p>
                    </div>
                    {/*  */}
                    <div className='bg-gray-200 rounded-lg px-4 py-3'>
                        <h4 className='font-bold text-xl leading-tight mb-1'>N/A</h4>
                        <p className='relative text-sm flex items-center justify-start gap-2'>
                            <span>Inventory</span>
                            <IoMdInformationCircleOutline className='cursor-pointer text-gray-800' />
                            <div className='absolute hidden z-[60] p-2 top-[100%] bg-gray-700 text-white text-sm rounded-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Veniam, esse facere. Ea earum eligendi tempora laudantium 
                                ad sunt laboriosam, voluptatibus dignissimos expedita 
                                excepturi assumenda voluptate iste facilis, quis id deserunt.
                            </div>
                        </p>
                    </div>
                    {/*  */}
                    <div className='bg-gray-200 rounded-lg px-4 py-3'>
                        <h4 className='font-bold text-xl leading-tight mb-1'>N/A</h4>
                        <p className='relative text-sm flex items-center justify-start gap-2'>
                            <span>EBITDA</span>
                            <IoMdInformationCircleOutline className='cursor-pointer text-gray-800' />
                            <div className='absolute hidden z-[60] p-2 top-[100%] bg-gray-700 text-white text-sm rounded-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Veniam, esse facere. Ea earum eligendi tempora laudantium 
                                ad sunt laboriosam, voluptatibus dignissimos expedita 
                                excepturi assumenda voluptate iste facilis, quis id deserunt.
                            </div>
                        </p>
                    </div>
                    
                </div>

                <div className='mb-5'>
                    <h3 className='leading-tight text-xl font-extrabold mb-4'>About this Business</h3>
                    <p className='text-sm'>FedEx Ground Routes for Sale: Well-established and highly profitable 
                        FedEx Ground routes.  All routes are contiguous, making load sharing 
                        among routes efficient.  Each business, which is comprised of multiple 
                        routes, comes with (1) truck and (1) experienced driver already in 
                        place for each route.  Business has seen double digit organic growth 
                        since inception.Turnkey and a great opportunity for semi-absentee 
                        ownership with full time manager in place.  Clean books and financials, 
                        including maintenance records for vehicles.  This business is ready to 
                        generate cash flow on day one.  FedEx grows organically as package 
                        volume has shown consistent growth each year.  FedEx also provides 
                        yearly inflation-adjusted revenue enhancements.  Average annual growth 
                        of over 10%.Business growth can be accelerated beyond organic growth 
                        rate through acquisition of additional routes.  Home Based.To request 
                        more information regarding this listing, simply check the ADD TO REQUEST 
                        INFO BASKET button and when you are done searching and have made all your 
                        selections, simply click on the REQUEST INFO button at the bottom of the 
                        page.Additional Details:
                    </p>
                </div>
                <div className='lg:pb-[5rem] pb-[3rem]'>
                    <h3 className='leading-tight text-lg font-semibold mb-2'>Detailed information</h3>
                    <div className='w-[100%] flex items-center justify-start font-sm'>
                        <div className='w-[30%]'>Location: </div>
                        <div className='w-[70%]'>Mesquite, TX, Dallas County</div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[40%] w-[100%]'>
                <form className='bg-white border drop-shadow p-8 rounded-xl mb-[3rem]'>
                    <h3 className='text-2xl font-serif mb-4'>Interested?</h3>
                    <p className='text-lg mb-2'>We're excited to kick-start your business search.</p>
                    <p className='font-medium text-lg mb-4'>First off, tell us more about you.</p>
                    <div className='flex items-center justify-start mb-4'>
                        <input 
                            type='text' 
                            name='firstname' 
                            placeholder='First Name'
                            className='w-[50%] px-3 py-4 outline-none border border-slate-300 rounded-l-xl' />
                        <input 
                            type='text' 
                            name='lastname' 
                            placeholder='Last Name'
                            className='w-[50%] px-3 py-4 outline-none border-y border-r border-slate-300 rounded-r-xl' />
                    </div>
                    <input 
                        type='text' 
                        name='phone' 
                        placeholder='Phone Number' 
                        className='w-[100%] mb-4 px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='Email' 
                        className='w-[100%] mb-4 px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                    <input 
                        type='text' 
                        name='purchase_timeframe' 
                        placeholder='Purchase Timeframe' 
                        className='w-[100%] mb-4 px-3 py-4 outline-none border border-slate-300 rounded-xl' />
                    <textarea
                        name='purchase_timeframe' 
                        placeholder='Anything you would like us to know.' 
                        className='w-[100%] h-[8rem] mb-4 px-3 py-4 outline-none border border-slate-300 rounded-xl'></textarea>

                    <button type='submit' className='w-[100%] bg-slate-900 text-white rounded-xl hover:drop-shadow-lg py-4'>
                        Submit
                    </button>
                    <p className='text-sm mt-2 mb-4'>
                        By clicking the button, you agree to BizScout's 
                        <Link href="#" className="mx-2 text-blue-700 underline ease-linear hover:no-underline">Terms of Service</Link>  
                        and 
                        <Link href="#" className="mx-2 text-blue-700 underline ease-linear hover:no-underline">Privacy Notice</Link>.
                    </p>

                </form>
            </div>
        </div>
    </section>

   
    </>
  )
}
