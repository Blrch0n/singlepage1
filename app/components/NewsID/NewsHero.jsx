import React from "react";
import { motion } from "framer-motion";

const NewsHero = ({ imageUrl, title }) => {
  return (
    <motion.div
      className="w-full h-[400px] flex items-center justify-center bg-cover bg-center uppercase text-white text-3xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-center px-4">{title}</h1>
    </motion.div>
  );
};

export default NewsHero;
