import React from 'react'

function cfare(props) {
  return (
    <div  className='flex justify-center align-middle items-center text-center w-1/5' {...props}>
    {props.cfare}
    </div>
  )
}

export default cfare