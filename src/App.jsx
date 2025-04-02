import { useState } from 'react'
import './App.css'
import Weather from './Component/Weather'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
    </>
  )
}

export default App
