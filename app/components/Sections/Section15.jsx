"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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
    <motion.div
      className="w-full h-fit bg-cover bg-center relative py-[110px] md:py-[80px] sm:py-[60px]"
      style={{ backgroundImage: "url(/image6.jpg)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[#00000090]"></div>
      <motion.div
        className="w-full max-w-[1200px] mx-auto h-fit relative flex flex-col lg:flex-row items-center justify-center px-4 md:px-6 lg:px-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full lg:w-1/3 lg:pr-[80px] md:pr-[40px] h-fit flex flex-col gap-4 md:gap-6 lg:gap-8 items-start justify-center mb-8 lg:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-[#fff] text-[14px] md:text-[16px] uppercase font-semibold tracking-wider mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Reviews
            </motion.h3>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-[#fff] leading-tight mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              What our clients said about us
            </motion.h2>
          </motion.div>
          <motion.p
            className="text-[#fff] text-base md:text-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            We are the comprehensive design and technology partner for the
            digital age
          </motion.p>

          <motion.button
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px",
            }}
            className="md:text-base md:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(52, 82, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Swiper Container */}
        <motion.div
          className="w-full lg:w-2/3 relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
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
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="relative"
          >
            {section15Data.map((data, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="w-full min-h-[350px] md:min-h-[380px] lg:min-h-[410px] bg-white flex flex-col items-start justify-start overflow-hidden shadow-lg rounded-lg"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="w-full flex-1 p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                    <motion.img
                      src={data.image}
                      alt={data.name}
                      className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full object-cover"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.0 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.p
                      className="text-gray-700 text-sm md:text-base text-start leading-relaxed flex-1"
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.2 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {data.description}
                    </motion.p>
                  </div>
                  <hr className="w-full border-gray-200" />
                  <motion.div
                    className="w-full p-4 md:p-6 flex flex-col text-start"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {data.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {data.position}
                    </p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <motion.div
            className="swiper-pagination-testimonial flex justify-center mt-4 md:mt-6 space-x-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .swiper-pagination-testimonial .swiper-pagination-bullet {
          width: 20px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          border-radius: 2px;
          margin: 0 3px;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .swiper-pagination-testimonial .swiper-pagination-bullet {
            width: 25px;
            height: 4px;
            margin: 0 4px;
          }
        }

        .swiper-slide img {
          object-fit: cover;
          display: block;
          width: 50px;
          height: 50px;
        }

        .swiper-pagination-testimonial .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%);
        }

        .swiper-pagination-testimonial .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1023px) {
          .swiper-slide {
            max-width: 100% !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Section15;
