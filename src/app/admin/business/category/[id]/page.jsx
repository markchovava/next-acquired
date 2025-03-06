import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import CategoryEdit from './components/CategoryEdit'

export default function page({params: {id} }) {
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

    <CategoryEdit />

    </>
  )
}
