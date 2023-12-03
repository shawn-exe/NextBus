import React from 'react'
import {Plus} from 'lucide-react'
function addbtn(props) {
  const handleClick =() =>{
  props.toggleContent(props.content); 
  }
  return (
    <div
    className= "flex justify-center items-center ">
        <div onClick={handleClick} className='flex justify-center items-center rounded-full  bg-mediumslateblue font-poppins px-7 py-2 text-sm font-bold text-black cursor-pointer shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blackr'
      >
   {props.name}
   <Plus className='h-4 w-4' />
  </div>
  </div>
  )
}

export default addbtn