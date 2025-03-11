"use client";
import React, { useState } from 'react'
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link'
import { reactToastifyDark } from '@/utils/reactToastify';
import { toast } from 'react-toastify';
import { registerAction } from '@/actions/AuthActions';
import { useRouter } from 'next/navigation';



export default function RegisterEdit() {
    const router = useRouter();
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errMsg, setErrMsg] = useState({});
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    async function postData(){
        if(!data.email) {
            const message = 'Email is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({email: message});
            setIsSubmit(false);
            return;
        }
        if(!data.password) {
            const message = 'Password is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({password: message});
            setIsSubmit(false);
            return;
        }
        if(!data.password_confirm) {
            const message = 'Password Confirmation is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({password_confirm: message});
            setIsSubmit(false);
            return;
        }
        if(data.password != data.password_confirm) {
            const message = 'Password does not match.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({password: message});
            setIsSubmit(false);
            return;
        }
        const formData = {
            email: data?.email,
            password: data?.password,
        }
        try{
            const res = await registerAction(formData)
            if(res.status == 1) {
                toast.success(res?.message, reactToastifyDark);
                setIsSubmit(false);
                setErrMsg({});
                router.push('/membership/login');
                setIsSubmit(false);
            }
            if(res.status == 0) {
                toast.warn(res?.message, reactToastifyDark);
                setErrMsg({});
                setIsSubmit(false);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false); 
        }

    }



  return (
    <>
    <div className='mx-auto lg:w-[40%] w-[80%] bg-white overflow-hidden rounded-2xl p-8'>

        <form action={postData} onSubmit={() => setIsSubmit(true)}>
            <h3 className='text-center font-serif text-3xl mb-4'>Register</h3>
            <p className='text-center text-xl mb-4'>Already registered? 
            <Link 
                href="/login" 
                className="ml-2 text-blue-700 underline ease-linear transition-all duration-100 hover:no-underline">
                Login
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
            <div className='w-[100%] mb-6 '>
                <input 
                    type='text' 
                    name='email'
                    value={data?.email}
                    onChange={handleInput}
                    placeholder='Enter Email here...' 
                    className='w-[100%] mx-auto border border-gray-300 rounded-lg py-4 px-4 outline-none hover:outline-1 hover:outline-gray-300' />
                { errMsg.email &&
                  <p className='text-red-600 text-sm'>{errMsg?.email}</p> }
            </div>
            {/* PASSWORD */}
            <div className='w-[100%] mb-6 '>
                <input 
                    type='password' 
                    name='password'
                    value={data?.password}
                    onChange={handleInput}
                    placeholder='Enter Password here...' 
                    className='w-[100%] mx-auto border border-gray-300 rounded-lg py-4 px-4 outline-none hover:outline-1 hover:outline-gray-300' />
                { errMsg.password &&
                  <p className='text-red-600 text-sm'>{errMsg?.password}</p> }
            </div>
            {/* PASSWORD CONFIRMATION */}
            <div className='w-[100%] mb-6 '>
                <input 
                    type='password' 
                    name='password_confirm'
                    value={data?.password_confirm}
                    onChange={handleInput}
                    placeholder='Enter Password Confirmation here...' 
                    className='w-[100%] mx-auto border border-gray-300 rounded-lg py-4 px-4 outline-none hover:outline-1 hover:outline-gray-300' />
                { errMsg.password_confirm &&
                  <p className='text-red-600 text-sm'>{errMsg?.password_confirm}</p> }
            </div>
            <button 
                type='submit' 
                className='w-[100%] mb-6 group flex items-center justify-center gap-3 py-4 px-12 rounded-lg hover:drop-shadow-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white'>
                { isSubmit ? 
                    'Processing' 
                : 
                <>
                    Submit
                    <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-2" />
                </>
                }
            </button>
        </form>
        

    </div>
    </>
  )
}
