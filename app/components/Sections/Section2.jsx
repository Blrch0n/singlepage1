"use client";
import { motion } from "framer-motion";

const section2_data = [
  {
    img: "https://max-themes.net/demos/enside/main/upload/man-business-landscape.jpg",
    title: "Brand Development",
    description:
      "Our energy and expertise are focus in inspiring projects, activation campaigns and influence strategies with our brands",
  },
  {
    img: "https://max-themes.net/demos/enside/main/upload/office-hand.jpg",
    title: "Content Strategy",
    description:
      "We believe in a collaborative partnership where we work with you and your brand to create the perfect solution",
  },
  {
    img: "https://max-themes.net/demos/enside/main/upload/women-house-interior.jpg",
    title: "Ecommerce & Technology",
    description:
      "Development and Design – every solution needs a conceptual design that the further work will be based on.",
  },
];

const Section2 = () => {
  return (
    <motion.div
      className="w-full h-fit flex py-[110px] md:py-[80px] sm:py-[60px] px-4 sm:px-6 md:px-8 flex-col gap-10 items-center justify-center bg-white text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-full h-fit flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[#828282] text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Welcome
        </motion.h3>
        <motion.h2
          className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#2A2F35] w-full max-w-[520px] px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Outstanding Features
        </motion.h2>
        <motion.span
          className="block h-[6px] w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 35, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-[14px] sm:text-[16px] md:text-[18px] text-[#999999] w-full max-w-[570px] px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          We are the comprehensive design and technology partner for the digital
          age. We help businesses to stay relevant to their customers in the
          digital era by touching hearts and minds.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full h-fit flex flex-wrap items-center justify-center gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {section2_data.map((item, index) => (
          <motion.div
            className="w-full sm:w-[350px] md:w-[370px] h-fit flex flex-col gap-6 md:gap-10 items-center justify-center text-center mx-2"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
            transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.img
              className="w-full h-[200px] sm:h-[240px] md:h-[270px] object-cover bg-center bg-cover rounded-lg"
              src={item.img}
              alt={item.title}
              transition={{ duration: 0.2 }}
            />
            <motion.h1
              className="text-[#2A2F35] text-[18px] sm:text-[20px] md:text-[21px] px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="text-[#999999] text-[14px] sm:text-[15px] md:text-[16px] px-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {item.description}
            </motion.p>
            <motion.span
              className="bg-[#2A2F3530] w-1/2 h-[1px]"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "50%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="btn-gradient hover:bg-[#3452ff] duration-300 ease-in-out px-[18px] sm:px-[24px] rounded-[5px] text-white py-3 sm:py-4 text-sm sm:text-base"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(52, 82, 255, 0.3)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        viewport={{ once: true }}
      >
        Explore All Features
      </motion.button>
    </motion.div>
  );
};

export default Section2;
