import React from 'react'

function rsource(props) {
  return (
    <div  className='flex justify-center align-middle items-center text-center w-1/5' {...props}>
    {props.rsource}
    </div>
  )
}

export default rsource