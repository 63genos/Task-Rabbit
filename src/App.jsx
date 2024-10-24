import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import LoginP from './components/LoginP'
import Logged from './components/Logged'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginP />
      <Logged />
    </>
  )
}

export default App
