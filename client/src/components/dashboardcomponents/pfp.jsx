import React from 'react'
import PFP from '../../assets/pfp.svg'
function Pfp(props) {
  return (
    <div className='flex flex-row flex-wrap items-center'>
       <img src={PFP} alt="" className='h-8 w-8'/>
        <div className='flex flex-col p-1'>
            <div className='font-medium text-[0.88rem]'>
                {props.name}
            </div>
            <div className='text-gray-400 font-medium text-[0.88rem]'>
                {props.email}
            </div>
        </div>
    </div>
  )
}
export default Pfp