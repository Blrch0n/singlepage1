"use client";
import { motion } from "framer-motion";
import { useData } from "@/contexts/DataContext";

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
const fallbackSection7Data = [
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
  const { data, loading, error } = useData();

  // Extract section data from API - use ourWork.section3 which contains the services data
  const ourWorkData = data?.ourWork?.section3 || {};
  const servicesData = ourWorkData.services || [];
  const headerData = {
    subtitle: ourWorkData.title || "Unique services",
    title: ourWorkData.subtitle || "Our Approach",
    description:
      ourWorkData.description ||
      "We offer custom solutions to industry leading companies",
  };

  // Use API data if available, otherwise fallback
  const section7Data =
    servicesData.length > 0 ? servicesData : fallbackSection7Data;

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[#25282b]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("Section7 error:", error);
    // Use fallback data on error
  }
  return (
    <motion.div
      className="w-full h-fit bg-[#25282b] py-[60px] md:py-[120px] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1200px] mx-auto h-fit flex flex-col gap-[40px] md:gap-[80px] items-center justify-center text-white">
        <div className="w-full h-fit flex flex-col items-center gap-2 text-center">
          <h3 className="text-[#b8b8b8] text-[14px] md:text-[16px] uppercase">
            {headerData.subtitle || "Unique services"}
          </h3>
          <h2 className="text-[32px] md:text-[54px] lg:text-[72px] text-white leading-tight">
            {headerData.title || "Our Approach"}
          </h2>
          <span
            className="block h-1.5 w-[35px] rounded-full my-4"
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            }}
          />
          <p className="text-[16px] md:text-[18px] text-[#999999] max-w-[600px]">
            {headerData.description ||
              "We offer custom solutions to industry leading companies"}
          </p>
        </div>

        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 md:gap-8 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {section7Data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 text-white group w-full max-w-[270px] mx-auto relative h-[300px] md:h-[350px] overflow-hidden rounded-[10px] px-[20px] md:px-[25px] pb-[20px] md:pb-[25px] pt-[80px] md:pt-[100px] justify-center bg-cover bg-center text-center p-4"
              style={{
                backgroundImage: `url(${formatImageUrl(
                  item.image,
                  fallbackSection7Data[index]?.image
                )})`,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute top-0 left-0 inset-0 bg-[#00000080] group-hover:bg-[#8978d370] duration-300 ease-in-out z-0" />

              <h3 className="text-xl md:text-2xl relative z-10 font-semibold">
                {item.title || fallbackSection7Data[index]?.title || "Service"}
              </h3>

              <p className="relative text-center z-10 text-[14px] md:text-[16px] leading-relaxed">
                {(() => {
                  const description =
                    item.description ||
                    fallbackSection7Data[index]?.description ||
                    "No description available";
                  return description.length <= 160
                    ? description
                    : description.slice(0, 160) + "...";
                })()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section7;
