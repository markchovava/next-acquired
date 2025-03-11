"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaEye } from 'react-icons/fa6';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { reactToastifyDark } from '@/utils/reactToastify';
import { toast } from 'react-toastify';
import { MainContextState } from '@/contexts/MainContext';
import { _businessMessageDeleteAction, _businessMessageIndexByStatusAction, _businessMessageListAction, 
    _businessMessagePaginateAction,  _businessMessageSearchAction } 
    from '@/actions/BusinessMessageActions';
import { formatDate } from '@/utils/formatDate';



export default function BusinessMessageList({dbData}) {
    console.log(dbData)
    const {businessMessageState, businessMessageDispatch } = MainContextState()
    const [isModal, setIsModal] = useState(false)
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        businessMessageDispatch({type: 'ADD_DATA', payload: {
            items: dbData?.data,
            prevURL: dbData?.links?.prev,
            nextURL: dbData?.links?.next,
            total: dbData?.meta?.total,
        }});
    }, []);

    async function paginateHandler(url) {
        try{
            const res = await _businessMessagePaginateAction(url)
            businessMessageDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
                total: dbData?.meta?.total,
            }});
        } catch (error) {
            console.error(`Error: ${error}`)
        } 
    }
    
    async function getSearchData() {
        if(!search) {
            await getData();
            setIsSearch(false)
            return;
            }
            try{
            const res = await _businessMessageSearchAction(search);
            businessMessageDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links.prev,
                nextURL: res?.links.next,
            }});
            setIsSearch(false);
            } catch (error) {
                console.error(`Error: ${error}`); 
                setIsSearch(false)
            }
    }

    async function getData() {
        try{
            const res = await _businessMessageListAction();
            businessMessageDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links.prev,
                nextURL: res?.links.next,
                total: dbData?.meta?.total,
            }});
            
            } catch (error) {
                console.error(`Error: ${error}`); 
            }
    }
    async function getDataByStatus(e) {
        if(e == 'All') {
            console.log('All is')
            await getData()
            return
        }
        try{
            const res = await _businessMessageIndexByStatusAction(e);
            businessMessageDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links.prev,
                nextURL: res?.links.next,
                total: dbData?.meta?.total,
            }});
            
            } catch (error) {
                console.error(`Error: ${error}`); 
            }
    }

    async function deleteData(id) {
        try{
            const res = await _businessMessageDeleteAction(id);
            if(res.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`); 
        }
    }

    console.log('businessMessageState', businessMessageState)
    
  return (
    <>
    <section className='w-[100%] pt-4'>
        {/* FORM */}
        <div className='mx-auto w-[90%] flex items-center justify-between pb-2'>
           <form
                action={getSearchData} 
                onSubmit={() => setIsSearch(true)} 
                className='border lg:w-[50%] w-[80%] flex items-center justify-start'>
                <input 
                    type='text' 
                    placeholder='Search' 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}  
                    className='outline-none border-r border-gray-300 px-4 py-3 w-[85%]' />
                <button className='hover:scale-125 ease-linear transition-all h-[100%] lg:w-[15%] px-4 py-3 text-center flex items-center justify-center'>
                    { isSearch
                        ? <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span>
                        : <IoSearch className='text-lg' />
                    }
                </button>
            </form>
            <div className='flex items-center justify-end gap-2'>
                {businessMessageState?.total &&
                    <div className='flex items-center justify-start gap-1'>
                        Count: 
                        {businessMessageState?.total}
                    </div>
                }
                <select 
                   name='status'
                   defaultValue='All'
                   onChange={(e) => getDataByStatus(e.target.value)}
                    className='px-5 py-3 border border-gray-300  transition-color ease-linear duration-200'>
                   <option value='All'>All</option>
                   <option value='Read'>Read</option>
                   <option value='Unread'>Unread</option>
                </select>
            </div>
        </div>

        {/* TABLE */}
        <section className="mx-auto w-[90%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[35%] border-r border-white px-3 py-2'>BUSINESS</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>STATUS</div>
                    <div className='w-[30%] border-r border-white px-3 py-2'>DATE</div>
                    <div className='w-[15%] px-3 py-2 text-end'>ACTION</div>
                </div>

                {/* COLUMN */}
                { businessMessageState?.items?.length > 0 ?
                    businessMessageState?.items?.map((i, key) => (
                    <div key={key} className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                        <div className='w-[35%] border-r border-gray-300 px-3 py-2'>{i?.name}</div>
                        <div className='w-[20%] border-r border-gray-300 px-3 py-2'>
                            <span className={`${i?.status == 'Read' ? 'bg-green-200' : 'bg-blue-200'} px-2 py-1 rounded-lg`}>
                                {i?.status}
                            </span>
                        </div>
                        <div className='w-[30%] border-r border-gray-300 px-3 py-2'>
                            {formatDate(i?.updated_at)}
                        </div>
                        <div className='w-[15%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                            <Link title='View' href={`/admin/message/business/${i?.id}`}> 
                            <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                            </Link> 
                            <button title='Delete' onClick={() => deleteData(i?.id)}> 
                                <MdDeleteForever
                                className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                            </button> 
                        </div>
                    </div>
                ))
                : 
                    <section className='w-[100%] py-6'>
                        <h3 className='text-[3rem] font-light'>No Data Available at the moment.</h3>
                        <p>Click 
                            <span className='cursor-pointer underline hover:no-underline mx-1' 
                                onClick={() => setIsModal(!isModal)}>
                                here
                            </span> 
                            to add.
                        </p>
                    </section>
                }
               
            </section>
        </section>

        {/* PAGINATION */}
        <section className='w-[90%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
            {/* PREVIOUS */}
            {businessMessageState?.prevURL &&
            <button
                onClick={() => paginateHandler(businessMessageState.prevURL)}
                className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
                Prev
            </button>
            }
            {/* NEXT */}
            {businessMessageState?.nextURL &&
            <button 
                onClick={() => paginateHandler(businessMessageState.nextURL)}
                className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                <span>Next</span>
                <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
            </button>
            }

        </section>

    </section>
    </>
  )
}
