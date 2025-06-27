"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useData } from "../../../contexts/DataContext";

const Section13 = () => {
  const router = useRouter();
  const { data, loading, error } = useData();

  // Extract section data from API - use team.section3 which contains the CTA data
  const teamData = data?.team?.section3 || {};
  const ctaData = {
    title: teamData.title || "Get in touch",
    description:
      teamData.subtitle || "Want to Know More About Us? Get In Touch",
    buttonText: teamData.buttonText || "See all Features",
    link: teamData.buttonLink || "/",
    gradientColors: teamData.gradientColors || {
      background: "linear-gradient(to right, #664ed3 0%, #87d14b 100%)",
      button: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
    },
  };

  if (loading) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("Section13 error:", error);
    // Use fallback data on error
  }
  return (
    <motion.div
      className="w-full h-fit"
      style={{
        background: ctaData.gradientColors.background,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[1200px] w-full mx-auto h-fit flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <h2 className="text-[24px] md:text-[30px] text-white mb-2">
            {ctaData.title}
          </h2>
          <p className="text-[#b8b8b8] text-sm md:text-base">
            {ctaData.description}
          </p>
        </div>
        <button
          style={{
            background: ctaData.gradientColors.button,
          }}
          onClick={() => router.push(ctaData.link)}
          className="text-white py-3 px-6 md:px-8 rounded-[5px] sm:w-fit w-full md:w-auto text-sm md:text-base hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          {ctaData.buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default Section13;
