import React from 'react'
import Magnifier from '../../assets/magnifier.svg'
function searchbar() {
  return (
    <div className='grid w-full  items-center gap-1 pb-5'>
        <div className='text-center text-[0.7rem] pt-2 '>
            Search Your Destination
        </div>
        <div className='flex align-middle justify-center items-center '>
            <div className=' flex flex-row w-1/4 rounded-xl border-2 border-gray border-solid py-1 align-middle justify-center items-center gap-3'>
                <input class=" w-4/5 bg-transparent focus:outline-none" id="/" placeholder="type here.."/>  
                <img className='h-7 w-7 cursor-pointer' src={Magnifier} alt="" />
            </div>
        </div>
                </div>
  )
} 

export default searchbar

