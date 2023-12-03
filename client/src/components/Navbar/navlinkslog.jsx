import React from 'react'
import Logout from './logoutbtn'
import {Link} from 'react-router-dom'
function navlinks() {
  return (
    <div className='flex flex-row justify-center items-center gap-20 mr-40 '>
      <Link to="/"  className="flex flex-shrink-0 no-underline text-black">Home</Link>
        <Link to="/aboutus"  className="flex flex-shrink-0 no-underline text-black">About us</Link>
        <Link to="/contactus" className="flex  flex-shrink-0 no-underline text-black" >Contact us</Link>
        <Logout />
    </div>
  )
}
export default navlinks