import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Contactbox from '../assets/contactcontainer.png'
import Footer from '../components/Footer/footer'
function contactus() {
  return (
    <div className='bg-light-purple w-full min-h-screen flex flex-col items-center justify-center'>
        <Navbar />
        <div className='mb-6 mt-3'>
        <img className='w-[64rem] h-[38rem] ' src={Contactbox} alt="" />
        </div>
        <Footer />
    </div>
  )
}

export default contactus