"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useData } from "@/contexts/DataContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Helper function to format image URLs
const formatImageUrl = (imageUrl, fallback = "/image1.jpg") => {
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

const defaultSection14Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/Creative-business-team-laughing-1170x660.jpg",
    title: "The Future of Work: Embracing Remote Collaboration",
    categories: "client, design, development",
    date: "2023-10-01",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/business-morning-1170x660.jpg",
    title: "The Future of Work: Embracing Remote Collaboration",
    categories: "client, design, development",
    date: "2023-10-01",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/coffe-vertical-1100x660.jpg",
    title: "The Future of Work: Embracing Remote Collaboration",
    categories: "client, design, development",
    date: "2023-10-01",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/Creative-business-team-laughing-1170x660.jpg",
    title: "The Future of Work: Embracing Remote Collaboration",
    categories: "client, design, development",
    date: "2023-10-01",
  },
];

const Section14 = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const { data } = useData();

  // Get data from API or use defaults
  const newsData = data.news?.section1 || {};
  const projectsData = newsData.projects || defaultSection14Data;

  // Use API projects data or fallback to default
  const section14Data =
    projectsData.length > 0 ? projectsData : defaultSection14Data;

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3);
      } else if (width >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="w-full h-fit bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl mx-auto h-fit bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 w-full h-fit flex flex-col items-center justify-center">
          <h3 className="text-gray-500 font-semibold text-sm sm:text-base uppercase tracking-wider mb-2">
            articles
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full sm:w-[90%] md:w-[80%] lg:w-[570px] text-center text-gray-800 leading-tight mb-4 px-4">
            {newsData.title || "Our Recent Writings"}
          </h2>
          <div
            className="block h-1 sm:h-1.5 w-6 sm:w-8 rounded-full mb-4 sm:mb-6"
            style={{
              background: "linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%)",
            }}
          />
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed text-center px-4">
            {newsData.subtitle || "Updates and events of Enside"}
          </p>
        </div>

        {/* Swiper Section */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} w-[25px] h-[5px] rounded-full transition-all duration-300 cursor-pointer"></span>`;
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {section14Data.map((data, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="w-full flex flex-col group h-72 sm:h-80 md:h-84 lg:h-80 xl:h-84 p-6 sm:p-7 md:p-8 text-white relative items-start justify-between rounded-lg overflow-hidden cursor-pointer duration-300"
                  style={{
                    backgroundImage: `url(${formatImageUrl(data.image)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (index % slidesPerView) * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 z-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                  <h1 className="relative text-sm sm:text-base text-white/50 z-10">
                    {data.date}
                  </h1>
                  <div className="relative w-full z-10 duration-200 transition-all group-hover:-translate-y-1 md:group-hover:-translate-y-1 lg:group-hover:-translate-y-1 text-start">
                    <h2 className="text-xs sm:text-sm text-white/80 font-normal mb-2 group-hover:text-white transition-colors duration-200">
                      {data.categories}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight group-hover:-translate-y-1 transition-transform duration-200">
                      {data.title}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-6 sm:mt-8 space-x-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-slide {
          background: transparent !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          background: #9ca3af;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
        }
      `}</style>
    </motion.div>
  );
};

export default Section14;
