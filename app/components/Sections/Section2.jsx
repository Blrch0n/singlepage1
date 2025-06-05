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
      className="w-full h-fit flex py-[110px] flex-col gap-10 items-center justify-center bg-white text-black"
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
          className="text-[#828282]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Welcome
        </motion.h3>
        <motion.h2
          className="text-[72px] text-[#2A2F35] w-[520px]"
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
          className="text-[18px] text-[#999999] w-[570px]"
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
        className="w-full h-fit flex flex-wrap items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {section2_data.map((item, index) => (
          <motion.div
            className="w-[370px] h-fit flex flex-col gap-10 items-center justify-center text-center m-4"
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 0.8,
              delay: 0.9 + index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.img
              className="w-full h-[270px] object-cover bg-center bg-cover"
              src={item.img}
              alt={item.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h1
              className="text-[#2A2F35] text-[21px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="text-[#999999]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.description}
            </motion.p>
            <motion.span
              className="bg-[#2A2F3530] w-1/2 h-[1px]"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "50%", opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="btn-gradient hover:bg-[#3452ff] duration-300 ease-in-out px-[18px] rounded-[5px] text-white py-4"
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
