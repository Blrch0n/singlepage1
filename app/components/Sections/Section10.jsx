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
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 md:gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {section10Data.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[150px] group relative items-center justify-center text-center p-2 sm:p-4 cursor-pointer overflow-hidden hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[#000000c2] group-hover:bg-[#3452ffc2] transition-colors duration-300" />

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-semibold text-white relative p-2 rounded z-10 group-hover:scale-110 transition-transform duration-300">
            {item.title}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Section10;
