import React from 'react';
import './App.css';
import Home from './pages/home';
import Mainpage from './pages/mainpage';
import AuthRoute from './context/AuthenticateRoute';
import Admindashboard from './pages/admindashboard';
import Contactus from './pages/contactus';
import Aboutus from './pages/aboutus';
import Btodashboard from './pages/btodashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<AuthRoute />}>
          <Route index element={<Mainpage />} />
        </Route>
        <Route path="/admindashboard" element={<AuthRoute />}>
          <Route index element={<Admindashboard />} />
        </Route>
        <Route path="/btodashboard" element={<AuthRoute />}>
          <Route index element={<Btodashboard />} />
        </Route>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
