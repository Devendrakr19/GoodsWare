import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from '../layout/Layout';
import UserDashboard from '../pages/UserDashboard';

const RouteConfig = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route path="/dashboard" element={<UserDashboard/>}/> 
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default RouteConfig