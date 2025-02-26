import React, { useCallback } from 'react'
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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className='relative'>
        <div className='relative z-50'>
        <Navbar />
        </div>
        <div className='h-screen bg-red-500 text-8xl absolute top-0 w-full'>
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

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
            >
                ◀
            </button>
            <button
                onClick={scrollNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
            >
                ▶
            </button>
            </div>
        </div>
    </div>
  )
}

export default LandingPageCarousel