import React from 'react'
import Logout from '../Navbar/logoutbtn'
function header() {
  return (
    <div className='flex flex-col w-full'>
    <div className=" flex flex-row items-center justify-between px-10 h-[6rem] ">
        <div className="font-bold text-dimgray font-poppins inline-block text-[2.6rem]">
        Dashboard
        </div>
        <Logout />
  </div>
    <div className='px-4'>
      <div className='h-[0.15rem] bg-gainsboro w-full'/>
    </div>
  </div>
  )
}
export default header