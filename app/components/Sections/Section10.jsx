"use client";
import React from "react";
import { motion } from "framer-motion";
import { useData } from "../../../contexts/DataContext";

// Helper function to format image URLs
const formatImageUrl = (imageUrl, fallback) => {
  if (!imageUrl) return fallback;

  // If it's already a full URL (starts with http/https), return as is
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  // If it starts with /api/uploads, prepend the base URL
  if (imageUrl.startsWith("/api/uploads")) {
    return `https://dash-1-iefb.onrender.com${imageUrl}`;
  }

  // If it's a relative path, use it as is (for local images)
  return imageUrl;
};

// Fallback data
const fallbackData = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/office-interior-3.jpg",
    title: "Our services",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/office-man.jpg",
    title: "Support team",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/coffe-vertical.jpg",
    title: "Contact us",
  },
];

const Section10 = () => {
  const { data, loading, error } = useData();

  // Extract section data from API - use services.section2 which contains the gallery services data
  const servicesData = data?.services?.section2 || {};
  const servicesArray = servicesData.services || [];

  // Use API data if available, otherwise fallback
  const section10Data =
    servicesArray.length > 0
      ? servicesArray.map((item) => ({
          image: item.backgroundImage,
          title: item.title,
        }))
      : fallbackData;

  if (loading) {
    return (
      <div className="w-full h-[180px] flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("Section10 error:", error);
    // Use fallback data on error
  }
  return (
    <motion.div
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 md:gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {section10Data.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[150px] group relative items-center justify-center text-center p-2 sm:p-4 overflow-hidden duration-300"
          style={{
            backgroundImage: `url(${formatImageUrl(
              item.image,
              fallbackData[index]?.image
            )})`,
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
          <div className="absolute inset-0 bg-[#000000c2] group-hover:bg-[#3452ffc2] transition-colors duration-300" />

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-semibold text-white relative p-2 rounded z-10 duration-300">
            {item.title}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Section10;
