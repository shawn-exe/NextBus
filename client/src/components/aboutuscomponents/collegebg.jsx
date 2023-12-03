import React from 'react'
import Collegeimg from '../../assets/collegeimg.png'
function collegebg() {
  return (
    <div className='w-full h-[24rem] bg-cover bg-center mb-5 flex flex-col justify-center items-center' style={{ backgroundImage: `url(${Collegeimg})` }}>
     <div className='text-[4rem]  text-center text-black font-average-sans'>
        About Us
     </div>
     <div className=' text-[1.2rem] w-[50rem] font-semibold font-lato text-center '>
     "Welcome to NextBus, the one-stop destination for all your college bus timetable needs. We're here to make your commuting experience more convenient and hassle-free."
     </div>
</div>

  )
}

export default collegebg