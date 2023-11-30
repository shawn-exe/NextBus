import React,{useState} from 'react'
import Btoheader from '../components/btoboardcomponents/btoheader'
import Dashheading from '../components/btoboardcomponents/dashheading'
import Addbtn from '../components/dashboardcomponents/addbtn'
import AddFaresform from '../components/dashboardcomponents/addfaresform'
import FareContent from '../components/dashboardcomponents/fareComponents/farecontent'
function Btodashboard() {
  const [content, setContent] = useState('fares');
  const [btn,setbtn]=useState('addbtn');
  const toggleContent = (selectedContent) => {
    setContent(selectedContent);
  };
  const togglebtn = (selectedContent) => {
    setbtn(selectedContent);
  };
  const handleaddfareclick = () =>{
    toggleContent('addfares');
    togglebtn('viewbtn');
  };
  const handleviewfareclick = () =>{
    toggleContent('fares');
    togglebtn('addbtn');
  };


  return (
    <div className='bg-light-purple min-h-screen w-full'>
    <div className=' w-full flex flex-row'>
      <Btoheader />         
    </div>
    <Dashheading />
        <div className=' h-[33.35rem] w-full flex flex-row'>
            <div className='w-1/6 pt-8'>
             {btn ==='addbtn' && <div onClick={handleaddfareclick}>
              <Addbtn name="Add Fare" />
              </div>}
            {btn ==='viewbtn' && <div onClick={handleviewfareclick}>
              <Addbtn name="View Fares" />
            </div>} 
              
            </div>
            <div className='w-5/6 mr-5 mt-4 rounded-xl overflow-auto  bg-blueviolet '>
             {content === "fares" && <FareContent />}
             {content === "addfares" && <AddFaresform />}
            </div>
          
        </div>
    </div>
  )
}

export default Btodashboard