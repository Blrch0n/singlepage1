"use client";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { motion } from "framer-motion";

const section17Data = [
  {
    icon: <MdOutlinePhoneIphone className="text-[40px] text-[#fcb03b]" />,
    title: "Phone",
    description: "+1 234 567 890",
  },
  {
    icon: <IoMailOpen className="text-[40px] text-[#f15b26]" />,
    title: "Email",
    description: "iDzI5@example.com",
  },
  {
    icon: <MdContactMail className="text-[40px] text-[#3cb878]" />,
    title: "Address",
    description: "123 Main Street, City, Country",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Section17 = () => {
  return (
    <motion.div
      className="w-full h-fit bg-[#eeeeee]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-[1200px] mx-auto w-full h-fit grid grid-cols-1 md:grid-cols-3 text-black items-center justify-center px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {section17Data.map((data, index) => (
          <motion.div
            key={index}
            className={`w-full h-fit flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center p-4 sm:p-8 ${
              index < section17Data.length - 1
                ? "border-b md:border-b-0 md:border-r border-gray-300"
                : ""
            }`}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div variants={iconVariants} whileHover="hover">
              {data.icon}
            </motion.div>
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.5,
              }}
            >
              <motion.p
                className="text-[14px] text-[#828282]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {data.title}
              </motion.p>
              <motion.h1
                className="text-[20px] sm:text-[25px] text-[#2A2F35] font-bold break-words"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {data.description}
              </motion.h1>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Section17;
