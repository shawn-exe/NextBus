import React from 'react'
import Underline from '../../assets/unl.svg'
import Pfp3 from '../../assets/pfp3.svg'
function crousal2() {
  return (
    <div className='flex flex-col w-full justify-center items-center my-6 '>
        <div className='w-2/3 py-10 rounded-[2rem] bg-blueviolet flex flex-col  justify-center items-center '>
        <div className='flex flex-col text-center text-black font-ssp items-center w-1/2 '>
            <div className='font-semibold text-center text-[2rem]'>
                 Under the Guidance of
            </div>
           <img className='w-[15rem]' src={Underline} alt="" />
        </div>
        <div className='flex w-full justify-center items-center flex-row gap-48'>
        <img className='w-[15rem] h-[15rem]' src={Pfp3} alt="" />
        </div>
        </div>
    </div>
  )
}

export default crousal2