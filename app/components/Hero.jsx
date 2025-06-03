"use client";
import React, { useState, useEffect, useRef } from "react";

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

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute font-nunito inset-0 bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="w-fit flex flex-col items-center justify-center text-center text-white">
            <h3 className="animate-fade-in-up font-semibold text-[16px]">
              {slide.subtitle}
            </h3>
            <h2 className="text-[69px] animate-fade-in-up w-[639px] animation-delay-200">
              {slide.title}
            </h2>
            <p className="animate-fade-in-up font-[200] w-[412px] animation-delay-400">
              {slide.description}
            </p>
            <button
              className="btn-gradient hover:bg-[#3452ff] duration-300 mt-4 ease-in-out animate-fade-in-up animation-delay-600"
              style={{
                zIndex: 9,
                whiteSpace: "nowrap",
                fontSize: "16px",
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
                transition: "none",
                textAlign: "inherit",
                padding: "17px 37px",
                minHeight: "0px",
                minWidth: "0px",
                maxHeight: "none",
                maxWidth: "none",
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)",
                transformOrigin: "50% 50% 0px",
              }}
            >
              Discover More
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-8 cursor-pointer bg-black rounded-full p-4 hover:bg-[#00000030] top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-8 cursor-pointer bg-black rounded-full p-4 hover:bg-[#00000030] top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
