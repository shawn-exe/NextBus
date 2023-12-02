import React,{useState} from 'react'
import Nav from '../components/Navbar/navbarlog'
import Searchbar from '../components/MainContents/searchbar'
import Footer from "../components/Footer/footer"
import Filterbox from '../components/MainContents/filterbox'
import Infowindow from '../components/MainContents/infowindow'
import Disclaimer from '../components/MainContents/disclaimer'
import axios from 'axios'
import MainContent from '../components/MainContents/mainContent'
function Mainpage() {
const[showinfowindow,setshowinfowindow]=useState(false);

const [selectedRegno, setSelectedRegno] = useState("");
const [selectedarrtime, setSelectedarrtime] = useState("");

const openinfowindow = async () => {
  await axios.get(`http://localhost:3001/removeRoute/${selectedRegno}/${selectedarrtime}`)
  .then((res) =>{ const {source,destination,duration,stops,fare,cfare}=response.data)
}
;

  
  console.log(selectedRegno)
  console.log(selectedarrtime)
    setshowinfowindow(true);
};

const closeinfowindow = () =>{
  setshowinfowindow(false);
}
const [selectedDestinations, setSelectedDestinations] = useState([]);
const [selectedtypes, setselectedtypes] = useState([]);
const handleDestinationChange = (destinations) => {
  setSelectedDestinations(destinations);
};
const handletypeChange = (types) => {
  setselectedtypes(types);
};
const [searchValue, setSearchValue] = useState('');
const handleSearch = (value) => {
  setSearchValue(value);
};
return (
  <div className='bg-light-purple w-full min-h-screen'>
    <Nav />
    <Searchbar onSearch={handleSearch} />
    <div className='flex flex-row w-full pb-6 '>
      <div className='flex flex-col flex-wrap w-1/5 justify-start pl-2 '>
        <Filterbox onDestinationChange={handleDestinationChange} ontypeChange={handletypeChange}/>
        <Disclaimer />
      </div>
      <MainContent openinfowindow={openinfowindow} selectedRegno={setSelectedRegno} selectedarrtime={setSelectedarrtime} selectedDestinations={selectedDestinations} selectedtypes={selectedtypes} searchValue={searchValue} />
    </div>
    <Footer />
    {showinfowindow && (
      <div className="fixed inset-0 flex items-center justify-center">
        <Infowindow onClick={closeinfowindow} />
      </div>
    )}
  </div>
);
}

export default Mainpage