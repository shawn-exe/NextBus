import React from 'react'

function deletebtn({onDelete}) {
  const handleclick = () =>{
    onDelete();
  };
  return (
    <div onClick={handleclick} className='flex justify-center align-middle items-center w-1/5 py-1 text-center cursor-pointer '>
    <div className='bg-mediumslateblue flex justify-center align-middle items-center py-1 w-14 rounded-md text-center font-semibold '>Delete</div>
  </div>
  )
}

export default deletebtn