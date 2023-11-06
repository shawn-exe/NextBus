import React, { useState } from 'react';
import Logincomponent from '../components/logincomponent';
import Nav from "../components/Navbar/navbar";
import HContent from "../components/HomeContent/hometext";
import Graphic1 from "../components/HomeContent/grahpic1";
import LoginButton from "../components/loginbtn";
import Footer from "../components/Footer/footer";

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStartedClick1 = () => {
    setShowLogin(true);
  };

  const handleGetStartedClick2 = () => {
    setShowLogin(false);
  };

  return (
    <div className='bg-light-purple w-full min-h-screen'>
      <Nav />
      <div className='flex flex-row items-center w-full'>
        <div className='w-1/2'>
          <HContent />
          <LoginButton onClick={handleGetStartedClick1} />
        </div>
        <Graphic1 />
      </div>
      <Footer />

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Logincomponent onClick={handleGetStartedClick2} />
        </div>
      )}
    </div>
  );
}

export default Home;
