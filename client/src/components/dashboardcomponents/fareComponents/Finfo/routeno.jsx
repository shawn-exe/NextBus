import React from 'react'

function routeno(props) {
  return (
    <div  className='flex justify-center align-middle items-center text-center w-1/5' {...props}>
    {props.routeid}
    </div>
  )
}

export default routeno