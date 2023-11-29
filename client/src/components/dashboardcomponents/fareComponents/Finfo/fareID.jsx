import React from 'react'

function fareID(props) {
  return (
    <div  className='flex justify-center align-middle items-center text-center w-1/5' {...props}>
    {props.fareid}
    </div>
  )
}

export default fareID