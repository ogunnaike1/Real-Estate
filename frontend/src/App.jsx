import React from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import LandingPageCarousel from './component/LandingPageCarousel'
import LoginPage from './component/LoginPage';

function App() {

  return (

    <Routes>

    <Route path="/" element= {<LandingPageCarousel/>} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>

  )
}

export default App
