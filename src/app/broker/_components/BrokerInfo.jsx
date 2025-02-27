"use client";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { SiPrivateinternetaccess } from "react-icons/si";
import { GrGrow } from "react-icons/gr";
import { FaTools } from "react-icons/fa";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function BrokerInfo() {
  return (
    <>
    <section className='w-[100%] '>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        effect
        pagination={{
          clickable: true,
        }}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        className='text-white'
        slidesPerView={1} >
        
       
        <SwiperSlide className='bg-slate-700 w-[100vw] lg:aspect-[5/2] aspect-[5/4] overflow-hidden'>
          {/*  */}
          <section className='absolute z-10 w-[100%] h-[100%] flex items-center lg:justify-end'>
              <div className='lg:w-[50%] hidden lg:block h-[100%] bg-green-400 rounded-l-[25%]'></div>
          </section>
          {/*  */}
          <section className='absolute left-[5%] right-[5%] z-20 w-[90%] h-[100%] mx-auto flex items-center justify-start'>
            
            <div className='lg:w-[50%] w-[80%] h-[100%] flex items-start justify-center flex-col'>
                <h1 className='font-serif lg:text-[3rem] text-[2rem] leading-tight lg:mb-4 mb-2'>
                  Need Expert Help? <br />
                  Invite a Broker Today!
                </h1>
                <p className='text-lg font-light w-[90%] lg:mb-8 mb-4'>
                  Get professional guidance in buying or selling a business. 
                  Invite a broker to help you navigate the process and 
                  close the best deal.
                </p>
                <div className='lg:w-[70%] w-[100%] flex flex-row lg:flex-col lg:gap-6 gap-4'>
                  <Link 
                    href="#" 
                    className='text-sm lg:text-lg flex items-center justify-center lg:py-4 py-3 w-[100%] border-2 border-white drop-shadow hover:bg-gradient-to-br hover:border-gray-200 hover:bg-gray-100 hover:text-black hover:drop-shadow-lg rounded-full'>
                    Partner with BizTrade
                  </Link>
                  <Link 
                    href="#" 
                    className='text-sm lg:text-lg flex items-center justify-center lg:py-5 py-4 w-[100%] bg-gradient-to-br from-green-600 to-green-800 drop-shadow hover:bg-gradient-to-br hover:from-green-600 hover:to-cyan-800 hover:drop-shadow-lg rounded-full'>
                    Invite a broker
                  </Link>
                </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className='bg-rose-700 w-[100vw] lg:aspect-[5/2] aspect-[5/4] overflow-hidden'>
          {/*  */}
          <section className='absolute z-10 w-[100%] h-[100%] flex items-center lg:justify-end'>
              <div className='lg:w-[50%] hidden lg:block h-[100%] bg-yellow-400 rounded-l-[25%]'></div>
          </section>
          {/*  */}
          <section className='absolute left-[5%] right-[5%] z-20 w-[90%] h-[100%] mx-auto flex items-center justify-start'>
            
            <div className='lg:w-[50%] w-[80%] h-[100%] flex items-start justify-center flex-col'>
                <h1 className='font-serif lg:text-[3rem] text-[2rem] leading-tight lg:mb-4 mb-2'>
                  Need Expert Help? <br />
                  Invite a Broker Today!
                </h1>
                <p className='text-lg font-light w-[90%] lg:mb-8 mb-4'>
                  Get professional guidance in buying or selling a business. 
                  Invite a broker to help you navigate the process and 
                  close the best deal.
                </p>
                <div className='lg:w-[70%] w-[100%] flex flex-row lg:flex-col lg:gap-6 gap-4'>
                  <Link 
                    href="#" 
                    className='text-sm lg:text-lg flex items-center justify-center lg:py-4 py-3 w-[100%] border-2 border-white drop-shadow hover:bg-gradient-to-br hover:border-gray-200 hover:bg-gray-100 hover:text-black hover:drop-shadow-lg rounded-full'>
                    Partner with BizTrade
                  </Link>
                  <Link 
                    href="#" 
                    className='text-sm lg:text-lg flex items-center justify-center lg:py-5 py-4 w-[100%] bg-gradient-to-br from-yellow-600 to-rose-600 drop-shadow hover:bg-gradient-to-br hover:from-yellow-600 hover:to-rose-700 hover:drop-shadow-lg rounded-full'>
                    Invite a broker
                  </Link>
                </div>
            </div>
          </section>
        </SwiperSlide>
       
      </Swiper>
    </section>

    <section className='w-[100%]'>
      <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[2.5rem] text-center leading-tight mt-[4rem] mb-6'>
          Why Brokers Choose BizTrade?
        </h1>
      </div>
      <div className='w-[90%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-12 px-[2rem] mb-[5rem]'>
        {/*  */}
        <div className='flex-1 w-[100%] drop-shadow rounded-xl overflow-hidden bg-white'>
          <div className='w-[100%] aspect-[5/3] bg-pink-50 flex items-center justify-center'>
            <SiPrivateinternetaccess className='text-[7rem]'/>
          </div>
          <div className='px-4 mb-6'>
            <h3 className='text-center text-[1.5rem] leading-tight font-serif my-4'>
              Access Ready-to-Sell Businesses
            </h3>
            <p className='text-lg text-center text-gray-700 mb-4'>
              Connect with a constant stream of motivated sellers.
            </p>
          </div>
        </div>
        {/*  */}
        <div className='flex-1 w-[100%] drop-shadow rounded-xl overflow-hidden bg-white'>
          <div className='w-[100%] aspect-[5/3] bg-pink-50 flex items-center justify-center'>
            <GrGrow className='text-[7rem]'/>
          </div>
          <div className='px-4 mb-6'>
            <h3 className='text-center text-[1.5rem] leading-tight font-serif my-4'>
              Grow Your Client Base
            </h3>
            <p className='text-lg text-center text-gray-700 mb-4'>
              Expand your reach through BizScout's extensive marketplace.
            </p>
          </div>
        </div>
        {/*  */}
        <div className='flex-1 w-[100%] drop-shadow rounded-xl overflow-hidden bg-white'>
            <div className='w-[100%] aspect-[5/3] bg-pink-50'>
              <div className='w-[100%] aspect-[5/3] bg-pink-50 flex items-center justify-center'>
                <FaTools className='text-[7rem]'/>
              </div>
            </div>
            <div className='px-4 mb-6'>
              <h3 className='text-center text-[1.5rem] leading-tight font-serif my-4'>
                Streamlined Tools
              </h3>
              <p className='text-lg text-center text-gray-700 mb-4'>
                Use our integrated tools to list, market, and close deals faster.
              </p>

          </div>
        </div>

      </div>
    </section>

    <section className="w-full lg:h-[80vh] bg-gradient-to-br from-slate-800 to-slate-950 text-white">
      <div className="w-[90%] h-[100%] mx-auto flex lg:flex-row flex-col justify-start">
        <div className="py-12 px-[2.5rem] flex-1 h-[100%] flex flex-col items-start justify-center">
            <h1 className="text-[3rem] font-serif leading-tight mb-6">
              Hit the ground running and snag your ideal match
            </h1>
            <p className="text-2xl font-light">
              Stop dreaming. Discover the edge you need by exploring our marketplace.
            </p>
        </div>
        <div className="py-8 flex-1 h-[100%] flex flex-col items-center justify-start"></div>
      </div>
    </section>





    </>
  )
}
