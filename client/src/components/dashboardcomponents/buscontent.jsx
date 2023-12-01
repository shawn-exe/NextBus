import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Buses from './buses';
import Headings from '../MainContents/headings'
function Buscontent() {
    const [buses, setBuses] = useState([]);
    useEffect(() => {    
      axios.get('http://localhost:3001/getAllBuses')
        .then(response => setBuses(response.data))
        .catch(error => console.error('Error fetching buses:', error));
    }, []);
    const handleDelete = async (regno, arrtime) => {
      try {
        await axios.delete(`http://localhost:3001/removeBus/${regno}/${arrtime}`);
        const updatedBuses = buses.filter(bus => bus.regno !== regno || bus.arrtime !== arrtime);
        setBuses(updatedBuses);
      } catch (error) {
        console.error('Error deleting bus:', error);
      }
    };
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
              onDelete={() => handleDelete(bus.regno,bus.arrtime)} 
            />    
          ))}
        </div>
      </div>
    );
}

export default Buscontent