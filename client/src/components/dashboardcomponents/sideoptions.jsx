import React from 'react';
import { useState } from 'react';
import { ChevronRight, Bus, Eye, BadgePlus,Route,Ticket} from 'lucide-react';

function Sideoptions({ toggleContent,togglelabel}) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleViewRoutesClick = () => {
    toggleContent('route');
    togglelabel('Add Route');   
  };
  const handleViewBusesClick = () => {
    toggleContent('bus');
    togglelabel('Add Bus');    
  };
  const handleViewFaresClick = () => {
    toggleContent('fare'); 
    togglelabel('Add Fare');   
  };
  const handleAddBusClick = () => {
    toggleContent('addbus'); 
    togglelabel('Add bus');   
  };

  return (
    <div className='w-3/4 flex-col font-poppins my-8 mx-2 space-y-7'>
      <div className='w-full'>
        <div
          onClick={() => toggleDropdown(1)}
          className={'flex cursor-pointer flex-row rounded-lg justify-between items-center p-[0.5rem] hover:bg-grayb'}
        >
          <div className='flex flex-row gap-1 items-center'>
            <Bus className='h-5 w-5' />
            <div className='text-[1.1rem]'>BUSES</div>
          </div>
          <ChevronRight className={` h-4 w-4 transition-transform ${activeDropdown === 1 ? 'rotate-90' : ''}`} />
        </div>
        {activeDropdown === 1 && (
          <div className='flex flex-col items-end '>
            <div className='w-full flex flex-col text-[0.8rem]'>
              <div onClick={handleViewBusesClick} className='flex justify-end items-center gap-1 cursor-pointer p-2 rounded-lg hover:bg-grayb'>
                <Eye className='h-3 w-3' />
                <div>View Bus</div>
              </div>
              <div onClick={handleAddBusClick} className='flex justify-end items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-grayb'>
                <BadgePlus className='h-3 w-3' />
                <div>Add Bus</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='w-full'>
        <div
          onClick={() => toggleDropdown(2)}
          className={'flex cursor-pointer flex-row rounded-lg justify-between items-center  p-[0.5rem] hover:bg-grayb'}
        >
          <div className='flex flex-row gap-1 items-center'>
            <Route className='h-5 w-5' />
            <div className='text-[1.1rem]'>Routes</div>
          </div>
          <ChevronRight className={` h-4 w-4 transition-transform ${activeDropdown === 2 ? 'rotate-90' : ''}`} />
        </div>
        {activeDropdown === 2 && (
          <div className='flex flex-col items-end '>
          <div className='w-full flex flex-col text-[0.8rem]'>
            <div onClick={() => handleViewRoutesClick()} className='flex justify-end items-center gap-1 cursor-pointer p-2 rounded-lg hover:bg-grayb'>
              <Eye className='h-3 w-3' />
              <div>View Routes</div>
            </div>
            <div className='flex justify-end items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-grayb'>
              <BadgePlus className='h-3 w-3' />
              <div>Add Routes</div>
            </div>
          </div>
        </div>
        )}
      </div>

      <div className='w-full'>
        <div
          onClick={() => toggleDropdown(3)}
          className={'flex cursor-pointer flex-row rounded-lg justify-between items-center  p-[0.5rem] hover:bg-grayb'}
        >
          <div className='flex flex-row gap-1 items-center'>
            <Ticket className='h-5 w-5' />
            <div className='text-[1.1rem]'>Fares</div>
          </div>
          <ChevronRight className={` h-4 w-4 transition-transform ${activeDropdown === 2 ? 'rotate-90' : ''}`} />
        </div>
        {activeDropdown === 3 && (
           <div className='flex flex-col items-end '>
           <div className='w-full flex flex-col text-[0.8rem]'>
             <div onClick={handleViewFaresClick} className='flex justify-end items-center gap-1 cursor-pointer p-2 rounded-lg hover:bg-grayb'>
               <Eye className='h-3 w-3' />
               <div>View Fares</div>
             </div>
             <div className='flex justify-end items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-grayb'>
               <BadgePlus className='h-3 w-3' />
               <div>Add Fares</div>
             </div>
           </div>
         </div>
        )}
      </div>

    </div>
  );
}

export default Sideoptions;
