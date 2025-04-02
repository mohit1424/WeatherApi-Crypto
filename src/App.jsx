import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weather from './Component/Weather'
import Home from './Component/Home'
import Crypto from './Component/Crypto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Weather" element={<Weather/>} /> 
      <Route path="/Crypto" element={<Crypto/>} /> 
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
