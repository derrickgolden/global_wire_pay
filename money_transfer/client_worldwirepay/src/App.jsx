import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'
import DepositMoney from './sections/DepositMoney'
import Header from './sections/Header'
import DashboardBody from './sections/DashboardBody'
import WithdrawMoney from './sections/WithdrawMoney'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LandingPage /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user/dashboard' element={<Header />} >
          <Route index element={<DashboardBody />} />
          <Route path='deposit-money' element={<DepositMoney />} />
          <Route path='withdraw-money' element={<WithdrawMoney />} />
        </Route>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/reset-password/:urltoken" element={<ResetPassword />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
