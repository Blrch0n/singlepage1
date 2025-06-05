"use client";
import { motion } from "framer-motion";

const section5Data = [
  {
    image: "https://max-themes.net/demos/enside/main/upload/tree-brancg.png",
    path: "Agency / App Design / Services",
    title: "Product Design",
    description: "Creative RIng",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/Iphone-portfolio.jpg",
    path: "Agency / Services / UI&UX",
    title: "Ugly Delicious",
    description: "Personal",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/kitchen-portfolio.jpg",
    path: "App Design / Services / UI&UX",
    title: "Kitchen Stories",
    description: "Client: Themeforest",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/man-portfolio.jpg",
    path: "Agency / App Design / Services",
    title: "Commercial",
    description: "Special",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/lamp-portfolio.jpg",
    path: "App Design / Services",
    title: "Lamp Mock Up",
    description: "Perfect for Home",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/bird-portfolio.jpg",
    path: "Agency",
    title: "Enside Web",
    description: "Mock up components",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/girl-yellow-portfolio.jpg",
    path: "Agency / App Design / Services / UI&UX ",
    title: "Pixel Days",
    description: "Digital",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/chair-portfolio.jpg",
    path: "Agency / App Design / Services / UI&UX",
    title: "Particles",
    description: "Commercial",
  },
];

const Section5 = () => {
  return (
    <motion.div
      className="w-full h-fit flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="bg-white max-w-[1200px] w-full h-fit flex flex-col gap-8 sm:gap-12 items-center justify-center text-black py-12 sm:py-16 lg:py-[100px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full h-fit flex flex-col gap-4 items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-[#828282] uppercase text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            portfolio
          </motion.h3>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] w-full max-w-[520px] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Case Studies
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
            className="text-base sm:text-[18px] text-[#999999] w-full max-w-[520px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Inspiring and functional branding, development, consulting,
            websites, online services, and apps.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-auto place-items-center px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {section5Data.map((item, index) => (
            <motion.div
              className="w-full max-w-sm h-fit flex flex-col items-center gap-1 justify-center text-center"
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.8,
                delay: 0.9 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full group relative mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  className="w-full h-auto object-cover rounded-lg"
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute inset-0 bg-transparent group-hover:bg-[#00000080] flex justify-center items-center transition-all duration-300 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="bg-white text-black px-4 sm:px-5 hover:bg-[#3452ff] py-2 sm:py-3 text-xs sm:text-[12px] rounded-[5px] opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:text-white duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(52, 82, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View more
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.span
                className="uppercase text-[9px] sm:text-[10px] space-x-0.5 text-[#2A2F35]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.path}
              </motion.span>

              <motion.h1
                className="text-lg sm:text-[20px] font-normal"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h1>

              <motion.p
                className="text-xs sm:text-[13px] text-[#68686d]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section5;
