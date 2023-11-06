import React from 'react'
import Logo from '../../assets/logo.svg';
function FooterContent1() {
  return (
    <div className='w-1/2 flex ml-40 flex-col items-start justify-center align-middle'>
    <img src={Logo} className='h-8' alt="" />
    <div className=" flex items-center text-xs ">
         This site was built as a DBMS project.
</div>
<div className=" flex items-center text-xs">
It aims in providing accurate timings to the students of NMAMIT
</div>
      <div className="m-0 text-sm font-carter-one text-black">
        “HAPPY JOURNEY , TRAVEL SAFE”
      </div>
  </div>
  )
}
export default FooterContent1