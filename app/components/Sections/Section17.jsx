"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Section17 = () => {
  const router = useRouter();
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
        <p className="text-[14px] sm:text-[13px] xs:text-[12px]">
          Want to be our client?
        </p>
        <h2 className="text-[32px] sm:text-[40px] md:text-[45px] xs:text-[28px] leading-tight">
          No subscription, you only pay once.
        </h2>
        <button
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
          className="py-3 px-8 sm:py-2.5 sm:px-6 xs:py-2 xs:px-4 text-[16px] sm:text-[14px] xs:text-[13px] font-medium hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          Purchase theme
        </button>
      </motion.div>
    </div>
  );
};

export default Section17;
