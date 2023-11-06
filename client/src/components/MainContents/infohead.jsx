import React from 'react'

function infohead(props) {
  return (
    <div className='text-center w-1/5' {...props}>
            {props.name}
    </div>
  )
}

export default infohead