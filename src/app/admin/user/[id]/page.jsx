import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import UserView from './_components/UserView'
import { _userViewAction } from '@/actions/UserActions'
import { _membershipListAllAction } from '@/actions/MembershipActions'
import { _roleListAllAction } from '@/actions/RoleActions'




export default async function page({ params: {id} }) {
  const [userData, membershipsData, rolesData] = await Promise.all([
                                                    _userViewAction(id),
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
          <li><Link href="/admin/user">User List</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href={`/admin/user/${id}`} className='font-bold '>User</Link></li>

        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          User Information
        </h1>
        </div>
    </section>


    <UserView 
        id={id} 
        dbData={userData} 
        membershipsData={membershipsData} 
        rolesData={rolesData} 
    />



    </>
  )
}

