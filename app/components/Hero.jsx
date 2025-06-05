"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image: "/image1.jpg",
      title: "Trendy. Creative. Awesome.",
      subtitle: "All you need",
      description:
        "We base our work on thorough industry, product and customer research",
    },
    {
      image: "/image2.jpg",
      title: "Modern. Innovative. Bold.",
      subtitle: "Everything you want",
      description:
        "Creating exceptional digital experiences with cutting-edge design",
    },
    {
      image: "/image3.jpg",
      title: "Fresh. Dynamic. Perfect.",
      subtitle: "Just what you need",
      description: "Transforming ideas into stunning visual solutions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  // Motion variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <AnimatePresence mode="wait" custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
          }}
          className="absolute font-nunito inset-0 bg-cover bg-center bg-fixed flex items-center justify-center"
          style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="w-fit flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8"
          >
            <motion.h3
              variants={itemVariants}
              className="font-semibold text-sm sm:text-base lg:text-[16px]"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69px] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:w-[639px] leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-[200] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-[412px] text-sm sm:text-base mt-2 sm:mt-4"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-gradient hover:bg-[#3452ff] duration-300 mt-4 sm:mt-6 ease-in-out px-6 py-3 sm:px-8 sm:py-4 lg:px-9 lg:py-4 text-sm sm:text-base"
              style={{
                zIndex: 9,
                whiteSpace: "nowrap",
                fontSize: "inherit",
                lineHeight: "25px",
                fontWeight: 300,
                color: "rgb(255, 255, 255)",
                letterSpacing: "0px",
                borderRadius: "8px",
                outline: "none",
                boxShadow: "rgb(153, 153, 153) 0px 0px 0px 0px",
                boxSizing: "border-box",
                cursor: "pointer",
                visibility: "inherit",
                textAlign: "inherit",
                minHeight: "0px",
                minWidth: "0px",
                maxHeight: "none",
                maxWidth: "none",
              }}
            >
              Discover More
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10"
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </motion.div>

      {/* Navigation Arrows with Motion */}
      <motion.button
        onClick={handlePrevSlide}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-2 sm:left-4 lg:left-8 cursor-pointer bg-black rounded-full p-2 sm:p-3 lg:p-4 hover:bg-[#00000030] top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10"
      >
        <motion.svg
          className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: -2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </motion.svg>
      </motion.button>

      <motion.button
        onClick={handleNextSlide}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 sm:right-4 lg:right-8 cursor-pointer bg-black rounded-full p-2 sm:p-3 lg:p-4 hover:bg-[#00000030] top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10"
      >
        <motion.svg
          className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: 2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default Hero;
