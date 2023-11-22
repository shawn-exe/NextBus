import React from 'react'
import Pfp from '../../assets/pfp.svg'
function adminpfp() {
  return (
    <div className='flex flex-row flex-wrap items-center'>
       <img src={Pfp} alt="" className='h-8 w-8'/>
        <div className='flex flex-col p-1'>
            <div className='font-medium text-[0.88rem]'>
                Admin
            </div>
            <div className='text-gray-400 font-medium text-[0.88rem]'>
                admin@gmail.com
            </div>
        </div>
    </div>
  )
}
export default adminpfp