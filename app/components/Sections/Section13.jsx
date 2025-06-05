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
      <div className="max-w-[1200px] w-full mx-auto h-fit flex flex-row items-center justify-between p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[30px] text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className="text-[#b8b8b8]"
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
          className="text-white py-3 px-8 rounded-[5px]"
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
