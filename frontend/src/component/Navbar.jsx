import React, { useEffect, useState } from 'react'
import logo from '../assets/stonelogo.png'
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
    const { scrollY } = useScroll();
  const [bg, setBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = (latest) => {
      setBg(latest > 50 ? "bg-blue-500" : "bg-transparent");
    };
    const setScroll = scrollY.on("change", handleScroll);

    return () => setScroll();
  }, [scrollY]);

  return (
    <div className={`flex ${bg}   font-sans font-[700] text-[16px] text-white h-[9vh]`}>
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
           <button className='border-3 border-white rounded-3xl py-[10px] px-[30px] '>Sign up</button>
           <button  className='border-3 border-white rounded-3xl py-[10px] px-[30px] '>Log in</button>
        </div>
        </div>    
    </div>
  )
}

export default Navbar