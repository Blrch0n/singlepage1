"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      title: "Trendy. Creative. Awesome.",
      subtitle: "All you need",
      description:
        "We base our work on thorough industry, product and customer research",
    },
    {
      image: "/image3.jpg",
      title: "Modern. Innovative. Bold.",
      subtitle: "Everything you want",
      description:
        "Creating exceptional digital experiences with cutting-edge design",
    },
    {
      image: "/image4.jpg",
      title: "Fresh. Dynamic. Perfect.",
      subtitle: "Just what you need",
      description: "Transforming ideas into stunning visual solutions",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-4">
                {slide.subtitle}
              </h3>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                {slide.title}
              </h2>

              <p className="font-light text-sm sm:text-base lg:text-lg max-w-2xl mb-8">
                {slide.description}
              </p>

              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-20"
      >
        <svg
          className="w-6 h-6"
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
        onClick={handleNext}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-20"
      >
        <svg
          className="w-6 h-6"
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

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
