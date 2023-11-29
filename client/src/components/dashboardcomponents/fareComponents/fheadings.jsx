import React from 'react'
import Infohead from '../../MainContents/infohead'
function headings() {
  return (
    <div className='flex flex-row justify-evenly text-center align-middle items-center mx-10 font-lato text-[0.8rem]'>
        <Infohead name="Fare ID"/>
        <Infohead name="Route ID"/>
        <Infohead name="Fare"/>
        <Infohead name="Fare(c)"/>
        <Infohead name=""/>
    </div>
  )
}
export default headings