"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { CiSearch } from "react-icons/ci";
import { baseURL } from '@/apis/BaseURL';
import Image from 'next/image';
import { MainContextState } from '@/contexts/MainContext';
import { businessListAction, businessPaginateAction, businessSearchCityCategoryAction, businessSortListAction } from '@/actions/BusinessActions';



export default function Home({dbData, provincesData, citiesData, categoriesData}) {
    const {businessState, businessDispatch,} = MainContextState();
    const [data, setData] = useState({
        category_id: '',
        city_id: '',
        search: '',
    });
    const [provinces, setProvinces] = useState(provincesData?.data);
    const [cities, setCities] = useState(citiesData?.data);
    const [categories, setCategories] = useState(categoriesData?.data);
    const [isSearch, setIsSearch] = useState(false);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        businessDispatch({type: 'ADD_DATA', payload: {
            items: dbData?.data,
            prevURL: dbData?.links?.prev,
            nextURL: dbData?.links?.next,
            total: dbData?.meta?.total,
        }});
    }, []);

    async function sortHandler(sort) {
        if(sort == ''){
            await getData();
            return;
        }
        try{
            const res = await businessSortListAction(sort)
            businessDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
                total: res?.meta?.total,
            }});
            return;
        } catch (error) {
            console.error(`Error: ${error}`)
        } 
    }

    async function paginateHandler(url) {
        try{
            const res = await businessPaginateAction(url)
            businessDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
                total: res?.meta?.total,
            }});
        } catch (error) {
            console.error(`Error: ${error}`)
        } 
    }

    async function getSearchData() { 
        if(!data?.search && !data?.city_id && !data?.category_id) {
            await getData();
            setIsSearch(false)
            return;
        }
        const city_id = data?.city_id ;
        const search = data?.search;
        const category_id = data?.category_id;
        try{
            const res = await businessSearchCityCategoryAction(city_id, category_id, search);
            console.log('res', res)
            businessDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
                total: res?.meta?.total,
            }});
            setData({category_id: '', city_id: '', search: ''})
            setIsSearch(false);
        } catch (error) {
            console.error(`Error: ${error}`); 
            setIsSearch(false)
        } 
    }

    async function getData() {
        try{
            const res = await businessListAction();
            businessDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
                total: res?.meta?.total,
            }}); 
            } catch (error) {
                console.error(`Error: ${error}`); 
            }
    }

  return (
    <>
        
    {/* HEADER */}
    <section className='w-full bg-gray-100'>
        <form 
            action={getSearchData} 
            onSubmit={() => setIsSearch(true) } 
            className='mx-auto w-[90%] flex lg:flex-row flex-col items-center justify-start gap-6 py-[4rem]'>
            {/* BUSINESS */}
            <div className='flex-1 w-[100%]'>
                <p className='text-sm mb-1'>Name:</p>
                <input
                    name='search'
                    onChange={handleInput}
                    value={data?.search}
                    placeholder='Business Name' 
                    className='w-[100%] rounded-lg border border-slate-300 outline-none p-4' />
                    
            </div>
            {/* CITY */}
            <div className='flex-1 w-[100%]'>
                <p className='text-sm mb-1'>City:</p>
                <select 
                    name='city_id'
                    defaultValue={data?.city_id}
                    onChange={handleInput}
                    className='w-[100%] rounded-lg border border-slate-300 outline-none p-4'>
                    <option value="">Select an option.</option>
                {cities &&
                    cities?.map((i, key) => (
                        <option 
                            key={key} 
                            value={i?.id} 
                            /* selected={i?.id == data?.city_id && "selected"} */
                            >
                            {i?.name}
                        </option>
                    ))
                }
                </select>
            </div>
            {/* CATEGORY */}
            <div className='flex-1 w-[100%]'>
                <p className='text-sm mb-1'>Category:</p>
                <select 
                    name='category_id'
                    defaultValue={data?.category_id}
                    onChange={handleInput}
                    className='w-[100%] rounded-lg border border-slate-300 outline-none p-4'>
                    <option value="">Select an option.</option>
                    {categories &&
                        categories?.map((a, key) => (
                            <option 
                                key={key} 
                                value={a?.id} 
                                /* selected={a?.id == data?.category_id && 'selected'} */
                                >
                                {a?.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            {/* SEARCH */}
            <div className='flex-1 w-[100%] pt-2 lg:pt-6'>
                <button 
                type='submit' 
                className='flex justify-center items-center gap-3 bg-slate-900 hover:drop-shadow-lg text-white py-4 rounded-lg w-[100%]'>
                { isSearch ?  
                    <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-white'></span>
                    : <CiSearch className='text-lg' />  }
                    Search 
                </button>
            </div>
        </form>
    </section>

    {/* SORT INFO */}
    <section className='mx-auto w-[90%] flex justify-between items-center pt-[3rem]'>
        <div>
            <h2 className='text-[2.6rem] font-serif leading-tight'>Businesses for sale</h2>
            {businessState?.total != null &&
                <p className='font-light'>Total of {businessState?.total} results</p>
            }
        </div>
        <div className=''>
            <select
                name='sort'
                onChange={(e) => sortHandler(e.target.value)}
                className='border rounded-2xl p-4 outline-none'>
                <option value="">Select an option.</option>
                <option value="AscByName">ASC By Name</option>
                <option value="DescByName">DESC By Name</option>
                <option value="AscByPrice">ASC By Price</option>
                <option value="DescByPrice">DESC By Price</option>
                <option value="AscByDate">ASC By Date</option>
                <option value="DescByDate">DESC By Date</option>
            </select>
        </div>
    </section>

    {/* LIST */}
    {businessState?.items?.length > 0 ? 
    <section className='mx-auto w-[90%] grid lg:grid-cols-3 grid-cols-1 gap-12 pt-[2rem] pb-[3rem]'>
        { businessState?.items?.length > 0 &&
            businessState?.items?.map((i) =>
            <div key={i?.id} className='flex-1 bg-white drop-shadow hover:drop-shadow-lg transition-all ease-linear duration-100 p-6 rounded-xl'>
                <div className='rounded-xl w-[100%] bg-slate-200 aspect-[4/3] overflow-hidden mb-6'>
                    <Image
                        /* fill */
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover' }} 
                        src={i?.image ? baseURL + i?.image : './assets/img/no-img.png'} 
                        alt={i?.name}
                    /> 
                </div>
                {/*  */}
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-span-2'>    
                        {  i?.categories && 
                            i?.categories.map((a) => (
                            <span
                                key={a?.id}  
                                className='rounded-lg py-3 px-2 bg-amber-400 mr-2'>
                                {a?.name}
                            </span>
                        ))} 
                    </div>
                    <div className='col-span-1 flex items-center justify-end'>
                        <span className='text-xl font-serif'>
                            {i?.price ? '$' + i?.price : 'Undisclosed'}
                        </span>
                    </div>
                </div>
                {/*  */}
                <h3 className='my-10 font-serif text-[2rem] leading-tight'>{i?.name}</h3>
                {/*  */}
                <div className='flex justify-between items-center'>
                    <p
                        className='text-xl font-serif'>
                        { i?.city?.name ? i?.city?.name : 'Undisclosed' }
                    </p>
                    <Link 
                        href={`/business/${i?.id}`} 
                        className='group rounded-lg px-6 py-3 bg-slate-900 text-white hover:drop-shadow-md flex items-center justify-center gap-2 ease-linear transition-all duration-100'>
                        Details
                        <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        )}
    </section>
    :
    <section className='mx-auto w-[90%] pt-[2rem] pb-[3rem]'>
        <h3 className='w-[100%] text-[3rem] font-light'>No Data Available at the moment.</h3>    
    </section>
    }


    {/* PAGINATION */}
    <section className='w-[90%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
        {/* PREVIOUS */}
        {businessState?.prevURL &&
        <button
            onClick={() => paginateHandler(businessState?.prevURL)}
            className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
            <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
            Prev
        </button>
        }
        {/* NEXT */}
        {businessState?.nextURL &&
        <button 
            onClick={() => paginateHandler(businessState?.nextURL)}
            className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
            <span>Next</span>
            <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
        </button>
        }
    </section>
        

    </>
  )
}
