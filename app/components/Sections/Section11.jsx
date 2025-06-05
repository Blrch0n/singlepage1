"use client";
import { motion } from "framer-motion";

const section11Data = [
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-2.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-1.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-3.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-4.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-5.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-6.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-7.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-8.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
];

const Section11 = () => {
  return (
    <motion.div
      className="w-full h-fit flex flex-col pt-[100px] gap-12 items-center justify-center bg-[#F5F5F5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-full h-fit flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[#828282] text-[16px] uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          team
        </motion.h3>
        <motion.h2
          className="text-[72px] text-[#2A2F35]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>
        <motion.span
          className="block h-1.5 w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 35, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-[18px] text-[#999999]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Meet our talented team of designers and developers
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-white text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        {section11Data.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center relative h-[420px] w-full justify-center text-center p-4 group overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.0,
              y: -5,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 z-0 bg-transparent group-hover:bg-[#000000c2] transition-all duration-300 ease-in-out"
              whileHover={{
                transition: { duration: 0.3 },
              }}
            />

            <motion.h3
              className="text-lg text-transparent duration-300 transition-all ease-in-out group-hover:text-white font-semibold relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
              }}
              transition={{
                delay: 0.9 + index * 0.1,
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              {data.title}
            </motion.h3>

            <motion.p
              className="text-transparent duration-300 transition-all ease-in-out group-hover:text-white relative z-10 px-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                delay: 1.0 + index * 0.1,
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              {data.position}
            </motion.p>

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent"
              whileHover={{
                borderColor: "#3452ff",
                boxShadow: "0 0 25px rgba(52, 82, 255, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Subtle shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              whileHover={{
                opacity: 0.1,
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />

            {/* Floating icon effect */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-[#3452ff] rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Section11;
