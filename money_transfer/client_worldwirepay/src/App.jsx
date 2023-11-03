import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      {/* <Dashboard /> */}
    </>
  )
}

export default App
