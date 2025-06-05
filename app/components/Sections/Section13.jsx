"use client";
import { motion } from "framer-motion";

const Section13 = () => {
  return (
    <motion.div
      className="w-full h-fit"
      style={{
        background: "linear-gradient(to right, #664ed3 0%, #87d14b 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[1200px] w-full mx-auto h-fit flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <h2 className="text-[24px] md:text-[30px] text-white mb-2">
            Get in touch
          </h2>
          <p className="text-[#b8b8b8] text-sm md:text-base">
            Want to Know More About Us? Get In Touch
          </p>
        </div>
        <button
          style={{
            background: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
          }}
          className="text-white py-3 px-6 md:px-8 rounded-[5px] sm:w-fit w-full md:w-auto text-sm md:text-base hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          See all Features
        </button>
      </div>
    </motion.div>
  );
};

export default Section13;
