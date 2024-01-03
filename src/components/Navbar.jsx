import React from 'react'
import { AiOutlineRocket} from 'react-icons/ai'

export default function Navbar() {
  const a =  `About Science`
  return (
    <>
    <div className='head py-4 lg:py-6 flex flex-col justify-center items-center bg-slate-900 text-white'>
        <div className='flex items-center'>
          <AiOutlineRocket size={50}/>
          <h1 className="text-xl md:text-4xl xl:text-[3rem] font-semibold pl-[0.4rem]">{a}</h1>
        </div>
        <p className='text-base md:text-xl xl:text-[1.4rem] font-medium mt-4'>Created by : Bibhav Shrestha</p>
    </div>
    </>
  )
}
