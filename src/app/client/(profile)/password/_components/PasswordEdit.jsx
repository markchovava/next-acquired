"use client"
import { _passwordAction } from '@/actions/AuthActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';



export default function PasswordEdit() {
  const router = useRouter()
  const [data, setData] = useState({ 
    password: '',
    password_confirm: '',
  })
  const [isSubmit, setIsSubmit] = useState(false)
  const [errMsg, setErrMsg] = useState({});
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value })
  }

  async function postData(){
    if(!data?.password){
      const message = 'Password is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({password: message})
      setIsSubmit(false)
      return;
    }
    if(!data?.password_confirm){
      const message = 'Password Confirmation is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({password_confirm: message})
      setIsSubmit(false)
      return;
    }
    if(data?.password != data?.password_confirm){
      const message = 'Password does not match.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({password_confirm: message})
      setIsSubmit(false)
      return;
    }
    const formData = {
      password: data?.password,
    }
    try{
      const res = await _passwordAction(formData);
      if(res.status == 1) {
          toast.success(res.message, reactToastifyDark);
          setErrMsg({});
          router.push('/client/profile')
          setIsSubmit(false)
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
    <section className='w-[100%]'>
      <form 
      action={postData} 
      onSubmit={() => setIsSubmit(true)}
      className='mx-auto w-[79%] pt-[4rem] pb-[5rem]'>
          <h2 className='font-serif text-[2.6rem] mb-6 text-center border-b border-gray-300'>
          Update Password
          </h2>
          {/* PASSWORD */}
          <div className='w-[100%] mb-6'>
              <p className='mb-2 leading-none text-sm font-semibold'>Password:</p>
              <input 
                  type='password' 
                  name='password'
                  onChange={handleInput}
                  value={data?.password}
                  placeholder='Password' 
                  className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
              {errMsg?.password &&
              <p className='text-red-600 text-sm'>{errMsg?.password}</p>}
          </div>
          {/* CONFIRM PASSWORD */}
          <div className='w-[100%] mb-6'>
              <p className='mb-2 leading-none text-sm font-semibold'>Confirm Password:</p>
              <input 
                  type='password' 
                  name='password_confirm'
                  onChange={handleInput}
                  value={data?.password_confirm}
                  placeholder='Confirm Password' 
                  className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
              {errMsg?.password_confirm &&
              <p className='text-red-600 text-sm'>{errMsg?.password_confirm}</p>}
          </div>
          
          <div className='w-[100%]'>
              <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                  { isSubmit 
                  ? 'Processing' 
                  : 'Submit' }
              </button>
          </div>

      </form>
    </section>
    </>
  )
}
