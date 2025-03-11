"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaEye } from 'react-icons/fa6';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import PartnerAddModal from './PartnerAddModal';
import { AdminContextState } from '@/contexts/AdminContext';
import { _partnerDeleteAction, _partnerListAction, _partnerSearchAction } from '@/actions/PartnerActions';
import { IoSearch } from 'react-icons/io5';
import { reactToastifyDark } from '@/utils/reactToastify';
import { toast } from 'react-toastify';



export default function PartnerList({ dbData }) {
    const {partnerState, partnerDispatch } = AdminContextState()
    const [isModal, setIsModal] = useState(false)
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        partnerDispatch({type: 'ADD_DATA', payload: {
            items: dbData?.data,
            prevURL: dbData?.links?.prev,
            nextURL: dbData?.links?.next,
        }});
    }, []);

    async function paginateHandler(url) {
        try{
            const res = await _partnerPaginateAction(url)
            partnerDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
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
            const res = await _partnerSearchAction(search);
            partnerDispatch({type: 'ADD_DATA', payload: {
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
            const res = await _partnerListAction();
            partnerDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links.prev,
                nextURL: res?.links.next,
            }});
            
            } catch (error) {
                console.error(`Error: ${error}`); 
            }
    }

    async function deleteData(id) {
        try{
            const res = await _partnerDeleteAction(id);
            if(res.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`); 
        }
    }

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
            <div>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='px-5 py-3 border border-gray-300 hover:bg-gray-900 hover:text-white transition-color ease-linear duration-200'>
                    Add
                </button>
            </div>
        </div>

        {/* TABLE */}
        <section className="mx-auto w-[90%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[45%] border-r border-white px-3 py-2'>NAME</div>
                    <div className='w-[40%] border-r border-white px-3 py-2'>AUTHOR</div>
                    <div className='w-[15%] px-3 py-2 text-end'>ACTION</div>
                </div>

                {/* COLUMN */}
                { partnerState?.items?.length > 0 ?
                    partnerState?.items?.map((i, key) => (
                    <div key={key} className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                        <div className='w-[45%] border-r border-gray-300 px-3 py-2'>{i?.name}</div>
                        <div className='w-[40%] border-r border-gray-300 px-3 py-2'>
                            {i?.user?.name ? i?.user?.name : (i?.user?.email ? i?.user?.email : 'Not Added.')}
                        </div>
                        <div className='w-[15%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                            <Link title='View' href={`/admin/partner/${i?.id}`}> 
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
            {partnerState?.prevURL &&
            <button
                onClick={() => paginateHandler(partnerState.prevURL)}
                className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
                Prev
            </button>
            }
            {/* NEXT */}
            {partnerState?.nextURL &&
            <button 
                onClick={() => paginateHandler(partnerState.nextURL)}
                className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                <span>Next</span>
                <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
            </button>
            }

        </section>


    </section>

    <PartnerAddModal 
        getData={getData}  
        isModal={isModal} 
        setIsModal={setIsModal} 
    />


    </>
  )
}
