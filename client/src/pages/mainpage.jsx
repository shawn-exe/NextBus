import React,{useState} from 'react'
import Nav from '../components/Navbar/navbarlog'
import Searchbar from '../components/MainContents/searchbar'
import Footer from "../components/Footer/footer"
import Filterbox from '../components/MainContents/filterbox'
import Infowindow from '../components/MainContents/infowindow'
import Disclaimer from '../components/MainContents/disclaimer'
import MainContent from '../components/MainContents/mainContent'
function Mainpage() {
const[showinfowindow,setshowinfowindow]=useState(false);

const openinfowindow = () =>{
  setshowinfowindow(true);
}
const closeinfowindow = () =>{
  setshowinfowindow(false);
}
  return (
    <div className='bg-light-purple w-full min-h-screen'>
    <Nav />
    <Searchbar />
      <div className='flex flex-row w-full pb-6 '>
        <div className='flex flex-col flex-wrap w-1/5 justify-start pl-2 '>    
            <Filterbox />
            <Disclaimer />
        </div>
        <MainContent openinfowindow={openinfowindow} />
      </div>
    <Footer />
    {showinfowindow && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Infowindow onClick={closeinfowindow} />
        </div>
      )}
    </div>
  )
}
export default Mainpage