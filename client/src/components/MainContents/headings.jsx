import React from 'react'
import Infohead from './infohead'
function headings() {
  return (
    <div className='flex flex-row justify-evenly text-center align-middle items-center mx-10 font-lato text-[0.8rem]'>
        <Infohead name="Name"/>
        <Infohead name="Time"/>
        <Infohead name="Destination"/>
        <Infohead name="Type"/>
        <Infohead name=""/>
    </div>
  )
}

export default headings