"use client";
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FiDelete } from "react-icons/fi";
import { _businessCategoryByBusinessAction, _businessCategoryDeleteAction, _businessCategoryStoreAction } from '@/actions/BusinessCategoryActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { toast } from 'react-toastify';



export default function BusinessCategoryEdit({id, dbData, categoriesData, businessCategoryData}) {
  const [data, setData] = useState({
    business_id: null,
    category_id: null,
  });
  const [isAdd, setIsAdd] = useState(false);
  const [business, setBusiness] = useState(dbData?.data);
  const [categories, setCategories] = useState(categoriesData?.data);
  const [businessCategories, setBusinessCategories] = useState(businessCategoryData?.data);
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  async function getData() {
    try{
        const res = await _businessCategoryByBusinessAction(id)
        setBusinessCategories(res?.data)
    } catch (error) {
        console.error(`Error: ${error}`); 
    }
  }

  async function deleteData(uid) {
    try{
        const res = await _businessCategoryDeleteAction(uid)
        console.log('res', res)
        if(res.status == 1) {
          await getData();
          toast.success(res?.message, reactToastifyDark);
          return;
      }
    } catch (error) {
        console.error(`Error: ${error}`); 
    }
  }


  async function postData() {
    if(!data?.category_id){
        const message = "Category is required."
        toast.warn(message, reactToastifyDark)
        setIsAdd(false)
        return
    }
    const formData = {
      business_id: id,
      category_id: data?.category_id
    }
    try{
        const res = await _businessCategoryStoreAction(formData);
        if(res.status == 1) {
            await getData();
            setData({});
            toast.success(res?.message, reactToastifyDark);
            setIsAdd(false)
            return;
        }
    } catch (error) {
          console.error(`Error: ${error}`);
          setIsAdd(false)
          return;
    }
  }

  
  
  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] pt-[4rem] pb-[5rem]'>
        {/* Name */}
        <div className='mx-auto w-[100%] mb-6'>
          <p className='mb-1 leading-tight'>Name:</p>
          <h4 className='text-3xl font-light leading-tight'>{business?.name}</h4>
        </div>

        {/* Add Category */}
        <form action={postData} onSubmit={() => setIsAdd(true)} className='mb-4'>
          <p className='mb-1 leading-tight'>Add Category:</p>
          <div className='w-[100%] flex items-center justify-start'>
            <select 
              name='category_id' 
              onChange={handleInput}
              className='w-[85%] h-[4rem] bg-white drop-shadow rounded-l-2xl px-4 py-4 outline-none border-y border-l border-slate-300'>
              <option value="">Select a Category.</option>
              {categories?.length > 0 &&
                categories.map((i, key) => (
                  <option key={key} value={i?.id}>{i?.name}</option>
                ))
              }
            </select>
            <button type='submit'
              className='w-[15%] h-[4rem] group bg-white drop-shadow rounded-r-2xl flex items-center justify-center  border border-slate-300 px-4 '>
              <IoMdAdd className='text-2xl group-hover:text-blue-600 group-hover:scale-125 ease-linear duration-150' />
            </button>
          </div>
        </form>

        <section className='w-[100%]'>
          {/* ITEM */}
          {businessCategories && businessCategories.map((i, key) => (
            <div key={key} className='border border-slate-300 flex items-center'>
              <div className='w-[85%] border-r border-slate-300 px-4 py-3'>
                {i?.category?.name}
              </div>
              <div className='w-[15%] px-4 py-3 flex items-center justify-center'>
                <button onClick={() => deleteData(i?.id)} className='group'>
                  <FiDelete className='group-hover:scale-125 group-hover:text-red-600 transition-all ease-linear text-xl' />
                </button>
              </div>
            </div>

          ))}
          

        </section>


      </div>
    </section>
    </>
  )
}
