import React, { useState } from 'react';
import Checkbox from './checkbox';

function Filterbox({ onDestinationChange,ontypeChange }) {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedtypes, setselectedtypes] = useState([]);

  const handleDestinationChange = (label) => {
    const updatedDestinations = selectedDestinations.includes(label)
      ? selectedDestinations.filter((dest) => dest !== label)
      : [...selectedDestinations, label];
    setSelectedDestinations(updatedDestinations);
    onDestinationChange(updatedDestinations);
  };
  const handletypeChange = (label) => {
    const updatedtypes = selectedtypes.includes(label)
      ? selectedtypes.filter((type) => type !== label)
      : [...selectedtypes, label];
      setselectedtypes(updatedtypes);
      ontypeChange(updatedtypes);
  };

  return (
    <div className='flex flex-col p-8'>
      <div className='text-[1.5rem] h-10 font-bold font-dm-sans text-gray1'>
        Filters
      </div>
            <div className='text-[1.3rem] font-semibold font-dm-sans text-gray'>
        Buses
        </div>
        <div className='flex flex-col gap-2 pl-2 pb-3'>
        < Checkbox label="Express" onChange={() => handletypeChange("Express")}/>
        < Checkbox label="Local"  onChange={() => handletypeChange("local")} />
        < Checkbox label="Fast-Service"  onChange={() => handletypeChange("Fast-service")} />
        </div>

      <div className='text-[1.3rem] font-semibold font-dm-sans text-gray'>
        Destination
      </div>
      <div className='flex flex-col gap-2 pl-2'>
        <Checkbox
          label="Mangalore"
          onChange={() => handleDestinationChange("mangalore")}
        />
        <Checkbox
          label="Karkala"
          onChange={() => handleDestinationChange("Karkala")}
        />
        <Checkbox
          label="Udupi"
          onChange={() => handleDestinationChange("udupi")}
        />
      </div>
    </div>
  );
}

export default Filterbox;


