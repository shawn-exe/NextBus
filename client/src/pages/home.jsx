import React, { useState } from 'react';
import Logincomponent from '../components/logincomponent';
import Signupcomponent from '../components/signupcomponent';
import Nav from "../components/Navbar/navbar";
import HContent from "../components/HomeContent/hometext";
import Graphic1 from "../components/HomeContent/grahpic1";
import LoginButton from "../components/loginbtn";
import Footer from "../components/Footer/footer";
import { useAuth } from '../context/AuthContext';
function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const {authenticated }=useAuth();
  const handleGetStartedClick1 = () => {
    setShowLogin(true);
    setshowSignup(false); 
  };

  const handleGetStartedClick2 = () => {
    setShowLogin(false);
    setshowSignup(false);
  };

  const handleSignupClick = () => {
    setshowSignup(true);
    setShowLogin(false); // Make sure to hide Logincomponent when showing Signupcomponent
  };
  console.log("status:",authenticated);
  return (
    <div className='bg-light-purple w-full min-h-screen'>
      <Nav />
      <div className='flex flex-row items-center w-full'>
        <div className='w-1/2'>
          <HContent />
          <LoginButton onClick={handleGetStartedClick1}
          onClick1={handleSignupClick}/>
        </div>
        <Graphic1 />
      </div>
      <Footer />

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Logincomponent onClick={handleGetStartedClick2} onClick1={handleSignupClick} />
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Signupcomponent onClick={handleGetStartedClick2} onClick1={handleGetStartedClick1}/>
        </div>
      )}

    </div>
  );

}

export default Home;
