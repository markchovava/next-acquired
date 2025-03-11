import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import UserList from './_components/UserList'
import { _userListAction } from '@/actions/UserActions'
import { _membershipListAllAction } from '@/actions/MembershipActions'
import { _roleListAllAction } from '@/actions/RoleActions'



export default async function page() {
  const [ usersData, membershipsData, rolesData ] = await Promise.all([
    _userListAction(), 
    _membershipListAllAction(),
    _roleListAllAction()
  ]);

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
          <li><Link href="/admin/user" className='font-bold '>User List</Link></li>
        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
        User List
        </h1>
        </div>
    </section>

    <UserList 
      dbData={usersData} 
      membershipsData={membershipsData} 
      rolesData={rolesData}
    />
    </>
  )
}
