"use client"
import React, { useState } from 'react'



export default function SectionBusiness() {
    const colors = ["bg-green-", "bg-blue-", "bg-rose-"]
    const [isActive, setIsActive] = useState(`${colors[0]}`)
    
    console.log(isActive)
  
    return (
    <section className="w-[100%]">
        <div className="mx-auto w-[90%] pt-[4rem] pb-[4rem]">
        {/* TITLE */}
        <h1 className="text-center leading-tight text-[3.6rem] font-serif mt-4 mb-6">Start scaling, get a partner.</h1>
        {/*  */}
        <div className="flex lg:flex-row flex-col justify-start mx-auto w-[80%] lg:h-[30rem] rounded-2xl overflow-hidden bg-slate-700">
            {/*  */}
            <div className="flex-1 bg-slate-900 h-[100%] w-[100%] text-white flex flex-col items-start justify-center gap-4 px-6">
                {/*  */}
                <h2 className="font-serif leading-tight text-[2rem] pt-5">
                Business Acquisition
                </h2>
                {/*  */}
                <div className="text-lg font-light">
                <p className="mb-3">
                    Master your financial game with tools that reveal cash 
                    flow secrets, check deal affordability, and predict exit values.
                </p>
                <p>
                    Net working capital calculator, Deal 
                    affordability calculator & Exit value calculator.
                </p>
                </div>
                {/*  */}
                <ul className="flex justify-between items-start gap-5 pt-3 pb-8">
                    <li onClick={() => setIsActive(colors[0])} className="group flex flex-col gap-2 items-center justify-center cursor-pointer">
                        <div className={`group-hover:${colors[0]}800 duration-100 ease-linear transition-all w-[3rem] h-[3rem] ${colors[0]}700 rounded-full`}></div>
                        <span className="text-slate-300 text-sm">Text it out</span>
                    </li>
                    <li 
                        onClick={() => setIsActive(colors[1])} 
                        className="group flex flex-col gap-2 items-center justify-center cursor-pointer">
                        <div className={`group-hover:${colors[1]}800 duration-100 ease-linear transition-all w-[3rem] h-[3rem] ${colors[1]}700 rounded-full`}></div>
                        <span className="text-slate-300 text-sm">Text it out</span>
                    </li>
                    <li 
                        onClick={() => setIsActive(colors[2])} 
                        className="group flex flex-col gap-2 items-center justify-center cursor-pointer">
                        <div className={`group-hover:${colors[2]}800 duration-100 ease-linear transition-all w-[3rem] h-[3rem] ${colors[2]}700 rounded-full`}></div>
                        <span className="text-slate-300 text-sm">Text it out</span>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className={`flex-1 ${isActive}700 ease-linear duration-100 h-[100%] w-[100%]`}></div>
            <div></div>
        </div>
        </div>
    </section>
  )
}
