"use client";
import { motion } from "framer-motion";
import { BsSafe } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";

const section6Data = [
  {
    icon: <BsSafe color="#a9a9a9" size={40} />,
    title: "Tailored",
    description:
      "We believe in a collaborative partnership where we work with you to create the perfect solution",
  },
  {
    icon: <FaHelmetSafety color="#a9a9a9" size={40} />,
    title: "Strategic",
    description:
      "Our energy is focus in inspiring projects, activation campaigns and influence strategies",
  },
  {
    icon: <PiBag color="#a9a9a9" size={40} />,
    title: "Quality",
    description:
      "Development  – every solution needs a conceptual design that the further work will be based on.",
  },
  {
    icon: <GiCoffeeCup color="#a9a9a9" size={40} />,
    title: "Complete",
    description:
      "We help businesses to stay relevant to their customers in the digital era by touching hearts and minds.",
  },
];

const Section6 = () => {
  return (
    <motion.div
      className="w-full h-fit bg-white py-[40px] md:py-[80px] flex items-center justify-center px-4 md:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="bg-white w-full max-w-[1200px] mx-auto h-fit flex flex-col gap-[40px] md:gap-[80px] items-center justify-center text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full flex-col md:flex-row flex items-start gap-[40px] md:gap-[100px] justify-between bg-white text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-[50%] pr-0 md:pr-[80px] h-fit gap-2 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-[#828282] uppercase text-sm md:text-base"
              style={{ letterSpacing: "2px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Capabilities
            </motion.h3>
            <motion.h2
              className="text-[28px] md:text-[36px] w-full md:w-[420px] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Creative concept or System Design
            </motion.h2>
            <motion.span
              className="block h-1.5 w-[35px] rounded-full my-4"
              style={{
                background:
                  "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
              }}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 35, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-[#999999] text-[16px] md:text-[18px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We are the comprehensive design and technology partner for the
              digital age. We help businesses to stay relevant to their
              customers in the digital era by touching hearts and minds.
            </motion.p>
          </motion.div>
          <motion.img
            className="w-full md:w-[50%] h-auto object-cover bg-center bg-cover rounded-lg md:rounded-none"
            src="https://max-themes.net/demos/enside/main/upload/image-preview-enside.png"
            alt=""
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.hr
          className="w-full bg-[#EBEBEB]"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          {section6Data.map((data, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center p-4"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.8,
                delay: 1.1 + index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-[160px] h-[160px]"
                style={{
                  background:
                    "linear-gradient(to bottom, #3452ff 0%, #ad3ed8 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  padding: "1px",
                  color: "#fff",
                  fontSize: "2rem",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(52, 82, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="w-full h-full rounded-full flex items-center justify-center text-black bg-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="scale-75 md:scale-100">{data.icon}</span>
                </motion.span>
              </motion.div>

              <motion.h3
                className="text-[#2A2F35] text-[16px] md:text-[18px] font-medium"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {data.title}
              </motion.h3>

              <motion.p
                className="text-[#999999] text-[14px] md:text-[16px] leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {data.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section6;
