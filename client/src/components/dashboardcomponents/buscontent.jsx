import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Buses from './buses';
import Headings from '../MainContents/headings'
function Buscontent() {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
      // Fetch data when the component mounts
      axios.get('http://localhost:3001/getAllBuses')
        .then(response => setBuses(response.data))
        .catch(error => console.error('Error fetching buses:', error));
    }, []);
  
    return (
      <div className='w-ful pt-6 hide-scrollbar overflow-y-auto'>
        <Headings className="sticky" />
        <div className='flex flex-col gap-2 mt-2 mb-4 py-2 overflow-y-auto  hide-scrollbar '>
          {buses.map(bus => (
            <Buses
              key={bus.regno}
              bname={bus.bname}
              btime={bus.arrtime}
              bdestination={bus.Route.destination}
              btype={bus.type}
            />    
          ))}
        </div>
      </div>
    );
}

export default Buscontent