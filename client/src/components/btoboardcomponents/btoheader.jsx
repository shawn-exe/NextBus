import React from 'react'
import Pfp from '../dashboardcomponents/pfp'
import Logoutbtn from '../Navbar/logoutbtn'
function btoheader() {
  return (
    <div className='w-full h-[6rem] px-8 flex flex-row justify-between items-center'>
        <div className=' flex flex-row justify-between items-center'>
        <div className='text-center flex justify-center text-[1.2rem] text-mediumslateblue font-semibold font-poppins m-3 '>Welcome Officer!</div>
        <Pfp name="BTO" email="bto@gmail.com" />
        </div>
        <Logoutbtn />
    </div>
  )
}

export default btoheader