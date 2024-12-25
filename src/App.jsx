import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './pages/About'
import New from './pages/New'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/new' element={<New/>}/>
    </Routes>
    </BrowserRouter>
    <About/>
    </>
  )
}

export default App
