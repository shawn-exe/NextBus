import React from 'react'
import Pfp from './pfp'
import Sideoptions from './sideoptions'
function dasboardsidebar({ toggleContent,togglelabel }) {
  return (
    <div className=' bg-white shadow-[2px_0px_5px_rgba(0,_0,_0,_0.25)] w-full h-screen flex flex-col items-center '>
        <div className='text-center flex justify-center text-[1.2rem] text-mediumslateblue font-semibold font-poppins m-3 '>Welcome Admin!</div>
        <Pfp name="Admin" email="admin@gmail.com" />
        <Sideoptions toggleContent={toggleContent} togglelabel={togglelabel}/>
       
    </div>
  )
}
export default dasboardsidebar