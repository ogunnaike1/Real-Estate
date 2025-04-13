import React from 'react'
import { MdForwardToInbox } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";
import { MdRecentActors } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";

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

              <div className='w-full  flex justify-between mt-[5vh]'>

                <div className=' flex justify-around gap-7 flex-wrap   w-[69%] h-[100%] '>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                <DivExploreProperty/>
                </div>
                <div className='w-[29%] flex h-[100vh] flex-col bg-blue-200'>

                  <div className='w-[100%] mt-[10px]'>
                    <h3 className='ml-[10px] text-[16px] font-[700]'>Details</h3>

                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-indigo-900'><IoChatbubbles /></span> <span className='text-slate-500'>Response Time</span></div>
                      <div>2 days</div>
                    </div>

                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-blue-700'><MdRecentActors /></span> <span className='text-slate-500'>Recent Closings</span></div>
                      <div>2 days ago</div>
                    </div>

                    
                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-amber-400'><FaStar /></span> <span className='text-slate-500'>Ratings</span></div>
                      <div>200</div>
                    </div>

                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-green-500'><BsFillClockFill /></span> <span className='text-slate-500'>Last Seen</span></div>
                      <div>Today</div>
                    </div>

                  </div>

                  <div className='mt-[5vh] border-t-[1px] border-gray-400 max-h-[40vh] overflow-y-auto'>
                    <h3 className='ml-[10px] text-[16px] font-[700] mt-[10px] mb-[5px]'>Property Type</h3>
                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-indigo-900'><IoChatbubbles /></span> <span className='text-slate-500'>Bungalow</span></div>
                     
                    </div>

                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-indigo-900'><IoChatbubbles /></span> <span className='text-slate-500'>Two bedroom flat</span></div>
                      <div>2 days</div>
                    </div>
                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-indigo-900'><IoChatbubbles /></span> <span className='text-slate-500'>Three bedroom flatt</span></div>
                      <div>Available</div>
                    </div>

                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-indigo-900'><IoChatbubbles /></span> <span className='text-slate-500'>Studio Apartment</span></div>
                      <div>Available</div>
                    </div>

                    <div className='flex text-[16px] font-[700] w-[90%] mx-auto items-center justify-between h-[6vh] border-b-[1px] border-gray-400 '>
                      <div className='flex items-center gap-[10px]'><span className='text-indigo-900'><IoChatbubbles /></span> <span className='text-slate-500'>Warehouse</span></div>
                      <div>Available</div>
                    </div>
                  </div>
               
             
                </div>

              </div>
            </div>

          </div>
    </div>
    </>
  )
}

export default AgentPage

export const DivExploreProperty = () =>{
  return(
    <div className=' h-[45vh] w-[31%] shadow-lg border-[1px] border-gray-400 rounded-[8px]'> 
                    <div className='h-[50%] bg-amber-100 rounded-t-[8px]'>
                      <img className='h-[100%] w-[100%] rounded-t-[8px]' src="https://www.bhg.com/thmb/TD9qUnFen4PBLDuB2hn9yhGXPv8=/1866x0/filters:no_upscale():strip_icc()/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg" alt="" />
                    </div>
                    <div className='flex gap-[15%] '>
                      <div className='h-[6vh] w-[55%]  flex gap-[10px]'>

                        <div className='h-[40px] w-[40px] ml-[5px]'>

                          <img className='h-[100%] w-[100%] rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VkrGsURfsUriJFM6bAD51TjXzrcEYo2RAQ&s" alt="" />
                          
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[14px] text-slate-400'>Stonebridge</span>
                            <span className='text-green-400 text-[14px]'>Available</span>
                        </div>
                      </div>

                      <div className='flex items-center text-[18px] font-[600]'>
                      <span className='text-indigo-900 mr-[10px]'>#90000</span>

                      </div>

                    </div>

                    <div className='mt-[10px]'>
                       <h2 className=' w-full text-center  font-[500] text-[16px] line-clamp-2 text-slate-700'>Spacious 3-Bedroom Flat in the Heart of Bodija – Comfort & Convenience Combined</h2>
                       <div className='flex items-center justify-between mt-[15px] w-[95%] mx-auto'>
                        <button className='px-[18px] rounded-[5px] h-[40px] border-[1px] border-gray-400'><MdFavorite /></button>
                        <button className='bg-indigo-900 text-white flex items-center gap-[5px] px-[18px] h-[40px] rounded-[5px] '> <span><MdOutlineTravelExplore /></span> <span>Explore Property</span></button>
                       </div>
                    </div>

                  </div>
  )
}