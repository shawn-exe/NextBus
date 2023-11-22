import React from 'react'
function header() {
  return (
    <div className='flex flex-col w-full'>
    <div className=" flex flex-row items-center justify-between px-10 h-[6rem] ">
        <div className="font-bold text-dimgray font-poppins inline-block text-[2.6rem]">
        Dashboard
        </div>
        <div className="font-semibold text-mediumslateblue font-poppins inline-block text-[1.2rem]">
        Logout
        </div>
  </div>
    <div className='px-4'>
      <div className='h-[0.15rem] bg-gainsboro w-full'/>
    </div>
  </div>
  )
}
export default header