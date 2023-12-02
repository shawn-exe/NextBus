import React from 'react'
import Cancel from '../../assets/cancel.svg'
import Arrow from '../../assets/arrow.svg'
function infowindow(props) {

  return (
    <div className='flex flex-row w-full h-screen justify-center items-center align-middle bg-semitrans'>
        <div className='w-full flex flex-row justify-center fixed gap-1'>'
         <div className='rounded-[4rem] w-[30rem] h-[34rem] shadow-2xl  bg-white flex flex-col p-5 '>
            <div className='bg-red-400 w-full h-1/2 rounded-t-[2.5rem] flex justify-center items-center'>
            Go to Hell!

            </div>   
            <div className='w-full h-1/5 flex flec-col items-center justify-center gap-1'>
                <div className='w-1/4  flex flex-col items-center justify-center'>
                    <div className='text-center w-full text-sm'>
                        Source
                    </div>
                    <div className='font-bold text-center w-full text-lg'>
                    Karkala
                    </div>
                </div>
                
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-row justify-center gap-2'>
                        <div className='text-blue font-bold'>
                            12
                        </div>
                        <div>
                            Stops
                        </div>
                    </div>
                   <img src={Arrow} alt="" />
                    <div className='text-center text-sm'>
                     1 hr 25 minutes   
                    </div> 
                </div>

                <div className='w-1/4 flex flex-col justify-center'>
                    <div className='text-center w-full  text-sm'>
                        Destination
                    </div>
                    <div className='font-bold text-center w-full text-lg'>
                    Mangalore
                    </div>
                </div>   
            </div>

            <div className='w-full h-1/6 flex justify-center items-center'>
                <div className='w-1/2 flex justify-between items-center'>
                    <div className='w-1/3 flex text-center flex-col items-center'>
                         <div className='text-center text-sm'>
                            FARE(C)
                         </div>
                         <div className='text-center font-bold text-lg'>
                            78
                         </div>
                    </div>
                    <div className='w-1/3 text-center flex flex-col items-center'>
                         <div className=' text-center text-sm'>
                            FARE
                         </div>
                         <div className=' text-center font-bold text-lg'>
                            150
                         </div>
                    </div>
                </div>
            </div>

            <div className='w-full text-center text-md font bold pt-5'>
                *The Fares mentioned above are in Rupees (INR)*
            </div>
       
        
         </div>
          <div className='cursor-pointer'>
            <img onClick={props.onClick}  src={Cancel} alt="" />
          </div>
        </div>
    </div>
  )
}

export default infowindow