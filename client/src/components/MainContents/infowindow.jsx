import React from 'react'
import Cancel from '../../assets/cancel.svg'
function infowindow(props) {
  return (
    <div className='flex flex-row w-full h-screen justify-center items-center align-middle bg-semitrans'>
        <div className='w-full flex flex-row justify-center fixed gap-1'>'
         <div className='rounded-[2rem] w-1/4 h-[20rem] shadow-2xl bg-white flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem repellendus odio laudantium a ut fuga, iste eius, minima possimus dicta delectus rem facilis aut sed iusto adipisci commodi natus error!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem repellendus odio laudantium a ut fuga, iste eius, minima possimus dicta delectus rem facilis aut sed iusto adipisci commodi natus error!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem repellendus odio laudantium a ut fuga, iste eius, minima possimus dicta delectus rem facilis aut sed iusto adipisci commodi natus error!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem repellendus odio laudantium a ut fuga, iste eius, minima possimus dicta delectus rem facilis aut sed iusto adipisci commodi natus error!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem repellendus odio laudantium a ut fuga, iste eius, minima possimus dicta delectus rem facilis aut sed iusto adipisci commodi natus error!</p>
         </div>
         <div className='cursor-pointer'>
            <img onClick={props.onClick}  src={Cancel} alt="" />
          </div>
        </div>
    </div>
  )
}

export default infowindow