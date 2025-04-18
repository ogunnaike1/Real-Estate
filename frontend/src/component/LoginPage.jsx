import React from 'react'
import { IoClose } from "react-icons/io5";
import { CiMail,  CiUser, CiLock } from "react-icons/ci";
import { motion} from 'framer-motion';


const LoginPage = ({closeShowLogin}) => {
  return (
    <div className='w-full bg-white-500/20 h-screen flex justify-center items-center '>
    <motion.div  initial={{ y: -150 }}  animate={{ y: 0 }} transition={{duration:0.2}} className='bg-white h-[70vh] w-[27vw] flex flex-col rounded-2xl '>
     <div className='flex w-full border-b-[1px] border-slate-200 h-[8vh]' >
       <div className='flex items-center justify-between h-[100%]] w-[95%]  mx-auto'>
        <h1 className='text-[18px] text-indigo-950 font-[500]'>Welcome to Stonebridge</h1>
        <button onClick={closeShowLogin} className='text-[20px] font-[700]'><IoClose/></button>
     </div>
     </div>
        <div className='flex flex-col w-[80%] mx-auto h-[35vh] justify-between mt-[4vh]'>

         <div className='group border-[1px] border-slate-300 h-[6vh] focus-within:border-indigo-950 rounded-[5px] flex justify-between items-center'>
         <span className='w-[12%] flex justify-center text-[20px] group-focus-within:text-indigo-950'>  <CiUser /></span>
         <input className=' h-[90%] w-[88%] outline-0'  type="text" name="" id="" placeholder='Username or Email' />
         </div>
         <div className='group border-[1px] border-slate-300 h-[6vh] focus-within:border-indigo-950 rounded-[5px] flex justify-between items-center'>
         <span className='w-[12%] flex justify-center text-[20px] group-focus-within:text-indigo-950'> <CiLock /></span>
         <input className=' h-[90%] w-[88%] outline-0'  type="text" name="" id="" placeholder='Password' />
         </div>
        
            <button className='border-[1px] bg-indigo-950 hover:bg-indigo-900 text-white border-slate-300 h-[6vh] rounded-[5px]'>CONTINUE</button>
            <div className='flex justify-center gap-[7px]'>
              <p className='text-gray-800'>Already have an account?</p>
              <a className='text-blue-500' href="">Login</a>
            </div>
        </div>

        <div className='flex items-center justify-between mt-[5vh] w-[80%] mx-auto'>
              <div className='bg-slate-300 h-[1px] w-[45%] '></div>
              <span className='text-slate-300'>OR</span>
              <div className='bg-slate-300 h-[1px] w-[45%] '></div>
        </div>

        <a className='border-[1px] text-gray-800 border-slate-300 h-[6vh] mt-[5vh] rounded-[5px] justify-center items-center flex mx-auto w-[80%]'>
         Continue with Google
        </a>
    </motion.div>

    </div>
  )
}

export default LoginPage