import React from 'react'
import Infohead from '../../MainContents/infohead'
function headings() {
  return (
    <div className='flex flex-row justify-evenly text-center align-middle items-center mx-10 font-lato text-[0.8rem]'>
        <Infohead name="Route ID"/>
        <Infohead name="Source"/>
        <Infohead name="Destination"/>
        <Infohead name="Duration"/>
        <Infohead name="Stops"/>
        <Infohead name=""/>
    </div>
  )
}

export default headings