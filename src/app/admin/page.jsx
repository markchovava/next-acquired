import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { MdDirectionsSubwayFilled } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";

export default function page() {

  return (
    <>
    <section className='w-[100%]'>
      <div className='mx-auto w-[90%] my-[1rem]'>
        {/* HEADER */}
        <ul className='flex items-center justify-start gap-2 text-sm'>
          <li><Link href="#">Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link 
            href="/admin" 
            className='font-bold '>
              Dashboard
            </Link>
          </li>

        </ul>
      </div>
    </section>

    <section className='w-[100%]'>
      <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300 mb-12'>
          Dashboard
        </h1>

        <section className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-[5rem]'> 
          {/* APPINFO */}
          <Link href="/admin/app-info">
            <div className='border border-stone-300 text-stone-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaInfoCircle className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                App Info
              </h3>
            </div>
          </Link>
          {/* USER */}
          <Link href="/admin/user">
            <div className='border border-blue-300 text-blue-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaUser className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Users
              </h3>
            </div>
          </Link>
          {/* PARTNERS */}
          <Link href="/admin/partner">
            <div className='border border-blue-300 text-green-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaRegHandshake className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Partners
              </h3>
            </div>
          </Link>
          {/* ROLES */}
          <Link href="/admin/role">
            <div className='border border-purple-300 text-purple-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <MdTaskAlt className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Roles
              </h3>
            </div>
          </Link>
          {/* FAQS */}
          <Link href="/admin/faq">
            <div className='border border-cyan-300 text-cyan-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaQuestion className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                FAQs
              </h3>
            </div>
          </Link>
          {/* BUSINESS */}
          <Link href="/admin/business">
            <div className='border border-pink-300 text-pink-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <MdBusinessCenter className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Business
              </h3>
            </div>
          </Link>
          {/* CITIES */}
          <Link href="/admin/city">
            <div className='border border-emerald-300 text-emerald-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <PiCityBold className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Cities
              </h3>
            </div>
          </Link>
          {/* PROVINCES */}
          <Link href="/admin/province">
            <div className='border border-lime-300 text-lime-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <FaMapLocationDot className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Provinces
              </h3>
            </div>
          </Link>
          {/* CATEGORY */}
          <Link href="/admin/category">
            <div className='border border-red-300 text-red-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <BiCategoryAlt className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Categories
              </h3>
            </div>
          </Link>
          {/* MEMBERSHIPS */}
          <Link href="/admin/membership">
            <div className='border border-gray-300 text-gray-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <MdGroups className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Memberships
              </h3>
            </div>
          </Link>
          {/* SUBSCRIPTION */}
          <Link href="/admin/subscription">
            <div className='border border-green-300 text-green-400 bg-white hover:drop-shadow-lg py-[1.5rem] transition-all ease-linear duration-200'>
              <div className='flex items-center justify-center mb-4'>
                <MdDirectionsSubwayFilled className='text-[6rem] ' />
              </div>
              <h3 className='text-lg text-center flex justify-center items-center'>
                Subscriptions
              </h3>
            </div>
          </Link>
        </section>

      </div>
    </section>
    </>
  )
}
