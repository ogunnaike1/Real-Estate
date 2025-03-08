import React from 'react'
import { IoClose } from "react-icons/io5";

const LoginPage = () => {
  return (
    <div className='w-full bg-red-400 h-screen flex justify-center items-center '>

    <div className='bg-white h-[80vh] w-[27vw] flex flex-col rounded-2xl'>
     <div className='flex w-full border-b-[1px] border-slate-200 h-[8vh]' >
       <div className='flex items-center justify-between h-[100%]] w-[95%]  mx-auto'>
        <h1 className='text-[18px] font-[500]'>Welcome to Stonebridge</h1>
       
     </div>
     </div>
        <div className='flex flex-col w-[80%] mx-auto h-[30vh] justify-between mt-[4vh]'>
            <input className='border-[1px] border-slate-300 h-[6vh] rounded-[5px]' type="text" name="" id="" />
            <input className='border-[1px] border-slate-300 h-[6vh] rounded-[5px]' type="email" name="" id="" />
            <input className='border-[1px] border-slate-300 h-[6vh] rounded-[5px]' type="text" />
            <input className='border-[1px] border-slate-300 h-[6vh] rounded-[5px]' type="text" />
        </div>
    </div>

    </div>
  )
}

export default LoginPage