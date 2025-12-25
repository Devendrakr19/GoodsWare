import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from '../layout/Layout';
import UserDashboard from '../pages/UserDashboard';
import User from '../pages/User';

const RouteConfig = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route path="/dashboard" element={<UserDashboard/>}/> 
                <Route path="/user" element={<User/>}/> 
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default RouteConfig