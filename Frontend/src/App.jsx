import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React from 'react'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Login from './Components/Login'
import Map from './Components/Map'
import Help from './Components/Help'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>  
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
    <Route path='/ride'element={<Map/>}></Route>
  </Routes>
    <Help/> 
  </BrowserRouter>
    </>
  )
}

export default App