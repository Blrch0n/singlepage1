"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const section15Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/man-photo-portfolio-75x75.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    position: "CEO, Company",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/man-photo-portfolio-75x75.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    position: "CTO, Tech Corp",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/man-photo-portfolio-75x75.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mike Johnson",
    position: "Designer, Creative Studio",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/man-photo-portfolio-75x75.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sarah Wilson",
    position: "Marketing Director",
  },
];

const Section15 = () => {
  return (
    <div
      className="w-full h-fit bg-cover bg-center relative py-[110px]"
      style={{ backgroundImage: "url(/image6.jpg)" }}
    >
      <div className="absolute inset-0 bg-[#00000090]"></div>
      <div className="w-full max-w-[1200px] mx-auto h-fit relative flex flex-row items-center justify-center">
        <div className="w-1/3 pr-[80px] h-fit flex flex-col gap-8 items-start justify-center">
          <div>
            <h3 className="text-[#fff] text-[16px] uppercase font-semibold tracking-wider mb-2">
              Reviews
            </h3>
            <h2 className="text-4xl text-[#fff] leading-tight mb-4">
              What our clients said about us
            </h2>
          </div>
          <p className="text-[#fff] text-lg leading-relaxed">
            We are the comprehensive design and technology partner for the
            digital age
          </p>

          <button
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
              color: "#fff",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Swiper Container */}
        <div className="w-2/3 relative">
          {/* Custom Navigation Buttons */}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-testimonial",
              prevEl: ".swiper-button-prev-testimonial",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-testimonial",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="relative"
          >
            {section15Data.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="w-full min-h-[410px] bg-white flex flex-col items-start justify-start overflow-hidden shadow-lg">
                  <div className="w-full flex-1 p-6 flex flex-col gap-4">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-[75px] h-[75px] rounded-full object-cover"
                    />
                    <p className="text-gray-700 text-start leading-relaxed flex-1">
                      {data.description}
                    </p>
                  </div>
                  <hr className="w-full border-gray-200" />
                  <div className="w-full p-6 flex flex-col text-start">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {data.name}
                    </h3>
                    <p className="text-gray-600">{data.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination-testimonial flex justify-center mt-6 space-x-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-testimonial .swiper-pagination-bullet {
          width: 25px;
          height: 4px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          border-radius: 2px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .swiper-slide img {
          object-fit: cover;
          width: 75px;
          height: 75px;
          display: block;
        }
        .swiper-pagination-testimonial .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%);
        }
        .swiper-pagination-testimonial .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Section15;
