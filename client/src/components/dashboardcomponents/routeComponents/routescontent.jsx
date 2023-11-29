import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Routes from './routes'
import Headings from './rheadings'
function Routecontent() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
      // Fetch data when the component mounts
      axios.get('http://localhost:3001/getAllRoutes')
        .then(response => setRoutes(response.data))
        .catch(error => console.error('Error fetching routes:', error));
    }, []);
  
    return (
      <div className='w-ful pt-6 hide-scrollbar overflow-y-auto'>
        <Headings className="sticky" />
        <div className='flex flex-col gap-2 mt-2 mb-4 py-2 overflow-y-auto  hide-scrollbar '>
          {routes.map(route => (
            <Routes
              key={route.routeid}
              rid={route.routeid}
              rsource={route.source}
              rdestination={route.destination}
              rduration={route.duration}
              rstops={route.stops}
            />    
          ))}
        </div>
      </div>
    );
}

export default Routecontent