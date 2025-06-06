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

const Section16 = () => {
  return (
    <motion.div
      className="w-full h-fit bg-[#eeeeee]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1200px] mx-auto w-full h-fit grid grid-cols-1 md:grid-cols-3 text-black items-center justify-center px-4 md:px-0">
        {section17Data.map((data, index) => (
          <motion.div
            key={index}
            className={`w-full h-fit flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center p-4 sm:p-8 transition-transform duration-300 ${
              index < section17Data.length - 1
                ? "border-b md:border-b-0 md:border-r border-gray-300"
                : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="hover:scale-110 hover:rotate-2 transition-transform duration-300">
              {data.icon}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[14px] text-[#828282]">{data.title}</p>
              <h1 className="text-[20px] sm:text-[25px] text-[#2A2F35] font-bold break-words">
                {data.description}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section16;
