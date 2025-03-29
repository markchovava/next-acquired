"use client"
import { _businessStatusAction } from '@/actions/BusinessActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


export default function StatusEdit({ id, dbData }) {
  console.log('dbData', dbData)
  const router = useRouter()
  const [isSubmit, setIsSubmit] = useState(false)
  const [errMsg, setErrMsg] = useState({});
  const [data, setData] = useState({
    name: dbData?.data?.name,
    status: dbData?.data?.status,
  })
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
   
  /*  */
  async function postData(){
    if(!data?.status){
      const message = 'Email is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({status: message})
      setIsSubmit(false)
      return;
    }    
    const formData = {
      id: id,
      status: data?.status,
    }
    try{
      const res = await _businessStatusAction(formData);
      if(res?.status == 1) {
        toast.success(res?.message, reactToastifyDark);
        setErrMsg({});
        router.push(`/admin/business/${id}`)
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
    <form 
      action={postData} 
      onSubmit={() => setIsSubmit(true)}
      className='mx-auto w-[79%] pt-[4rem] pb-[5rem]'>
          <h2 className='font-serif text-[2.6rem] mb-6 border-b border-gray-300'>
          {data?.name}
          </h2>
          {/* STATUS */}
          <div className='w-[100%] mb-6'>
              <p className='mb-2 leading-none text-sm font-semibold'>Status:</p>
              <select
                  type='status' 
                  name='status'
                  onChange={handleInput}
                  value={data?.status}
                  className='w-[100%] rounded-xl border border-gray-300 outline-none p-3'>
                    <option value=''>Select an option</option>
                    <option value='Active'>Active</option>
                    <option value='Archived'>Archived</option>
                    <option value='Posted'>Posted</option>
              </select>
              {errMsg?.status &&
              <p className='text-red-600 text-sm'>{errMsg?.status}</p>}
          </div>
                   
          <div className='w-[100%]'>
              <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                  { isSubmit 
                  ? 'Processing' 
                  : 'Submit' }
              </button>
          </div>

      </form>
    </>
  )
}
