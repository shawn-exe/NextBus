import React from 'react'
import Links from "./navlinks"
import Logo from "./navlogo"
function navbar() {
  return (
    <div className=" pt-3 font-droid-sans flex flex-wrap flex-row w-full justify-between items-center">
    <Logo/>
    <Links />
  </div>
  )
}

export default navbar