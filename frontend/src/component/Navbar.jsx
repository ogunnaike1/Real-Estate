import React from 'react'
import logo from '../assets/stonelogo.png'

const Navbar = () => {
  return (
    <div className=' flex bg-gray-400  font-sans font-[700] text-[16px] text-white h-[9vh]'>
    <div className='flex justify-between w-[95%] m-auto items-center'>
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