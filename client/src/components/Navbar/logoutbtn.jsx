import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Logoutbtn() {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <Link to="/">
      <button
        onClick={handleLogout}
        type="button"
        className='rounded-full bg-mediumslateblue px-3 py-2 text-base font-bold text-black cursor-pointer shadow-sm items-center text-center'
      >
        Logout
      </button>
    </Link>
  );
}

export default Logoutbtn;
