import React from 'react'
import Checkbox from './checkbox'
function filterbox() {
  return (
    <div className='flex flex-col p-8'>
        <div className='text-[1.5rem] h-10 font-bold font-dm-sans text-gray1'>
            Filters
        </div >

        <div className='text-[1.3rem] font-semibold font-dm-sans text-gray'>
            Buses
        </div>
        <div className='flex flex-col gap-2 pl-2 pb-3'>
            < Checkbox label="Express" />
            < Checkbox label="Local" />
            < Checkbox label="Fast-Service" />
        </div>

        <div className='text-[1.3rem] font-semibold font-dm-sans text-gray'>
            Destination
        </div>
        <div className='flex flex-col gap-2 pl-2'>
            < Checkbox label="Mangalore" />
            < Checkbox label="Karkala" />
            < Checkbox label="Udupi" />
        </div>
    </div>
  )
}

export default filterbox