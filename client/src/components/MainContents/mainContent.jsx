import React, { useEffect, useState } from 'react';
import Headings from './headings';
import Binfo from './binfo';
import axios from 'axios';

function MainContent({ openinfowindow }) {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:3001/getAllBuses')
      .then(response => setBuses(response.data))
      .catch(error => console.error('Error fetching buses:', error));
  }, []);

  return (
    <div className='w-4/5 bg-blueviolet rounded-l-[1.5rem] pt-6 h-[35rem] hide-scrollbar overflow-y-auto'>
      <Headings className="sticky" />
      <div className='flex flex-col gap-2 mt-2 mb-4 py-2 overflow-y-auto h-[32rem] hide-scrollbar '>
        {buses.map(bus => (
          <Binfo
            key={bus.regno}
            bname={bus.bname}
            btime={bus.arrtime}
            bdestination={bus.Route.destination}
            btype={bus.type}
            openinfowindow={openinfowindow}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
