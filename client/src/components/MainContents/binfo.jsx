import React from 'react';
import Bname from './Info/bname';
import Btime from './Info/btime';
import Bdestination from './Info/bdestination';
import Btype from './Info/btype';
import Viewbtn from './Info/viewbtn';

function Binfo(props) {
  return (
    <div className='flex flex-row justify-evenly text-center align-middle items-center mx-10 text-[0.8rem] bg-lavender'>
      <Bname bname={props.bname} />
      <Btime btime={props.btime} />
      <Bdestination bdestination={props.bdestination} />
      <Btype btype={props.btype} />
      <Viewbtn openinfowindow={props.openinfowindow} />
    </div>
  );
}

export default Binfo;
