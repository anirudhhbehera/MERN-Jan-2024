import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {  Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Service } from './pages/Service';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/service" element={<Service/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="*" element={<Error/>} /> 

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
