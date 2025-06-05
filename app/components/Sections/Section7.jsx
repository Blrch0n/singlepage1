"use client";
import { motion } from "framer-motion";

const section7Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/architecture-stairs-vertical.jpg",
    title: "STRATEGY",
    description:
      "Enside allows you to build a fully functional and feature rich onepage WordPress site, whatever your agency or business, without any knowledge of coding.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/man-laughtig.jpg",
    title: "INSIGHT",
    description:
      "Effortlessly beautiful, Enside offers a collection of pre-built demos, with one-click import, and you can make your site your own using WP Bakery for WordPress.",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/interior-fashion.jpg",
    title: "EXPERIENCE",
    description:
      "We've created a wide selection of stunning and powerful demos so that you can find the best starting point for your personal, business or agency website.",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/architecture-stairs.jpg",
    title: "PERFORMANCE",
    description:
      "The admin panel invites you to get creative and make your site unique in seconds. You get to choose how your users engage with you and your business.",
  },
];

const Section7 = () => {
  return (
    <motion.div
      className="w-full h-fit bg-[#25282b] py-[60px] md:py-[120px] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-[1200px] mx-auto h-fit flex flex-col gap-[40px] md:gap-[80px] items-center justify-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full h-fit flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-[#b8b8b8] text-[14px] md:text-[16px] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Unique services
          </motion.h3>
          <motion.h2
            className="text-[32px] md:text-[54px] lg:text-[72px] text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Our Approach
          </motion.h2>
          <motion.span
            className="block h-1.5 w-[35px] rounded-full my-4"
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 35, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-[16px] md:text-[18px] text-[#999999] max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            We offer custom solutions to industry leading companies
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 md:gap-8 text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {section7Data.map((data, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 text-white group w-full max-w-[270px] mx-auto relative h-[300px] md:h-[350px] overflow-hidden rounded-[10px] px-[20px] md:px-[25px] pb-[20px] md:pb-[25px] pt-[80px] md:pt-[100px] justify-center bg-cover bg-center text-center p-4"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -15,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.8,
                delay: 0.9 + index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute top-0 left-0 inset-0 bg-[#00000080] group-hover:bg-[#8978d370] duration-300 ease-in-out z-0"
                whileHover={{
                  backgroundColor: "#8978d370",
                  transition: { duration: 0.3 },
                }}
              />

              <motion.h3
                className="text-xl md:text-2xl relative z-10 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {data.title}
              </motion.h3>

              <motion.p
                className="relative text-center z-10 text-[14px] md:text-[16px] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {data.description.length <= 160
                  ? data.description
                  : data.description.slice(0, 160) + "..."}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section7;
