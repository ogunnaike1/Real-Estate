import React from 'react'
import { IoClose } from "react-icons/io5";

const LoginPage = () => {
  return (
    <div className='w-full bg-red-400 h-screen flex justify-center items-center '>

    <div className='bg-white h-[80vh] w-[27vw] flex rounded-2xl'>
     <div className='flex items-center justify-between h-[5vh] w-full bg-red-200'>
        <h1>Welcome to Stonebridge</h1>
        <div className='flex text-3xl'><IoClose /></div>
     </div>
        <div>

        </div>
    </div>

    </div>
  )
}

export default LoginPage