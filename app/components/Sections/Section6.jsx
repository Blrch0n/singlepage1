"use client";
import { motion } from "framer-motion";
import { BsSafe } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { useData } from "@/contexts/DataContext";

const defaultSection6Data = [
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
  const { data } = useData();

  // Get data from API or use defaults
  const ourWorkData = data.ourWork?.section2 || {};
  const capabilitiesData = ourWorkData.capabilities || defaultSection6Data;

  // Use API capabilities data or fallback to default
  const section6Data =
    capabilitiesData.length > 0 ? capabilitiesData : defaultSection6Data;
  return (
    <div className="w-full h-fit bg-white py-[40px] md:py-[80px] flex items-center justify-center px-4 md:px-0">
      <div className="bg-white w-full max-w-[1200px] mx-auto px-10 max-w-[1200px]:px-0 h-fit flex flex-col gap-[40px] md:gap-[80px] items-center justify-center text-black">
        <motion.div
          className="w-full flex-col md:flex-row flex items-start gap-[40px] md:gap-[100px] justify-between bg-white text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-[50%] pr-0 md:pr-[80px] h-fit gap-2 flex flex-col">
            <h3
              className="text-[#828282] uppercase text-sm md:text-base"
              style={{ letterSpacing: "2px" }}
            >
              {ourWorkData.subtitle || "Capabilities"}
            </h3>
            <h2 className="text-[28px] md:text-[36px] w-full md:w-[420px] leading-tight">
              {ourWorkData.title || "Creative concept or System Design"}
            </h2>
            <span
              className="block h-1.5 w-[35px] rounded-full my-4"
              style={{
                background:
                  "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
              }}
            />
            <p className="text-[#999999] text-[16px] md:text-[18px] leading-relaxed">
              {ourWorkData.description ||
                "We are the comprehensive design and technology partner for the digital age. We help businesses to stay relevant to their customers in the digital era by touching hearts and minds."}
            </p>
          </div>
          <img
            className="w-full md:w-[50%] h-auto object-cover bg-center bg-cover rounded-lg md:rounded-none"
            src="https://max-themes.net/demos/enside/main/upload/image-preview-enside.png"
            alt=""
          />
        </motion.div>

        <hr className="w-full bg-[#EBEBEB]" />

        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {section6Data.map((data, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center p-4"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
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
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="w-full h-full rounded-full flex items-center justify-center text-black bg-white">
                  <span className="scale-75 md:scale-100">{data.icon}</span>
                </span>
              </motion.div>

              <h3 className="text-[#2A2F35] text-[16px] md:text-[18px] font-medium">
                {data.title}
              </h3>

              <p className="text-[#999999] text-[14px] md:text-[16px] leading-relaxed">
                {data.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section6;
