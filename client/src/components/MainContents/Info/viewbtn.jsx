import React from 'react';

function Viewbtn({ openinfowindow, breg ,btime}) {
  const viewbtnclick = () => {
    openinfowindow(breg,btime);

  };

  return (
    <div className='flex justify-center align-middle items-center w-1/5 py-1 text-center '>
      <div
        onClick={viewbtnclick}
        className='bg-mediumslateblue cursor-pointer flex justify-center align-middle items-center py-1 w-14 rounded-md text-center font-semibold '
      >
        View
      </div>
    </div>
  );
}

export default Viewbtn;
