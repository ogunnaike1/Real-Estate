import React from 'react'
import { MdForwardToInbox } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const AgentPage = () => {
  return (
    <>
      <div className='relative top-[-9vh] font-sans w-full'>
            <div className='h-screen text-8xl relative top-0 w-full'>
          <div className='h-screen relative top-0 w-full'>
            <img className='h-[100%] w-[100%]' src="https://en.idei.club/uploads/posts/2023-12/1703105533_en-idei-club-p-beautiful-house-inside-and-outside-dizain-16.jpg" alt="" />
            </div>
           
          </div>

          <div className='h-[5000px] bg-white relative mt-[-50vh]'>
          
            <div className='w-[80%] mx-auto h-[100vh] bg-white'>
              <div className='flex border-b-[1px] border-slate-200'>
                <div className='flex gap-[20px] h-[15vh]  w-full '>
                  <div className='h-[90px] w-[90px] mt-[-25px]'>
                    <img className='h-[100%] rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VkrGsURfsUriJFM6bAD51TjXzrcEYo2RAQ&s" alt="" />
                  </div>
                  <div className='mt-[-10px]'>
                     <div className='flex gap-[20px]'>
                      <div className='bg-indigo-900 px-[20px] py-[3px] rounded-2xl text-[14px] text-white'>
                        Agent
                      </div>
                       <div className='h-[22px]'>
                        <img className='h-[100%] w-[30px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRDlTt0IeFQReH-xeVsEytDGNdQ6_87yk4A&s" alt="" />
                       </div>

                     </div>
                     <div className='font-[500] text-[20px]'> Stonebridge</div>
                     <div className='text-green-200'> Active </div>
                     <div className='text-[12px] font-[300]'>joined 2020 june 12</div>
                  </div>
                </div>

                <div className='flex h-[15vh] gap-[10px] items-center'>
                    <button className='flex hover:bg-blue-600 items-center gap-[9px] rounded-3xl text-[16px] font-[500] border-[1px] border-slate-700 text-slate-700 px-[15px] py-[6px]'><span><MdForwardToInbox /></span><span className=''>Inbox</span> <span className='bg-indigo-900 px-[3px] text-[12px] rounded-[5px] text-white'>1</span></button>
                    <button className='flex items-center gap-[5px] rounded-3xl text-[16px] font-[500]  border-[1px] border-slate-700 text-slate-700 px-[10px] py-[5px]'><span>Settings</span> <span><CiSettings /></span></button>
                  </div>
              </div>

              <div className='w-full h-[60vh] flex justify-between bg-amber-200'>

                <div className=' flex justify-around gap-7 flex-wrap   w-[69%] h-[100%] bg-blue-500'>
                  <div className='bg-blue-200 h-[50vh] w-[31%]'> 
                    <div className='h-[45%] bg-amber-100'>
                      <img className='h-[100%] w-[100%]' src="https://www.bhg.com/thmb/TD9qUnFen4PBLDuB2hn9yhGXPv8=/1866x0/filters:no_upscale():strip_icc()/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg" alt="" />
                    </div>
                    <div>
                     <div className='h-[20vh] w-[55%] bg-amber-200 flex justify-between'>

                       <div className='h-[40px] w-[40px]'>

                         <img className='h-[100%] w-[100%] rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VkrGsURfsUriJFM6bAD51TjXzrcEYo2RAQ&s" alt="" />
                         
                       </div>

                       <div className='flex flex-col'>
                 
                       </div>
                     </div>

                    </div>

                  </div>
                  <div className='bg-blue-200 h-[40vh] w-[31%]'> 
                  </div>
                  <div className='bg-blue-200 h-[40vh] w-[31%]'> 
                  </div>
                  <div className='bg-blue-200 h-[40vh] w-[31%]'> 
                  </div>
                  <div className='bg-blue-200 h-[40vh] w-[31%]'> 
                  </div>
                </div>
                <div className='w-[29%] flex h-[100%] bg-red-500'>
             
                </div>

              </div>
            </div>

          </div>
    </div>
    </>
  )
}

export default AgentPage