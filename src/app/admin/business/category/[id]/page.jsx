import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import BusinessCategoryEdit from './components/BusinessCategoryEdit'
import { _businessViewAction } from '@/actions/BusinessActions'
import { _categoryListAllAction } from '@/actions/CategoryActions'
import { _businessCategoryByBusinessAction } from '@/actions/BusinessCategoryActions'



export default async function page({ params: {id} }) {
  const [businessData, categoriesData, businessCategoryData] = await Promise.all([
    _businessViewAction(id), 
    _categoryListAllAction(), _businessCategoryByBusinessAction(id)])


  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-[1rem]'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin">Dashboard</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href="/admin/business" >Business List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href={`/admin/business/category/${id}`} className='font-bold '>Edit Business Category</Link></li>
        </ul>
      </div>
     </section>

     <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
        Business Category Edit
        </h1>
        </div>
    </section>

    <section className='w-[100%] pt-3'>
      <div className='w-[90%] mx-auto flex items-center justify-end'>
        <Link href={`/admin/business/${id}`} className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
        View Business
        </Link>
      </div>
    </section>

    <BusinessCategoryEdit
        id={id} 
        dbData={businessData} 
        categoriesData={categoriesData} 
        businessCategoryData={businessCategoryData}
    />

    </>
  )
}
