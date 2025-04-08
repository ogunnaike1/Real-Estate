import React, { useEffect, useState } from 'react'
import logo from '../assets/stonelogo.png'
import { motion, useScroll } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

const Navbar = ({setShowLogin, setShowSignUp}) => {
    const { scrollY } = useScroll();
  const [bg, setBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [borderColor, setBorderColor] = useState("border-white");
  const [isAuthentication, setIsAuthentication] = useState(true);


  useEffect(() => {
    const handleScroll = (latest) => {
      setBg(latest > 50 ? "bg-white" : "bg-transparent");
      setTextColor(latest > 50 ? "text-indigo-950" : "text-white");
      setBorderColor(latest > 50 ? "border-indigo-950" : "border-white" )
    };
    const setScroll = scrollY.on("change", handleScroll);

    return () => setScroll();
  }, [scrollY]);



  return (
    <div className={`flex ${bg} font-sans font-[700] text-[16px] ${textColor} h-[9vh]`}>
    <div className='flex justify-between w-[90%] m-auto items-center'>
        <div className=' flex items-center'>
        <img className='h-[70px] w-[80px]' src={logo} alt="" />
            <a className= {`${ bg === "bg-white" ? "hover:text-white hover:bg-indigo-950" : "hover:text-indigo-950 hover:bg-white"} px-[25px] py-[10px] rounded-3xl`} href="">Home</a>
            <a className= {`${ bg === "bg-white" ? "hover:text-white hover:bg-indigo-950" : "hover:text-indigo-950 hover:bg-white"} px-[25px] py-[10px] rounded-3xl`}  href="">About Us</a>
            <a className= {`${ bg === "bg-white" ? "hover:text-white hover:bg-indigo-950" : "hover:text-indigo-950 hover:bg-white"} px-[25px] py-[10px] rounded-3xl`}  href="">Location</a>
            <a className= {`${ bg === "bg-white" ? "hover:text-white hover:bg-indigo-950" : "hover:text-indigo-950 hover:bg-white"} px-[25px] py-[10px] rounded-3xl`}  href="">Agents</a>
            <a className= {`${ bg === "bg-white" ? "hover:text-white hover:bg-indigo-950" : "hover:text-indigo-950 hover:bg-white"} px-[25px] py-[10px] rounded-3xl`}  href="">Gallery</a>
        </div>
        <div className=' flex items-center gap-6'>
        { isAuthentication ?
        (
          <>
          <DivButton onClick={setShowSignUp} text='Sign Up'/>
          <DivButton onClick={setShowLogin} text='Log In'/>
          </>
        )
          :
          (
            <>
        <div className={ `flex items-center  h-[9vh] gap-[15px] ${textColor}` }>
            <button className={`h-[40px] w-[40px] text-2xl flex items-center justify-center rounded-[50%] border-[1px]  ${borderColor} `}><IoIosSearch /></button>
            <button className='h-[100%] flex items-center'> <img className={`h-[40px] w-[40px] border-[1px] ${borderColor} rounded-[50%]`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VkrGsURfsUriJFM6bAD51TjXzrcEYo2RAQ&s" alt="" /></button>
            <button className={`flex items-center text-2xl gap-[6px]  border-[1px] ${borderColor} px-[14px] py-[8px] rounded-3xl `}>
              <span><CiBellOn /></span>
              <span className='text-[14px]'>0</span>
            </button>
          </div>
          </>

          )
        }
      
        </div>
        </div>    
    </div>
  )
}

export default Navbar

export const DivButton = ({text, onClick})=>{
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
        <button onClick={onClick} className={` ${ buttonBg === "bg-transparent" ? "hover:text-indigo-950 hover:bg-white" : "hover:text-indigo-950 hover:bg-white"} border-3 ${buttonBorderColor} ${buttonBg} rounded-3xl py-[10px] px-[30px] text-white `}>{text}</button>
    )
}