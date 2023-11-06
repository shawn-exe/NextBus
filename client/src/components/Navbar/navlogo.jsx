import React from 'react'
import Logo from '../../assets/logo.svg';
function navlogo() {
  return (
    <div className='ml-36 flex'>
    <a href="/">
        <img src={Logo} alt="NextBus" />
        </a>
        </div>
  )
}
export default navlogo