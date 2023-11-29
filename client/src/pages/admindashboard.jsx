import React,{useState} from 'react'
import Header from '../components/dashboardcomponents/header'
import Dasboardsidebar from '../components/dashboardcomponents/dasboardsidebar'
import Buscontent from '../components/dashboardcomponents/buscontent'
import Routecontent from '../components/dashboardcomponents/routeComponents/routescontent'
import FareContent from '../components/dashboardcomponents/fareComponents/farecontent'
import Addbtn from '../components/dashboardcomponents/addbtn'
function Admindashboard() {
  const [content, setContent] = useState('bus'); 
  const [addlabel, setAddlabel] = useState('ADD Bus');
  const toggleContent = (selectedContent) => {
    setContent(selectedContent);
  };
  const togglelabel = (label) => {
    setAddlabel(label);
  };
  return (
    <div className='bg-light-purple min-h-screen w-full flex flex-row'>
        <div className='w-1/5'>
           <Dasboardsidebar toggleContent={toggleContent} togglelabel={togglelabel} />
        </div>
        <div className='w-4/5 overflow-y-auto h-screen'>
          <div className='flex flex-col'>
            <Header />
          </div>
          <div className='w-4/5 pl-10 h-[5rem] flex flex-row justify-between items-center'>
            <Addbtn name={addlabel} />
          </div> 
          {content === 'bus' && <Buscontent />}
          {content === 'route' && <Routecontent />}
          {content === 'fare' && <FareContent />}
        </div>
    </div>
  )
}
export default Admindashboard