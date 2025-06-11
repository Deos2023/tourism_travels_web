'use client'

import tourData from "./lib/tour-data";
import TourSlider from "../app/components/TourSlider";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TourImageGrid from "./components/TourImageGrid";

const typingText = 'Travel with greatness';
const allTours = [
  ...tourData.national.slice(0, 3),
  ...tourData.international.slice(0, 3),
  ...tourData.jungle.slice(0, 3),
].map((tour) => ({
  ...tour,
  title: tour.name,
  image: tour.images[0], // use the first image
}));

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const { national, international, jungle } = tourData;

  return (
    <>
      <div className="relative min-h-screen flex overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Hero Image with Animated Text */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
            <Image 
              src="/img/4.jpg" 
              alt="Hero" 
              layout="fill" 
              objectFit="cover" 
              className="grayscale" 
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
              <motion.h1 
                className="text-white text-3xl md:text-5xl font-ephesis px-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {displayedText}
                <motion.span 
                  className="ml-1 inline-block h-8 w-1 bg-white"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.h1>
            </div>
          </div>

          {/* Right Section - Three Auto Sliding Services */}
          <div className="w-full md:w-1/2 grid grid-rows-3 h-[50vh] md:h-screen">
            <SliderSection 
              images={["/img/2.jpg", "/img/3.jpg", "/img/4.jpg"]} 
              label="International Tour" 
              direction="right" 
              bg="bg-sky-100" 
              delay={0}
            />
            <SliderSection 
              images={["/img/1.jpg", "/img/5.jpg", "/img/3.jpg"]} 
              label="National Tour" 
              direction="left" 
              bg="bg-blue-200" 
              delay={1}
            />
            <SliderSection 
              images={["/img/2.jpg", "/img/1.jpg", "/img/5.jpg"]} 
              label="Jungle Safari" 
              direction="right" 
              bg="bg-green-200" 
              delay={2}
            />
          </div>
        </div>
      </div>

      {/* Travel Search Bar Section */}
      <div className="w-full bg-neutral-900 py-6 flex justify-center items-center">
        <div className="flex gap-4 flex-wrap md:flex-nowrap px-4">
          <input type="text" placeholder="Where to?" className="w-64 px-4 py-4 bg-neutral-900 text-white border border-white focus:outline-none placeholder-white" />
          <input type="text" placeholder="When?" className="w-64 px-4 py-4 bg-neutral-900 text-white border border-white focus:outline-none placeholder-white" />
          <input type="text" placeholder="Travel Type" className="w-64 px-4 py-4 bg-neutral-900 text-white border border-white focus:outline-none placeholder-white" />
          <button className="w-40 px-4 py-4 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300">FIND NOW</button>
        </div>
      </div>

          <div className="">
      {/* <h1 className="text-2xl font-bold mb-4">Featured Tours</h1> */}
      <TourSlider data={allTours} basePath="tours" />
      <TourImageGrid
  data={[
    ...tourData.national,
    ...tourData.international,
    ...tourData.jungle,
  ]}
  basePath="/explore"
/>

    </div>

    </>
  );
}

function SliderSection({ images, label, direction = 'left', bg, delay }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000 + delay * 1000);

    return () => clearInterval(interval);
  }, [current, images.length, delay, isHovered]);

  const variants = {
    enter: (direction) => ({
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0.5,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    exit: (direction) => ({
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0.5,
      scale: 0.95,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <div 
      className={`relative ${bg} overflow-hidden h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={images[current]} 
            alt={label} 
            layout="fill" 
            objectFit="cover" 
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h2 
          className="text-white text-xl md:text-3xl font-ephesis drop-shadow-lg mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {label}
        </motion.h2>

        {/* Dots indicator */}
        <div className="flex gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      

    </div>
  );
}