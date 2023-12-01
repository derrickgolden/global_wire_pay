import './App.css'

import LandingPage from './pages/LandingPage'
import Transfers from './pages/Transfers';
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './admin/pages/AdminDashboard';

import { DashboardBody, Header, TransferMoney, WithdrawMoney, Footer, DepositMoney  } from './sections';
import { Login, Signup, ResetPassword, ForgotPassword, TransferWithBank, TransferWithWorldWire } from './components';
import AdminHeader from './admin/pages/AdminHeader';
import AdminTransfers from './admin/pages/AdminTransfers';
import UsersDetails from './admin/pages/UsersDetails';

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
          <Route path='transfers' element={<Transfers />} />
        </Route>
        <Route path="/user/login" element={<Login loginType = "user" />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/reset-password/:urltoken" element={<ResetPassword />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin" >
          <Route path="login" element={<Login loginType = "admin" />} />
          <Route path="dashboard" element={<AdminHeader />}>
            <Route index element={<AdminDashboard />} />
            <Route path='transfers' element={<AdminTransfers />} />
            <Route path='users' element={<UsersDetails />} />
          </Route>
        </Route>
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
