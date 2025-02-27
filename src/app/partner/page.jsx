import React from 'react'

export default function page() {
  return (
    <>
    <section className='w-[100%] h-[30rem] bg-gray-900 text-white'>
        <div className='mx-auto w-[90%] h-[100%] flex items-center justify-start'>
            <div className='w-[50%] h-[100%] flex flex-col items-center justify-center gap-4'>
                <h1 className='font-serif text-[3rem] leading-tight'>Why Partner With BizTrade?</h1>
                <p className='font-light'>
                We’re not just in the business of finding your dream business; 
                we’re in the business of helping you get a deal done smartly! 
                With our zesty mix of resources, education, and tech, we’re on 
                a mission to make business scouting less of a treasure hunt and 
                more of a treasure map where X marks the spot. Partner with us, 
                and let’s make success guaranteed.
                </p>
            </div>
            <div className='w-[50%] h-[100%] flex items-center justify-center'>
                <div className='bg-slate-500 rounded-xl w-[70%] aspect-[4/3]'></div>
            </div>
        </div>
    </section>

    <section className='w-[100%]'>
        <div className='mx-auto w-[90%]'>
            <h1 className='mt-[4rem] mb-[2rem] font-serif font-extralight text-center text-[2.5rem]'>
                Our Partners
            </h1>
            <div className='grid grid-cols-6 gap-8 mb-[5rem]'>
            {[...Array(18)].map((key, i) => (
                    <div className='bg-gray-200 transition-all ease-linear duration-100 rounded-full w-[90%] aspect-square hover:bg-gray-400'></div>
            ))}
            </div>
        </div>
    </section>
    </>
  )
}
