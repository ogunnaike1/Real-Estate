import React, { useEffect, useState } from 'react'
import logo from '../assets/stonelogo.png'
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
    const { scrollY } = useScroll();
  const [bg, setBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");


  useEffect(() => {
    const handleScroll = (latest) => {
      setBg(latest > 50 ? "bg-white" : "bg-transparent");
      setTextColor(latest > 50 ? "text-indigo-950" : "text-white");
    };
    const setScroll = scrollY.on("change", handleScroll);

    return () => setScroll();
  }, [scrollY]);

  return (
    <div className={`flex ${bg} font-sans font-[700] text-[16px] ${textColor} h-[9vh]`}>
    <div className='flex justify-between w-[90%] m-auto items-center'>
        <div className=' flex gap-6 items-center'>
        <img className='h-[70px] w-[80px]' src={logo} alt="" />
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Location</a>
            <a href="">Agents</a>
            <a href="">Gallery</a>
        </div>
        <div className=' flex items-center gap-6'>
        <AnimateButton text='Sign Up'/>
        <AnimateButton text='Log In'/>
        </div>
        </div>    
    </div>
  )
}

export default Navbar

export const AnimateButton = ({text})=>{
    const { scrollY } = useScroll();
    const [buttonBg, setButtonBG] = useState("bg-transparent");
    const [buttonBorderColor, setButtonBorderColor] = useState("border-white");

  useEffect(() => {
    const handleScroll = (latest) => {
      setButtonBG(latest > 50 ? "bg-indigo-950" : "bg-transparent");
      setButtonBorderColor(latest > 50 ? "border-indigo-950" : "border-white");
   
    };
    const setScroll = scrollY.on("change", handleScroll);

    return () => setScroll();
  }, [scrollY]);
    return(
        <button className={`border-3 ${buttonBorderColor} ${buttonBg} rounded-3xl py-[10px] px-[30px] text-white `}>{text}</button>
    )
}