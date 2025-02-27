import React, { useCallback } from 'react'
import { motion, spring } from 'framer-motion';
import Navbar from './Navbar'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://media.vrbo.com/lodging/35000000/34330000/34327800/34327788/529f0747.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  "https://static.vecteezy.com/system/resources/previews/050/785/760/non_2x/beautiful-luxury-house-with-stone-facade-and-landscaped-yard-lighting-up-at-dusk-photo.jpg",
];

const LandingPageCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }), // Auto-play every 4 seconds
  ]);


  return (
    <div className='relative font-sans'>
        <div className='z-50 sticky top-0'>
        <Navbar />
        </div>
        <div className='h-screen text-8xl absolute top-0 w-full'>
                <div className="relative h-[100%]  w-full">
            {/* Embla Carousel Container */}
            <div className="overflow-hidden h-[100%] w-full" ref={emblaRef}>
                <div className="flex">
                {images.map((src, index) => (
                    <div key={index} className="flex-[0_0_100%]">
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[100%] object-cover" />
                    </div>
                ))}
                </div>
            </div>
            <motion.div initial={{y:100, opacity: 0 }} animate={{y:10, opacity: 1}} transition={{delay:0.5, type:"spring", stiffness:150}} className= ' absolute top-1/2 font-sans  w-[100%] flex flex-col gap-5 items-center'>
                <h1 className='text-[60px] font-[700] text-white '>Three bedrooms apartment</h1>
                <p className='text-[30px] font-[400] text-white '>spacious 2 and 3 bedroom student's apartment</p>
                <motion.button whileHover={{scale:1.1}} transition={{repeat:Infinity, type:"tween",duration: 0.5, stiffness:100, repeatType: "reverse"}} className='text-[16px] font-[700] rounded-3xl py-[12px] px-[30px]  border-3 border-white text-white '>Meet the Agent</motion.button>
            </motion.div>
            </div>
        </div>

        <div className='bg-red-500 h-[200vh]'></div>
    </div>
  )
}

export default LandingPageCarousel