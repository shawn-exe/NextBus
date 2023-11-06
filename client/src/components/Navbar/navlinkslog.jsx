import React from 'react'
import Logout from './logoutbtn'
function navlinks() {
  return (
    <div className='flex flex-row justify-center items-center gap-20 mr-40 '>
        <a href="/"  class="flex flex-shrink-0 no-underline text-black">Home</a>
        <a href="/"  class="flex  flex-shrink-0 no-underline text-black">About us</a>
        <a href="/" class="flex  flex-shrink-0 no-underline text-black" >Contact us</a>
        <Logout />
    </div>
  )
}
export default navlinks