import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";

function Card() {
  return (
    <div className=' relative w-52 h-60 rounded-[40px] bg-zinc-900 p-5 overflow-hidden text-white'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-5 px-6 py-1'>
                <h6>.4mb</h6>
                <IoIosDownload />
            </div>
            <div className='tag w-full bg-green-600 py-3 flex items-center justify-center'>
                <h3 className='text-sm'>Mark as completed!</h3>
            </div>
        </div>
  </div>
  )
}

export default Card
