"use client";
import { motion } from "framer-motion";
import { FiWatch } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { GoPlug } from "react-icons/go";

const section8Data = [
  {
    icon: <FiWatch size={40} color="white" />,
    title: "Unlimited Colors",
    color: "#664ed3",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
  {
    icon: <TfiWorld size={40} color="white" />,
    title: "High Quality Design",
    color: "#ff1053",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
  {
    icon: <GoPlug size={40} color="white" />,
    title: "Luxurious Layouts",
    color: "#737884",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
];

const Section8 = () => {
  return (
    <motion.div
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {section8Data.map((item, index) => (
        <motion.div
          key={index}
          style={{ backgroundColor: item.color }}
          className="flex flex-col items-center sm:items-start justify-start text-white gap-4 py-[40px] px-[30px] sm:py-[50px] sm:px-[40px] lg:py-[60px] lg:px-[50px] min-h-[280px] sm:min-h-[300px]"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <motion.span
            className="p-4 w-[64px] h-[64px] sm:p-5 sm:w-[74px] sm:h-[74px] flex items-center justify-center border-2 rounded-2xl sm:rounded-3xl border-white"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              borderColor: "#ffffff",
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
            </motion.div>
          </motion.span>

          <motion.h3
            className="text-[14px] sm:text-[16px] font-bold mt-2 text-center sm:text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.h3>

          <motion.p
            className="text-center sm:text-start text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {item.desciption}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Section8;
