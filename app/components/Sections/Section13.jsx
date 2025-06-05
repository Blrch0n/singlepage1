"use client";
import { motion } from "framer-motion";

const Section13 = () => {
  return (
    <motion.div
      className="w-full h-fit"
      style={{
        background: "linear-gradient(to right, #664ed3 0%, #87d14b 100%)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[1200px] w-full mx-auto h-fit flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-6 md:gap-0">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[24px] md:text-[30px] text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className="text-[#b8b8b8] text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Want to Know More About Us? Get In Touch
          </motion.p>
        </motion.div>
        <motion.button
          style={{
            background: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
          }}
          className="text-white py-3 px-6 md:px-8 rounded-[5px] sm:w-fit w-full md:w-auto text-sm md:text-base"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          See all Features
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Section13;
