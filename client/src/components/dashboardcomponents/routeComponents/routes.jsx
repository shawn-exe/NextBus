import React from 'react'
import Deletebtn from '../deletebtn'
import Rid from './Rinfo/rid'
import Rdestination from './Rinfo/rdestination'
import Rsource from './Rinfo/rsource'
import Rstops from './Rinfo/rstops'
import Rduration from './Rinfo/rduration'

function routes(props) {
  return (
    <div className='flex flex-row justify-evenly  text-center align-middle items-center mx-10 text-[0.8rem] border-b-2 border-solid border-grayb'>
    <Rid rid ={props.rid} />
    <Rsource rsource ={props.rsource} />
    <Rdestination rdestination ={props.rdestination} />
    <Rduration rduration ={props.rduration} />
    <Rstops rstops ={props.rstops} />
    <Deletebtn/>
    </div>
  )
}

export default routes