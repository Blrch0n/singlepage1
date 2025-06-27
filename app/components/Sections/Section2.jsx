"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useData } from "@/contexts/DataContext";

const defaultSection2Data = [
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
  const router = useRouter();
  const { data, loading } = useData();

  // Get data from API or use default
  const aboutData = data.about?.section1 || {};
  const welcomeData = aboutData.welcome || {};
  const featuresData = aboutData.features || {};

  // Use API data for section2_data or fallback to default
  const section2_data =
    featuresData.items?.length > 0
      ? featuresData.items.map((item) => ({
          img: item.image,
          title: item.title,
          description: item.description,
        }))
      : defaultSection2Data;
  return (
    <motion.div
      className="w-full h-fit flex py-[110px] md:py-[80px] sm:py-[60px] px-4 sm:px-6 md:px-8 flex-col gap-10 items-center justify-center bg-white text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full h-fit flex flex-col items-center justify-center text-center">
        <h3 className="text-[#828282] text-sm sm:text-base">
          {welcomeData.title || "Welcome"}
        </h3>
        <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#2A2F35] w-full max-w-[520px] px-4">
          {featuresData.title || "Outstanding Features"}
        </h2>
        <span
          className="block h-[6px] w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        />
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#999999] w-full max-w-[570px] px-4">
          {welcomeData.content ||
            "We are the comprehensive design and technology partner for the digital age. We help businesses to stay relevant to their customers in the digital era by touching hearts and minds."}
        </p>
      </div>

      <div className="w-full h-fit flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {section2_data.map((item, index) => (
          <motion.div
            className="w-full sm:w-[350px] md:w-[370px] h-fit flex flex-col gap-6 md:gap-10 items-center justify-center text-center mx-2"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{
              duration: 0.2,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <img
              className="w-full h-[200px] sm:h-[240px] md:h-[270px] object-cover bg-center bg-cover rounded-lg"
              src={item.img}
              alt={item.title}
            />
            <h1 className="text-[#2A2F35] text-[18px] sm:text-[20px] md:text-[21px] px-4">
              {item.title}
            </h1>
            <p className="text-[#999999] text-[14px] sm:text-[15px] md:text-[16px] px-4 leading-relaxed">
              {item.description}
            </p>
            <span className="bg-[#2A2F3530] w-1/2 h-[1px]" />
          </motion.div>
        ))}
      </div>

      <motion.button
        className="btn-gradient px-[18px] sm:px-[24px] rounded-[5px] text-white py-3 sm:py-4 text-sm sm:text-base"
        onClick={() => router.push("/")}
        whileHover={{
          transform: "translateY(-3px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#3452ff",
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        Explore All Features
      </motion.button>
    </motion.div>
  );
};

export default Section2;
