import React from 'react'

function hometext() {
  return (
    <div className='flex flex-col  items-center justify-center w-full pl-20 pb-5'>
      <div className='block w-full text-left text-[1.81rem] font-bold text-black font-mulish"'>
      Welcome to Next Bus!!
      </div>
      <div className='block w-full text-left text-[2.8rem] font-extrabold text-black font-mulish"'>
      Worried about your      
      <div className="text-[3.4rem] text-textpurple">Bus Journey?</div>
      </div>
      <div className='block w-full text-left text-[1.81rem] font-bold text-black font-mulish"'>
      Don’t worry.. We got you..
      </div>
      <div className="block w-full text-left text-[2.00rem] py-3">
          <div className="font-mulish font-bold">Discover
        <span className="font-black text-textpurple"> Accurate</span>
        <b className="text-blueviolet-100">
        <span className="text-[1.81rem] text-black"> and </span>
            <span className="text-textpurple font-extrabold">
             Up-to-Date Bus timings </span>
        
         
          <span className="text-[1.61rem] text-black">
            at your fingertips!!
          </span>
        </b>
        </div>
      </div>
    </div>
  )
}
export default hometext