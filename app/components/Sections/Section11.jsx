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
    <div className="w-full h-fit flex flex-col pt-[100px] gap-12 items-center justify-center bg-[#F5F5F5]">
      <div className="w-full h-fit flex flex-col items-center gap-2">
        <h3 className="text-[#828282] text-[16px] uppercase">technology</h3>
        <h2 className="text-[72px] text-[#2A2F35]">Capabilities</h2>
        <span
          className="block h-1.5 w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p className="text-[18px] text-[#999999]">
          Taking care of the new products's launch and user support
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-white text-black">
        {section11Data.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center relative h-[420px] w-full justify-center text-center p-4 group"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 z-0 bg-transparent group-hover:bg-[#000000c2] transition-all duration-300 ease-in-out"></div>
            <motion.h3
              className="text-lg text-transparent duration-300 transition-all ease-in-out group-hover:text-white font-semibold relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {data.title}
            </motion.h3>
            <motion.p
              className="text-transparent duration-300 transition-all ease-in-out group-hover:text-white relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {data.position}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section11;
