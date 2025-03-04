import React, { useCallback } from 'react'
import { motion, useInView  } from 'framer-motion';
import logo from '../assets/stonelogo.png'
import { useRef } from "react";
import Navbar from './Navbar'
import useEmblaCarousel from "embla-carousel-react";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { CiMail } from "react-icons/ci";

const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://media.vrbo.com/lodging/35000000/34330000/34327800/34327788/529f0747.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  "https://static.vecteezy.com/system/resources/previews/050/785/760/non_2x/beautiful-luxury-house-with-stone-facade-and-landscaped-yard-lighting-up-at-dusk-photo.jpg",
];

const parentVariant = {
    hidden:{
        X:150,
        opacity:0
    },
    visible:{
        x:-10,
        opacity:1,
        transition:{duration:0.2, mass:0.2, damping:4, delay:0.1, type:"spring", stiffness:120, when:"beforeChildren", staggerChildren:0.2}
    }

}
const childrenVariant = {
    hidden:{
        x: 50, 
        opacity:0
    },
    visible:{
        x:0,
        opacity: 1,
        transition: { duration: 0.2, type: "spring", stiffness: 180 }
    
    }

}

const leftParentVariant = {
    hidden:{
        X:-150,
        opacity:0
    },
    visible:{
        x:10,
        opacity:1,
        transition:{duration:0.2, mass:0.2, damping:4, delay:0.1, type:"spring", stiffness:120, when:"beforeChildren", staggerChildren:0.2}
    }

}
const leftChildrenVariant = {
    hidden:{
        x: -50, 
        opacity:0
    },
    visible:{
        x:0,
        opacity: 1,
        transition: { duration: 0.2, type: "spring", stiffness: 180 }
    }

}

const LandingPageCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }), // Auto-play every 4 seconds
  ]);
  const ref = useRef(null);
  const leftRef = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const isLeftInview = useInView(leftRef, { margin: "-100px" });



  return (
   <div className='relative'>
      <div className='z-50 sticky top-0'>
        <Navbar />
    </div>
    <div className='absolute top-0 font-sans'>
        <div className='h-screen text-8xl relative top-0 w-full'>
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
    </div>
    <div className=' h-[91vh] sticky top-0 flex justify-between -z-10'>
         <div className='w-1/2 h-[100%]'>
         <img className='h-[100%]' src="https://media.designcafe.com/wp-content/uploads/2023/08/25160343/living-room-red-couch-with-recliner-lounge.jpg" alt="" />

         </div>
         <div className='w-1/2 h-[100%]'>
         <img className='h-[100%]' src="https://atlanticfinefurniture.com/cdn/shop/articles/Coastal-Design-Ideas-The-Ultimate-Guide-Atlantic-Fine-Furniture-Inc-5958_1200x_a30491ea-7df0-41ae-ac10-0f92c5fbb040_800x.png?v=1731571602" alt="" />

         </div>

    </div>
    
    <div className='h-[100vh] flex justify-between '>  {/* find your perfect home container */}
        <div className='w-[60%] h-[100%] bg-white'>
            <motion.div ref={ref} variants={parentVariant} initial="hidden"  animate={isInView ? "visible" : "hidden"}   className='flex mx-auto w-[70%] h-[100%] flex-col justify-around text-indigo-950 '>
                <motion.p variants={leftChildrenVariant} className='text-[40px] font-[600]'>
                Find Your Perfect Home
                </motion.p>
                <motion.p variants={leftChildrenVariant} className='text-[20px] font-[400]'>
                At Stonebridge, we simplify the rental process by connecting tenants with trusted real estate agents who have the perfect homes for them. Whether you're searching for a modern apartment, a family-friendly house, or a luxury rental, our platform ensures you find a space that truly feels like home—guided by professionals who know the market best.
                </motion.p>
                <motion.p variants={leftChildrenVariant}  className='text-[20px] font-[400]'>
                Finding the right home is more than just browsing listings—it’s about working with the right agent who understands your needs. Our network of experienced real estate agents ensures you get access to properties that align with your lifestyle, location preferences, and budget.
                </motion.p>
                <motion.p variants={leftChildrenVariant} className='text-[20px] font-[400]'>
                Every property on our platform is vetted for accuracy and quality. Agents provide real-time availability and detailed insights, so tenants can rent with confidence, knowing they’re making the right choice. Why waste time searching alone? Let our trusted agents guide you to the perfect rental home, hassle-free.
                </motion.p>

                <motion.button whileHover={{scale:1.1}} transition={{repeat:Infinity, type:"tween",duration: 0.5, stiffness:100, repeatType: "reverse"}} className='text-[16px] font-[700] rounded-3xl py-[12px] px-[30px]  border-3 border-indigo-950  text-indigo-950 '>I am interest</motion.button>

            </motion.div>
        </div>
        <div className='w-[40%]'>

        </div>

    </div>

    <div className='h-[10vh] bg-white'>

    </div>
    <div className='h-[10vh] bg-gray-300 '>

    </div>


    <div className='h-[100vh] flex justify-between ' >
        <div className='w-[45%] bg-gray-300 -z-30'>

        </div>
        <div className='w-[55%] h-[100%] bg-gray-300'>
        <motion.div ref={leftRef} variants={leftParentVariant} initial="hidden"  animate={ isLeftInview ? "visible" : "hidden"}   className='flex mx-auto w-[70%] h-[100%] flex-col justify-around text-indigo-950 '>
                <motion.p variants={childrenVariant} className='text-[40px] font-[600]'>
                Spacious & Elegant 3-Bedroom Flat for Rent in Bodija
                </motion.p>
                <motion.p variants={childrenVariant} className='text-[20px] font-[400]'>
                Looking for the perfect home in Bodija? Our three-bedroom flats offer the ideal blend of comfort, convenience, and modern living in one of Ibadan’s most sought-after neighborhoods. Whether you’re a family, a group of professionals, or someone who simply enjoys extra space, this home is designed to meet your needs.
                </motion.p>
                <motion.p variants={childrenVariant}  className='text-[20px] font-[400]'>
                Step into a home that exudes warmth and sophistication. Each three-bedroom flat is designed with large, airy rooms, allowing for natural light to flood in, creating a welcoming and relaxing environment. The master bedroom features an en-suite bathroom, offering a private retreat, while the additional bedrooms are perfect for children, guests, or even a home office.
                </motion.p>
                <motion.p variants={childrenVariant} className='text-[20px] font-[400]'>
                The fully fitted kitchen comes with ample cabinet space, sleek countertops, and high-quality fixtures, making cooking a delight. The open-plan living and dining areas are spacious enough for relaxation and entertainment, whether you’re hosting guests or enjoying a quiet evening at home.
                </motion.p>

                <motion.button whileHover={{scale:1.1}} transition={{repeat:Infinity, type:"tween",duration: 0.5, stiffness:100, repeatType: "reverse"}} className='text-[16px] font-[700] rounded-3xl py-[12px] px-[30px]  border-3 border-indigo-950  text-indigo-950 '>Meet the Agent</motion.button>

            </motion.div>

        </div>
    </div>
    <div className='h-[10vh] bg-gray-300 '>

    </div>

    <div className='flex  bg-white w-full py-[15vh]'>
    <div className='w-[90vw]  mx-auto flex justify-between' >
    <DivLearnMore header="Tailored Programs to Help You Find the Perfect Rental Home" text="If you're looking for a new place to rent, we offer a variety of tailored programs designed to connect you with reputable landlords and suitable properties. Our team is here to make the rental process easier, ensuring you find a home that meets your needs with minimal stress." ></DivLearnMore>
    <motion.div      animate={{ y: [0, -40, 0] }} // Moves up and down
            transition={{
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Smooth looping
              duration: 5,
              delay:1.5, // 1 second per cycle
              ease: "easeInOut", // Smooth easing
            }}
            className='bg-indigo-950 text-white text-[18px] w-[28%] text-center py-[30px] px-[30px] flex flex-col gap-[15px]  shadow-gray-600 shadow-lg  '>
            <p className='font-[700] '>Comprehensive Services to Match Tenants with the Right Rental Properties</p>
            <p className='font-[400] text-[16px]'>hether you're a tenant searching for a home or a landlord looking for reliable renters, our expert services help facilitate the perfect match. From property listings to lease agreements, we streamline the entire process, making renting simple and hassle-free for everyone involved.</p>
            <button>Learn more</button>
            </motion.div>
    <DivLearnMore header="Innovative Solutions to Simplify the Rental Process for Both Tenants and Landlords" text="Finding the right rental home or tenant can be a challenge, but our specialized solutions are designed to make the process as smooth as possible. We provide expert guidance, property recommendations, and seamless communication between landlords and tenants to ensure a stress-free renting experience." ></DivLearnMore>
    </div>
    </div>

    <div>
        <div  className='bg-gray-300 pb-[3vh]'>
            <div className=' flex mx-auto w-[80%] flex-col'>
                <div className=''> 
      
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

    </div>

 
  )
}

export default LandingPageCarousel

export const DivLearnMore = ({header, text}) =>{
    return(
            <motion.div   
            animate={{ y: [0, -40, 0] }} // Moves up and down
            transition={{
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Smooth looping
              duration: 5, // 1 second per cycle
              ease: "easeInOut", // Smooth easing
            }}
            className='bg-indigo-950 text-white text-[18px] w-[28%] text-center py-[30px] px-[30px] flex flex-col gap-[15px]  shadow-gray-600 shadow-lg '>
            <p className='font-[700] '>{header}</p>
            <p className='font-[400] text-[16px]'>{text}</p>
            <button>Learn more</button>
            </motion.div>

    )
}