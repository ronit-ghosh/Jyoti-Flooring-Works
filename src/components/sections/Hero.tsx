"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import SplitText from "../ui/split-text";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  const images = [
    "https://res.cloudinary.com/drynqkitl/image/upload/v1736151698/WhatsApp_Image_2025-01-05_at_18.51.28_4f8b9d0c_zzbef3.jpg",
    "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg",
    "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/1_colqzb.jpg",
  ];
  return (
    <ImagesSlider className="h-[54rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="font-bold text-center py-4 flex flex-col">
          <SplitText
            text="Jyoti Flooring Works"
            className="font-semibold text-center text-4xl md:text-7xl pb-2 text-neutral-200"
            delay={60}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <span className="text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Always affordable prices and perfect quality
          </span>
        </div>
        <a href="#contact">
          <button className="px-4 py-2 backdrop-blur-sm border bg-[#f58129]/10 border-[#f58129]/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Contact now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#f58129] to-transparent" />
          </button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
}
