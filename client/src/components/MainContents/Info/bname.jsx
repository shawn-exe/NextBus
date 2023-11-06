import React from 'react'

function bname(props) {
  return (
    <div className='flex justify-center align-middle items-center text-center w-1/5' {...props}>
        {props.bname}
    </div>
  )
}

export default bname