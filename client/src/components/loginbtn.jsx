import React from 'react'
function loginbtn(props) {
  return (
    <div
    className= "flex justify-center items-center pt-6 w-full">
        <div className='rounded-full bg-mediumslateblue px-5 py-3 text-sm font-bold text-black cursor-pointer shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blackr'
      onClick={props.onClick}
      >
   Get Started
  </div>
  </div>
  )
}

export default loginbtn