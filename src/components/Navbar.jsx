import React from 'react'
import { AiOutlineRocket} from 'react-icons/ai'

export default function Navbar() {
  return (
    <>
    <div className='head py-4 lg:py-6 flex justify-center items-center bg-slate-900 text-white'>
        <AiOutlineRocket size={50}/>
        <h1 className="text-xl md:text-3xl xl:text-[2.5rem] font-medium pl-[0.4rem]">Science News App</h1>
    </div>
    </>
  )
}
