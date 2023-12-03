import React from 'react'
import Cancel from '../../assets/cancel.svg'
import Arrow from '../../assets/arrow.svg'
import r1 from '../../assets/maps/r1.png'
import r2 from '../../assets/maps/r2.png'
import r3 from '../../assets/maps/r3.png'
import r4 from '../../assets/maps/r4.png'
import r5 from '../../assets/maps/r5.png'
import r6 from '../../assets/maps/r6.png'
import r7 from '../../assets/maps/r7.png'
import r8 from '../../assets/maps/r8.png'
import r9 from '../../assets/maps/r9.png'
import r10 from '../../assets/maps/r10.png'
import r11 from '../../assets/maps/r11.png'
import r12 from '../../assets/maps/r12.png'


function infowindow(props) {

  return (
    <div className='flex flex-row w-full h-screen justify-center items-center align-middle bg-semitrans'>
        <div className='w-full flex flex-row justify-center fixed gap-1'>'
         <div className='rounded-[4rem] w-[30rem] h-[34rem] shadow-2xl  bg-white flex flex-col p-5 '>
            <div className=' w-full h-4/6 rounded-t-[2.5rem] flex justify-center items-center'>
            
            {(((props.busDetails.source === "Karkala") && (props.busDetails.destination === "Mangalore")))  && (<img src={r1} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Mangalore") && (props.busDetails.destination === "Karkala")))  && (<img src={r2} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Karkala") && (props.busDetails.destination === "Padubidri")))  && (<img src={r3} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Padubidri") && (props.busDetails.destination === "Karkala")))  && (<img src={r4} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Nitte") && (props.busDetails.destination === "Karkala")))  && (<img src={r5} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Karkala") && (props.busDetails.destination === "Nitte")))  && (<img src={r6} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Nitte") && (props.busDetails.destination === "Udupi")))  && (<img src={r8} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Udupi") && (props.busDetails.destination === "Nitte")))  && (<img src={r7} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}
            
            {(((props.busDetails.source === "Karkala") && (props.busDetails.destination === "Moodbidri")))  && (<img src={r9} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Moodbidri") && (props.busDetails.destination === "Karkala")))  && (<img src={r10} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Karkala") && (props.busDetails.destination === "Moodbidri")))  && (<img src={r11} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}

            {(((props.busDetails.source === "Nitte") && (props.busDetails.destination === "Mulki")))  && (<img src={r12} className='rounded-t-[2.5rem] w-full h-full' alt="" />)}
    

            </div>   
            <div className='w-full flex flex-row justify-center items-center gap-2 text-center text-sm pt-2'>
           <div>Register Number: </div> <div className='font-bold'>{props.busDetails.regno}</div>
            </div>
            <div className='w-full h-1/5 flex flec-col items-center justify-center gap-1'>
                <div className='w-1/4  flex flex-col items-center justify-center'>
                    <div className='text-center w-full text-sm'>
                        Source
                    </div>
                    <div className='font-bold text-center w-full text-lg'>
                    {props.busDetails.source}
                    </div>
                </div>
                
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-row justify-center gap-2'>
                        <div className='text-blue font-bold'>
                        {props.busDetails.stops}
                        </div>
                        <div>
                            Stops
                        </div>
                    </div>
                   <img src={Arrow} alt="" />
                    <div className='text-center text-sm'>
                    {props.busDetails.duration}
                    </div> 
                </div>

                <div className='w-1/4 flex flex-col justify-center'>
                    <div className='text-center w-full  text-sm'>
                        Destination
                    </div>
                    <div className='font-bold text-center w-full text-lg'>
                    {props.busDetails.destination}
                    </div>
                </div>   
            </div>

            <div className='w-full h-[3rem] flex justify-center items-center'>
                <div className='w-1/2 flex justify-between items-center'>
                    <div className='w-1/3 flex text-center flex-col items-center'>
                         <div className='text-center text-sm'>
                            FARE(C)
                         </div>
                         <div className='text-center font-bold text-lg'>
                         {props.busDetails.cfare}
                         </div>
                    </div>
                    <div className='w-1/3 text-center flex flex-col items-center'>
                         <div className=' text-center text-sm'>
                            FARE
                         </div>
                         <div className=' text-center font-bold text-lg'>
                         {props.busDetails.fare}
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