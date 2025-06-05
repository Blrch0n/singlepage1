"use client";
import { motion } from "framer-motion";

const section16Data = [
  "https://max-themes.net/demos/enside/main/upload/logo-b-2.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-3.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-4.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-7.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-8.png",
];

const Section16 = () => {
  return (
    <motion.div
      className="w-full h-fit bg-[#fff] py-[60px] sm:py-[80px] lg:py-[110px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1200px] mx-auto w-full h-fit px-4 sm:px-6 lg:px-8">
        {/* Header Section - Simplified */}
        <div className="mb-6 sm:mb-8 w-full h-fit flex flex-col items-center justify-center">
          <h3 className="text-[#828282] font-semibold text-[12px] sm:text-[14px] lg:text-[16px] uppercase tracking-wider mb-2">
            friends
          </h3>
          <h2 className="text-[32px] sm:text-[48px] lg:text-[72px] w-full sm:w-[480px] lg:w-[570px] text-center text-[#2A2F35] leading-tight mb-4 px-4">
            Our Partners and Brands
          </h2>
          <span
            className="block h-1 sm:h-1.5 w-6 sm:w-8 rounded-full mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%)",
            }}
          />
          <p className="text-[#808080] w-full sm:w-[480px] lg:w-[570px] text-center text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Our team of strategists, designers, and engineers deliver valuable,
            tangible customer experiences
          </p>
        </div>

        {/* Logo Grid - Simplified */}
        <div className="w-full h-fit grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8">
          {section16Data.map((data, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex flex-row items-center justify-center p-2 sm:p-3 lg:p-4 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={data}
                alt={`Partner logo ${index + 1}`}
                className="grayscale hover:grayscale-0 w-full max-w-[120px] sm:max-w-[160px] lg:max-w-[210px] h-auto transition-all duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Section16;
