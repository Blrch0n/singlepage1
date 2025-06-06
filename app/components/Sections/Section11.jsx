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
    image: "https://max-themes.net/demos/enside/main/upload/team-2.jpg",
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
      {/* Header Section - Simplified */}
      <div className="w-full h-fit flex flex-col items-center gap-2">
        <h3 className="text-[#828282] text-[16px] uppercase">team</h3>
        <h2 className="text-[32px] sm:text-[72px] text-[#2A2F35]">Our Team</h2>

        <p className="text-[18px] text-center sm:text-base text-[#999999]">
          Meet our talented team of designers and developers
        </p>
      </div>

      {/* Team Grid - Simplified */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-white text-black">
        {section11Data.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center relative h-[420px] w-full justify-center text-center p-4 group overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 z-0 bg-transparent group-hover:bg-[#000000c2] transition-all duration-300 ease-in-out" />

            <h3 className="text-lg text-transparent duration-300 transition-all ease-in-out group-hover:text-white font-semibold relative z-10">
              {data.title}
            </h3>

            <p className="text-transparent duration-300 transition-all ease-in-out group-hover:text-white relative z-10 px-4">
              {data.position}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section11;
