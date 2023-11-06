import React from 'react'

function btype(props) {
  return (
    <div  className='flex justify-center align-middle items-center text-center w-1/5'  {...props}>
      {props.btype}
      </div>
  )
}

export default btype