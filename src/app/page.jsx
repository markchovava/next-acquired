import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionBusiness from "./_components/SectionBusiness";
import { IoMdTrendingUp } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";
import { FaMoneyBill1Wave } from "react-icons/fa6";



export default function Home() {
  return (
    <>
    {/* BANNER */}
    <section className="w-full lg:h-[36rem] xl:h-[90vh] bg-gradient-to-br from-slate-50 to-gray-100 drop-shadow">
      <div className="mx-auto h-[100%] w-[90%] grid lg:grid-cols-5 grid-cols-1">
          
          <div className="col-span-3 py-[2.5rem] flex flex-col items-start justify-center gap-5">
          
            <h1 className="text-[3.6rem] font-serif leading-tight">
              Finding your dream <br /> 
              business just got easy.
            </h1>

            <p className="text-xl">
                We use smart tech to spotlight businesses that <br />
                aren't just good—they're "grow your empire" great.
            </p>

            <Link href="#" className="mt-4 hover:drop-shadow-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white group px-5 py-4 border border-gray-400 rounded-full flex items-center justify-start gap-3 hover:">
                Get Started
                <FaArrowRightLong className="ease-linear transition-all duration-100 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="col-span-2 flex items-center justify-center">

            <div className="mx-auto lg:my-auto my-[3rem] w-[90%] lg:h-[30rem] h-[20rem] rounded-3xl bg-gray-600"></div>

          </div>
      </div>
    </section>


    {/*  */}
    <SectionBusiness />

    
    {/*  */}
    <section className="w-full">
      <div className="w-[90%] pt-[4rem] pb-[6rem] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-12 p-8">
        {/* ITEM */}
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="flex items-center justify-center bg-gray-50 w-[100%] aspect-[4/3] rounded-3xl drop-shadow">
            <IoMdTrendingUp className="text-[7rem]" />
          </div>
          <h3 className="font-serif text-3xl">Find your hidden gem </h3>
          <p className="pt-[1.8rem] border-t border-gray-300">
            With verified status, become the buyer brokers count on to close the deal.
          </p>
        </div>
        {/* ITEM */}
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="flex items-center justify-center bg-gray-50 w-[100%] aspect-[4/3] rounded-3xl drop-shadow">
            <LuHandshake className="text-[7rem]" />
          </div>
          <h3 className="font-serif text-3xl">Find your hidden gem </h3>
          <p className="pt-[1.8rem] border-t border-gray-300">
            With verified status, become the buyer brokers count on to close the deal.
          </p>
        </div>
        {/* ITEM */}
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="flex items-center justify-center bg-gray-50 w-[100%] aspect-[4/3] rounded-3xl drop-shadow">
            <FaMoneyBill1Wave className="text-[7rem]" />
          </div>
          <h3 className="font-serif text-3xl">Find your hidden gem </h3>
          <p className="pt-[1.8rem] border-t border-gray-300">
            With verified status, become the buyer brokers count on to close the deal.
          </p>
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
  );
}