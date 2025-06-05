"use client";
import React from "react";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <motion.div
      className="w-full h-fit flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #664ed3 0%, #bf67ef 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-full h-fit flex max-w-[1200px] flex-row items-center justify-between text-white p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-1/2 h-full flex flex-col items-start justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-[30px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Creative Spirit
          </motion.h1>
          <motion.p
            className="text-[#b8b8b8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            The pieces we make are the free thoughts that come with daily work
            given a physical form
          </motion.p>
        </motion.div>
        <motion.button
          style={{
            background: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
            color: "#fff",
            border: "none",
            padding: "0.7rem 1.7rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            y: -2,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          See all Features
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Section3;
