import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LandingPage /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/user/dashboard' element={<Dashboard />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/reset-password/:token" element={<ResetPassword />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
