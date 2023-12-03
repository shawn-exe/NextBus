import React from 'react'
import {Link} from 'react-router-dom'
function navlinks() {
  return (
    <div className='flex flex-row justify-center gap-20 mr-40 '>
        <a href="/"  className="flex flex-shrink-0 no-underline text-black">Home</a>
        <Link to="/aboutus"  className="flex flex-shrink-0 no-underline text-black">About us</Link>
        <a href="/" className="flex  flex-shrink-0 no-underline text-black" >Contact us</a>
    </div>
  )
}
export default navlinks