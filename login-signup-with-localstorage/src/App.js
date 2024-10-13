import React from 'react'
import "./index.css"
import Singnup from './LoginSignups/Singnup'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './LoginSignups/Login'
import Home from './LoginSignups/Home'
 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singnup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />

      </Routes>
    </BrowserRouter>
  )
}
 
export default App