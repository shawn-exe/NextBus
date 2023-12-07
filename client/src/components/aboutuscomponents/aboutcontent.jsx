import React from 'react'
function aboutcontent(props) {
  return (
    <div className='w-1/3 flex flex-col justify-center items-center'>
        <div className='text-left w-full text-[2rem] font-semibold font-ssp text-black'>
            {props.heading}
        </div>
        <div className='h-[0.15rem] bg-text2 w-full'/>
        <div className=' w-full  font-semibold font-lato text-left leading-6'>
            "{props.content}"
        </div>

    </div>
  )
}

export default aboutcontent