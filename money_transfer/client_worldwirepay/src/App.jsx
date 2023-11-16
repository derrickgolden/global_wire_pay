import { useState } from 'react'
import './App.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AdminDashboard from './admin/pages/AdminDashboard';

import { DashboardBody, Header, TransferMoney, WithdrawMoney, Footer, DepositMoney  } from './sections';
import { Login, Signup, ResetPassword, ForgotPassword, TransferWithBank, TransferWithWorldWire } from './components';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user/dashboard' element={<Header />} >
          <Route index element={<DashboardBody />} />
          <Route path='deposit-money' element={<DepositMoney />} />
          <Route path='withdraw-money' element={<WithdrawMoney />} />
          <Route path='transfer-money' >
            <Route index element={<TransferMoney />} />
            <Route path='world-wire-pay' element={<TransferWithWorldWire />} />
            <Route path="bank-account" element={<TransferWithBank />} />
          </Route>
        </Route>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/reset-password/:urltoken" element={<ResetPassword />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route path='*' element={<div>Not Found</div>} />

        <Route path="/admin" >
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
