import React from 'react'
import Adminpfp from './adminpfp'
import Sideoptions from './sideoptions'
function dasboardsidebar() {
  return (
    <div className=' bg-white shadow-[2px_0px_5px_rgba(0,_0,_0,_0.25)] w-full h-full flex flex-col items-center '>
        <div className='text-center flex justify-center text-[1.2rem] text-mediumslateblue font-semibold font-poppins m-3 '>Welcome Admin!</div>
        <Adminpfp />
        <Sideoptions/>
       
    </div>
  )
}
export default dasboardsidebar