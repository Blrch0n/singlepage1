"use client";
import React from "react";
import { motion } from "framer-motion";

const section10Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/office-interior-3.jpg",
    title: "Our services",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/office-man.jpg",
    title: "Support team",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/coffe-vertical.jpg",
    title: "Contact us",
  },
];

const Section10 = () => {
  return (
    <motion.div
      className="w-full h-fit grid grid-cols-1  lg:grid-cols-3 md:gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {section10Data.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[150px] group relative items-center justify-center text-center p-2 sm:p-4 cursor-pointer overflow-hidden"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-[#000000c2] group-hover:bg-[#3452ffc2] transition-all duration-300 ease-in-out"
            whileHover={{
              backgroundColor: "#3452ffc2",
              transition: { duration: 0.3 },
            }}
          />

          <motion.h3
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-semibold text-white relative p-2 rounded z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              textShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.h3>

          {/* Animated border effect */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-lg md:rounded-none"
            whileHover={{
              borderColor: "#3452ff",
              boxShadow: "0 0 20px rgba(52, 82, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Subtle shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-lg md:rounded-none"
            whileHover={{
              opacity: 0.1,
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Section10;
