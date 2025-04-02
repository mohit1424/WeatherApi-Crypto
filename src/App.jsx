import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weather from './Component/Weather'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Weather" element={<Weather/>} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
