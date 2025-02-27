import Link from 'next/link'
import React from 'react'
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';


export default function page() {
  return (
    <>
    <section className='w-full py-[5rem] bg-gray-800'>

      <div className='mx-auto lg:w-[40%] w-[80%] bg-white overflow-hidden rounded-2xl p-8'>
        
          <h3 className='text-center font-serif text-3xl mb-4'>Login</h3>
          <p className='text-center text-xl mb-4'>Not a member yet? 
            <Link 
              href="/register" 
              className="ml-2 text-blue-700 underline ease-linear transition-all duration-100 hover:no-underline">
              Sign up
            </Link></p>
          <button className='mx-auto mb-6 hover:bg-gray-50 hover:drop-shadow ease-linear duration-100 transition-all flex items-center justify-center gap-5 border border-slate-300 w-[100%] py-4 bg-white rounded-lg'>
            <FaGoogle className='text-red-600' />
            Login with Google
          </button>
          <button className='mx-auto mb-6 hover:bg-gray-50 hover:drop-shadow ease-linear duration-100 transition-all flex items-center justify-center gap-5 border border-slate-300 w-[100%] py-4 bg-white rounded-lg'>
            <FaLinkedinIn className='text-blue-600 text-lg' />
            Login with LinkedIn
          </button>
          <p className='text-center font-light mb-6'>Log in using your email address.</p>
          {/* EMAIL */}
          <input 
            type='text' 
            placeholder='Enter Email here...' 
            className='mb-6 w-[100%] mx-auto border border-gray-300 rounded-lg py-4 px-4 outline-none hover:outline-1 hover:outline-gray-300' />
          {/* PASSWORD */}
          <input 
            type='password' 
            placeholder='Enter Password here...' 
            className='mb-6 w-[100%] mx-auto border border-gray-300 rounded-lg py-4 px-4 outline-none hover:outline-1 hover:outline-gray-300' />
          {/* Confirm PASSWORD */}
          <input 
            type='password' 
            placeholder='Enter Confirm Password here...' 
            className='mb-6 w-[100%] mx-auto border border-gray-300 rounded-lg py-4 px-4 outline-none hover:outline-1 hover:outline-gray-300' />
          <button 
            type='submit' 
            className='w-[100%] mb-6 group flex items-center justify-center gap-3 py-4 px-12 rounded-lg hover:drop-shadow-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white'>
            Login
            <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-2" />
          </button>

      </div>

    </section>
    </>
  )
}
