import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Nav from "../components/Navbar/navbar";
import Crousal1 from '../components/aboutuscomponents/crousal1';
import Crousal2 from '../components/aboutuscomponents/crousal2';
import Collegebg from '../components/aboutuscomponents/collegebg';
import Underline from '../assets/unl.svg'
import abtgraphic1 from '../assets/abtgraphic1.svg'
import abtgraphic2 from '../assets/abtgraphic2.svg'
import abtgraphic3 from '../assets/abtgraphic3.png'
import Aboutcontent from '../components/aboutuscomponents/aboutcontent';
import Footer from '../components/Footer/footer'

function AboutUs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className='bg-light-purple w-full min-h-screen'>
      <Nav />
      <Carousel
        selectedItem={selectedIndex}
        onSelect={handleSelect}
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}        
      >      
          <Crousal1 />
          <Crousal2 />   
      </Carousel>
      <Collegebg />  
      <div className='flex flex-col text-center text-black font-ssp items-center w-full '>
            <div className='font-semibold text-center text-[2rem]'>
                 Why NextBus?
            </div>
           <img className='w-[15rem]' src={Underline} alt="" />
      </div>
        <div className='px-36 h-[25rem] pt-6 flex flex-row justify-center gap-56 items-center'>
        <Aboutcontent heading="Mission and Goals" content="Our mission is to provide college students with accurate and up-to-date bus schedules,  helping them save time and make their daily journeys to and from the college as smooth as possible." />
        <img className='h-[25rem] w-[25rem]' src={abtgraphic1} alt="" />
        </div>
        <div className='px-36  h-[25rem] flex flex-row justify-center gap-48 items-center'>
        <img className='h-[35rem] w-[45rem]' src={abtgraphic2} alt="" />
        <Aboutcontent heading="Target Audience" content="Our website is tailored specifically for college students who rely on buses to get to and from the campus, as well as anyone else interested in accessing this information." />
        </div>
        <div className='px-36 h-[25rem]  flex flex-row justify-center gap-56 items-center'>
        <Aboutcontent heading="Benefits for Students" content="By using our website, students can avoid unnecessary waiting, reduce travel stress, and better plan their day with confidence, knowing when their bus will arrive." />
        <img className='h-[30rem] w-[30rem]' src={abtgraphic3} alt="" />
        </div>
        <div className='w-full flex flex-col justify-center items-center py-8'>
        <div className='text-center w-full text-[2rem] font-semibold font-ssp text-black'>
        Disclaimer
        </div>
        <div className='w-1/2 h-[0.15rem] bg-text2 '/>
        <div className=' w-1/2  font-semibold font-lato text-center leading-6'>
        "Please note that while we strive to provide accurate and reliable information, bus schedules may change due to various factors. We are not responsible for any service disruptions or inaccuracies."
        </div>
        </div>
        <Footer />
    </div>
  );
}

export default AboutUs;
