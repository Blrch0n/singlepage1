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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full h-fit bg-[#fff] py-[110px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1200px] mx-auto w-full h-fit">
        <motion.div
          className="mb-8 w-full h-fit flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h3
            className="text-[#828282] font-semibold text-[16px] uppercase tracking-wider mb-2"
            variants={itemVariants}
          >
            friends
          </motion.h3>
          <motion.h2
            className="text-[72px] w-[570px] text-center text-[#2A2F35] leading-tight mb-4"
            variants={itemVariants}
          >
            Our Partners and Brands
          </motion.h2>
          <motion.span
            className="block h-1.5 w-8 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%)",
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          ></motion.span>
          <motion.p
            className="text-[#808080] w-[570px] text-center text-base lg:text-lg leading-relaxed"
            variants={itemVariants}
          >
            Our team of strategists, designers, and engineers deliver valuable,
            tangible customer experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full h-fit grid grid-cols-5 gap-4 p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {section16Data.map((data, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex flex-row items-center justify-center"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={data}
                alt={data}
                className="grayscale-100 w-[210px] h-auto hover:grayscale-0 duration-300"
                whileHover={{
                  filter: "grayscale(0%)",
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section16;
