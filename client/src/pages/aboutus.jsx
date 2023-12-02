import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Nav from "../components/Navbar/navbar";
import Crousal1 from '../components/aboutuscomponents/crousal1';
import Crousal2 from '../components/aboutuscomponents/crousal2';

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
    </div>
  );
}

export default AboutUs;
