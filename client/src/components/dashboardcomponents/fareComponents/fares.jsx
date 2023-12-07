import React from 'react'
import Deletebtn from '../deletebtn'
import FareID from './Finfo/fareID'
import Cfare from './Finfo/cfare'
import Fare from './Finfo/fare'
import Routeno from './Finfo/routeno'
function routes(props) {
  const handleDelete = () => {
    props.onDelete(props.fareid); 
  }; 
  return (
    <div className='flex flex-row justify-evenly  text-center align-middle items-center mx-10 text-[0.8rem] border-b-2 border-solid border-grayb'>
    <FareID fareid ={props.fareid} />
    <Routeno routeid ={props.routeid} />
    <Cfare cfare ={props.cfare} />
    <Fare fare ={props.fare} />
    <Deletebtn onDelete={handleDelete}/>
    </div>
  )
}
export default routes