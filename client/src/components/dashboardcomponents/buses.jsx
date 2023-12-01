import React from 'react'
import Deletebtn from './deletebtn'
import Bname from '../MainContents/Info/bname'
import Btime from '../MainContents/Info/btime'
import Btype from '../MainContents/Info/btype'
import Bdestination from '../MainContents/Info/bdestination'
function buses(props) {
  const handleDelete = () => {
    props.onDelete(props.regno,props.arrtime); // Make sure props.regno is correct
  };  
  return (
    <div className='flex flex-row justify-evenly  text-center align-middle items-center mx-10 text-[0.8rem] border-b-2 border-solid border-grayb'>
    <Bname bname={props.bname} />
    <Btime btime={props.btime} />
    <Bdestination bdestination={props.bdestination} />
    <Btype btype={props.btype} />
    <Deletebtn onDelete={handleDelete}/>
    </div>
  )
}

export default buses