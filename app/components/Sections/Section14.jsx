"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const section14Data = [
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
  return (
    <div className="w-full h-fit bg-[#fff] py-[110px]">
      <div className="w-full max-w-[1200px] mx-auto h-fit bg-[#fff] flex flex-col items-center justify-center">
        <div className="mb-8 w-full h-fit flex flex-col items-center justify-center">
          <h3 className="text-[#828282] font-semibold text-[16px] uppercase tracking-wider mb-2">
            articles
          </h3>
          <h2 className="text-[72px] w-[570px] text-center text-[#2A2F35] leading-tight mb-4">
            Our Recent Writings
          </h2>
          <span
            className="block h-1.5 w-8 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%)",
            }}
          ></span>
          <p className="text-[#808080] text-base lg:text-lg leading-relaxed">
            Updates and events of Enside
          </p>
        </div>

        <div className="w-full px-8 lg:px-12 relative">
          <div className="swiper-button-prev-custom absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 z-10 cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 z-10 cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="relative"
          >
            {section14Data.map((data, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full flex flex-col group h-[300px] p-8 text-white relative items-start justify-between rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
                  <h1 className="relative text-[16px] text-[#ffffff50] z-10">
                    {data.date}
                  </h1>
                  <div className="relative w-full z-10 duration-500 transition-all group-hover:-translate-y-4 text-start">
                    <h2 className="text-sm text-[#ffffff80] font-normal mb-2">
                      {data.categories}
                    </h2>
                    <p className="text-2xl ">{data.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 25px;
          height: 4px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 2px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%);
        }
        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default Section14;
