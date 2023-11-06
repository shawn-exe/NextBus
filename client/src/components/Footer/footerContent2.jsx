import React from 'react'
import Insta from "../../assets/insta.svg"
import Li from "../../assets/li.svg"
import Gt from "../../assets/gt.svg"
import Tw from "../../assets/tw.svg"
import Hp from "../../assets/hp.svg"
function FooterContent2() {
  return (
         <div className='w-1/2 flex flex-col justify-center align-middle items-center'>
          <div className='flex flex-row gap-5 align-middle items-center'>
           <a href="/"><img className='w-5 h-5' src={Li} alt="" /></a> 
           <a href="/"><img className='w-5 h-5' src={Gt} alt="" /></a> 
           <a href="/"><img className='w-5 h-5' src={Insta} alt="" /></a> 
           <a href="/"><img className='w-5 h-5' src={Tw} alt="" /></a> 
           <a href="/"><img className='w-5 h-5' src={Hp} alt="" /></a> 
          </div>
          <div className="bg-gray w-[22.63rem] h-[0.06rem]" />
          <div className="text-center flex items-center text-xs ">
            Ⓒ 2023 ShawnSalis(NMAMIT). All rights reserved
          </div>
         </div>
  )
}

export default FooterContent2