import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";


export default function page() {
  return (
    <>
    <section className='w-[100%] h-[20rem] bg-gradient-to-br from-slate-800 to-slate-950 text-white pt-[5rem] pb-[4rem]'>
        <div className='w-[90%] h-[100%] flex items-center justify-center flex-col mx-auto'>
            <h1 className='font-serif text-[3rem] text-center leading-tight mb-1'>
                About Us
            </h1>
            <p className='text-gray-300 italic text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </section>

    <section className='w-[100%] pt-[3rem] pb-[5rem]'>

        {/*  */}
        <div className='mx-auto pt-4 w-[90%] grid lg:grid-cols-4 grid-cols-1 border-t border-slate-300'>
            <div className='col-span-1'>
                <hr className='border-b-4 border-blue-800 w-[50%]' />
                <div className='w-[50%] flex items-center justify-center my-4'>
                    <FaInfoCircle className='text-[4rem] text-blue-800' />
                </div>
                <h3 className='text-[2rem] font-serif leading-tight text-blue-800'>
                    About Us
                </h3>
                <div>

                </div>
            </div>
            <div className='col-span-3'>
                <p className='mb-2 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti recusandae odio itaque sed eaque laudantium debitis 
                    placeat exercitationem architecto dignissimos fugiat vero eos 
                    vel, repudiandae sequi deserunt! Deserunt dolorum ipsam eum, 
                    explicabo, odit quas ipsum cum repellendus repellat libero 
                    voluptatem!
                </p>
                <p className='mb-4 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti recusandae odio itaque sed eaque laudantium debitis 
                    placeat exercitationem architecto dignissimos fugiat vero eos 
                    vel, repudiandae sequi deserunt! Deserunt dolorum ipsam eum, 
                    explicabo, odit quas ipsum cum repellendus repellat libero 
                    voluptatem!
                </p>
                <p className='mb-4 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti recusandae odio itaque sed eaque laudantium debitis 
                    placeat exercitationem architecto dignissimos fugiat vero eos 
                    vel, repudiandae sequi deserunt! Deserunt dolorum ipsam eum, 
                    explicabo, odit quas ipsum cum repellendus repellat libero 
                    voluptatem!
                </p>
            </div>
        </div>
        {/*  */}
        <div className='mx-auto pt-4 w-[90%] grid lg:grid-cols-4 grid-cols-1 border-t border-slate-300'>
            <div className='col-span-1'>
                <hr className='border-b-4 border-blue-800 w-[50%]' />
                <div className='w-[50%] flex items-center justify-center my-4'>
                    <FaLocationArrow className='text-[4rem] text-blue-800' />
                </div>
                <h3 className='text-[2rem] font-serif leading-tight text-blue-800'>
                    Our Mission
                </h3>
                <div>

                </div>
            </div>
            <div className='col-span-3'>
                <p className='mb-2 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti recusandae odio itaque sed eaque laudantium debitis 
                    placeat exercitationem architecto dignissimos fugiat vero eos 
                    vel, repudiandae sequi deserunt! Deserunt dolorum ipsam eum, 
                    explicabo, odit quas ipsum cum repellendus repellat libero 
                    voluptatem!
                </p>
                <p className='mb-4 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti recusandae odio itaque sed eaque laudantium debitis 
                    placeat exercitationem architecto dignissimos fugiat vero eos 
                    vel, repudiandae sequi deserunt! Deserunt dolorum ipsam eum, 
                    explicabo, odit quas ipsum cum repellendus repellat libero 
                    voluptatem!
                </p>
                <p className='mb-4 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti recusandae odio itaque sed eaque laudantium debitis 
                    placeat exercitationem architecto dignissimos fugiat vero eos 
                    vel, repudiandae sequi deserunt! Deserunt dolorum ipsam eum, 
                    explicabo, odit quas ipsum cum repellendus repellat libero 
                    voluptatem!
                </p>
            </div>
        </div>

        {/*  */}
        <div className='mx-auto pt-4 w-[90%] grid lg:grid-cols-4 grid-cols-1 border-t border-slate-300'>
            <div className='col-span-1'>
                <hr className='border-b-4 border-blue-800 w-[50%]' />
                <div className='w-[50%] flex items-center justify-center my-4'>
                    <FaWeight className='text-[4rem] text-blue-800' />
                </div>
                <h3 className='text-[2rem] font-serif leading-tight text-blue-800'>
                    Our Values
                </h3>
                <div>

                </div>
            </div>
            <div className='col-span-3'>
                <ul className='list-disc list-inside flex flex-col gap-2'>
                    <li>Hardwork</li>
                    <li>Hardwork</li>
                    <li>Hardwork</li>
                    <li>Hardwork</li>
                    <li>Hardwork</li>
                </ul>
            </div>
        </div>


    </section>
    </>
  )
}
