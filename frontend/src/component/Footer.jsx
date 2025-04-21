import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import logo from '../assets/stonelogo.png'

const Footer = () => {
  return (
    <div>
        <div  className='bg-gray-300 pb-[3vh]'>
            <div className=' flex mx-auto w-[80%] flex-col'>
                <div className=''> 
                <img className='h-[20vh]' src={logo} alt="" />
                </div>
                
                <div className='h-[40vh] bg-gray-300 flex justify-between text-[14px] ml-[2]'>
                    <div className='flex gap-[5px] flex-col '>
                        <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>Home</span></a>
                        <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>About Us</span> </a>
                        <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>Listings</span> </a>
                        <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>Gallery</span> </a>
                    </div>

                    <div>
                    <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>Contact Us</span> </a>
                    <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>Privacy Policy</span> </a>
                    <a className='flex items-center gap-[2px]' href=""><FaAngleRight /> <span>Terms & Conditions</span> </a>
                    
                    </div>

                    <div className=''>
                        <span className='font-[700]'>Contact Us</span>
                        <a className='flex items-center gap-[2px]' href=""><span><IoLocationOutline /></span> <span >N0 15 okeolugbade street, igbeba, ijebu-ode</span></a>
                        <a className='flex items-center gap-[2px]' href=""><FaWhatsapp /> <span>+234-813-985-65</span></a>
                        <a className='flex items-center gap-[2px]' href=""><CiMail /> <span>Stonebridge@gmail.com</span></a>
                
                        
                    </div>
                       
                        <div className='flex h-[20vh] flex-col gap-[10px]'>
                        <span className='font-[700]'>Remain Updated</span>
                        <input className='w-[20vw] h-[8vh]  bg-white' type="text" placeholder='Your Email Address'/>
                        <button className='bg-indigo-950 text-white w-[6vw] h-[7vh]'>Sign up</button>
                        </div>

                </div>
            </div>
            <div className='text-[14px] text-center'>© 2025 All Rights Reserved </div>
        </div>
       
    </div>
  )
}

export default Footer