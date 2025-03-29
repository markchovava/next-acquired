import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import BusinessList from './_components/BusinessList';
import { _businessListAction } from '@/actions/BusinessActions';
import { _cityListAllAction } from '@/actions/CityActions';
import { _provinceListAllAction } from '@/actions/ProvinceActions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientRedirect from '@/app/_components/ClientRedirect';


export default async function page() {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('ACQUIREDZW_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
  const [businessData, citiesData, provincesData, ] = await Promise.all([
        _businessListAction(), _cityListAllAction(), _provinceListAllAction(), ]);


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
          <li><Link href="/admin/business" className='font-bold '>Business List</Link></li>
        </ul>
      </div>
     </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
        Business List
        </h1>
        </div>
    </section>

    <BusinessList 
        dbData={businessData} 
        citiesData={citiesData} 
        provincesData={provincesData}
    />


    </>
  )
}
