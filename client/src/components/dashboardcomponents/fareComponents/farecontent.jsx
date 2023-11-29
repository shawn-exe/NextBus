import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Fares from './fares'
import Headings from './fheadings'
function FareContent() {
    const [fares, setFares] = useState([]);

    useEffect(() => {
      // Fetch data when the component mounts
      axios.get('http://localhost:3001/getAllFares')
        .then(response => setFares(response.data))
        .catch(error => console.error('Error fetching fares:', error));
    }, []);
  
    return (
      <div className='w-ful pt-6 hide-scrollbar overflow-y-auto'>
        <Headings className="sticky" />
        <div className='flex flex-col gap-2 mt-2 mb-4 py-2 overflow-y-auto  hide-scrollbar '>
          {fares.map(fare => (
            <Fares
              key={fare.fareid}
              fareid={fare.fareid}
              routeid={fare.routeid}
              cfare={fare.cfare}
              fare={fare.fare}
            />    
          ))}
        </div>
      </div>
    );
}

export default FareContent