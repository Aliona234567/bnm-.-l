// import React, { Component } from 'react' 
import React from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import About from './Components/peges/About'
import Contact from './Components/peges/Contact'
import Service from './Components/peges/Service'
import Home from './Components/peges/Home'
import Tovar from './Components/peges/Tovar'

export default function App(){
  return <div className='App'>
    {/* <Navbar/> */}
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contsct' element={<Contact/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/Tovar' element={<Tovar/>} />


    </Routes>
  </div>
}
