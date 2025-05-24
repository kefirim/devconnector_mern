import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './action/authAction';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import ProfileForm from './profile-forms/ProfileForm';
import AddExperience from './profile-forms/AddExperience';
import AddEducation from './profile-forms/AddEducation';
//import PrivateRoute from './components/routing/PrivateRoute';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  return (
   
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/create-profile" element={<PrivateRoute />}>
            <Route index element={<ProfileForm />} />
          </Route>
          <Route path="/edit-profile" element={<PrivateRoute />}>
            <Route index element={<ProfileForm />} />
          </Route>
          <Route path="/add-experience" element={<PrivateRoute />}>
            <Route index element={<AddExperience />} />
          </Route>
          <Route path="/add-education" element={<PrivateRoute />}>
            <Route index element={<AddEducation />} />
          </Route>


          
          
         
        </Routes>
      </Router>
    
  );
};

export default App;
