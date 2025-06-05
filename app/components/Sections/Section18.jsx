"use client";
import { motion } from "framer-motion";

const Section18 = () => {
  return (
    <div
      className="w-full h-[650px] sm:h-[500px] xs:h-[400px] relative bg-cover flex items-center bg-fixed justify-center bg-center px-4"
      style={{ backgroundImage: "url(/image5.jpg)" }}
    >
      <div className="absolute inset-0 bg-[#00000090]"></div>
      <motion.div
        className="relative text-white flex flex-col w-full max-w-[500px] sm:max-w-[400px] xs:max-w-[320px] items-center justify-center text-center gap-4 sm:gap-3 xs:gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-[14px] sm:text-[13px] xs:text-[12px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Want to be our client?
        </motion.p>
        <motion.h2
          className="text-[32px] sm:text-[40px] md:text-[45px] xs:text-[28px] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          No subscription, you only pay once.
        </motion.h2>
        <motion.button
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="py-3 px-8 sm:py-2.5 sm:px-6 xs:py-2 xs:px-4 text-[16px] sm:text-[14px] xs:text-[13px] font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(52, 82, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            hover: { duration: 0.2 },
            tap: { duration: 0.1 },
          }}
          viewport={{ once: true }}
        >
          Purchase theme
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Section18;
