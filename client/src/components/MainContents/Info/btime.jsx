import React from 'react'

function btime(props) {
  return (
    <div  className='flex justify-center align-middle items-center text-center w-1/5' {...props}>
        {props.btime}
        </div>
  )
}

export default btime