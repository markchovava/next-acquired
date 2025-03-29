"use client"
import { _emailAction, _passwordAction } from '@/actions/AuthActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';



export default function EmailEdit({ dbData }) {
  const router = useRouter()
  const [data, setData] = useState({ 
    email: dbData?.data?.email,
  })
  const [isSubmit, setIsSubmit] = useState(false)
  const [errMsg, setErrMsg] = useState({});
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value })
  }
  /*  */
  async function postData(){
    if(!data?.email){
      const message = 'Email is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({email: message})
      setIsSubmit(false)
      return;
    }    
    const formData = {
      email: data?.email
    }
    try{
      const res = await _emailAction(formData);
      if(res?.status == 0) {
          toast.success(res?.message, reactToastifyDark);
          setErrMsg({});
          setIsSubmit(false);
          return;
        }
      if(res?.status == 1) {
          toast.success(res?.message, reactToastifyDark);
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
          Update Email
          </h2>
          {/* EMAIL */}
          <div className='w-[100%] mb-6'>
              <p className='mb-2 leading-none text-sm font-semibold'>Email:</p>
              <input 
                  type='name' 
                  name='email'
                  onChange={handleInput}
                  value={data?.email}
                  placeholder='Password' 
                  className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
              {errMsg?.email &&
              <p className='text-red-600 text-sm'>{errMsg?.email}</p>}
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
