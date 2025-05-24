import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import Spinner from '../layout/Spinner';

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  //if (loading) return <Spinner />;
  if (!isAuthenticated && !loading) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoute;
