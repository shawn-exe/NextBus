import React from 'react'
import { Link } from 'react-router-dom';
function Logoutbtn() {
    return (
      <Link to="/">
        <button
          type="button"
          className='rounded-full bg-mediumslateblue px-3 py-2 text-base font-bold text-black cursor-pointer shadow-sm items-center text-center'
        >
          Logout
        </button>
        </Link>
      )
}

export default Logoutbtn