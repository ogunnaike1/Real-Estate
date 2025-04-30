import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import LandingPageCarousel from './component/LandingPageCarousel'
import LoginPage from './component/LoginPage';
import SignUp from './component/SignUp';
import Navbar from './component/Navbar';
import AgentPage from './component/AgentPage';
import Hover from './component/Hover';
import Footer from './component/Footer';


const App= ()=> {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
    <div className='relative'>
    <div className='z-50 sticky top-0'>
        <Navbar setShowLogin ={()=> setShowLogin(true)} setShowSignUp={()=>setShowSignUp(true)} />
    </div>

    {showLogin &&
      <div  className='fixed top-0 left-0 w-full h-full z-[100] bg-black/50'>
          <LoginPage closeShowLogin={()=> setShowLogin(false)} />
      </div>
  }
  {showSignUp &&
      <div  className='fixed top-0 left-0 w-full h-full z-[100] bg-black/50'>
          <SignUp closeShowSignUp={()=> setShowSignUp(false)} />
      </div>
  }
    <Routes>
    <Route path="/"element= {<LandingPageCarousel/>} />
    <Route path="/agent" element={<AgentPage />} />
  </Routes>
  <Footer/>
  </div>

  </>

  )
}

export default App
