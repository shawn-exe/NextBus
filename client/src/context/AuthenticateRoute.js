import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
const AuthRoute = () => {
  const { authenticated } = useAuth();

  if (authenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AuthRoute;
