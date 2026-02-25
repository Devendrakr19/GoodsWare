import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from '../layout/Layout';
import UserDashboard from '../pages/UserDashboard';
import User from '../pages/User'; 
import LoginLayout from '../layout/auth/LoginLayout';
import Login from '../layout/auth/Login';
import ForgotPassword from '../layout/auth/ForgotPassword';
import ResetPassword from '../layout/auth/ResetPassword';
import Product from '../pages/Product';
import PurchaseItem from '../pages/PurchaseItem';
import SaleItem from '../pages/SaleItem'; 

const RouteConfig = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route element={<LoginLayout/>}>
                <Route path="/" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
            </Route>
            <Route element={<Layout/>}> 
                <Route path="/dashboard" element={<UserDashboard/>}/> 
                <Route path="/user" element={<User/>}/> 
                <Route path="/product" element={<Product/>}/> 
                <Route path="/purchase-item" element={<PurchaseItem/>}/> 
                <Route path="/sale-item" element={<SaleItem/>}/>                 
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default RouteConfig