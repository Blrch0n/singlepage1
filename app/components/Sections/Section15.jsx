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
      className="w-full h-fit bg-cover bg-center relative py-[110px]"
      style={{ backgroundImage: "url(/image6.jpg)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[#00000090]"></div>
      <motion.div
        className="w-full max-w-[1200px] mx-auto h-fit relative flex flex-row items-center justify-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-1/3 pr-[80px] h-fit flex flex-col gap-8 items-start justify-center"
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
              className="text-[#fff] text-[16px] uppercase font-semibold tracking-wider mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Reviews
            </motion.h3>
            <motion.h2
              className="text-4xl text-[#fff] leading-tight mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              What our clients said about us
            </motion.h2>
          </motion.div>
          <motion.p
            className="text-[#fff] text-lg leading-relaxed"
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
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
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
          className="w-2/3 relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
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
                <motion.div
                  className="w-full min-h-[410px] bg-white flex flex-col items-start justify-start overflow-hidden shadow-lg"
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
                  <div className="w-full flex-1 p-6 flex flex-col gap-4">
                    <motion.img
                      src={data.image}
                      alt={data.name}
                      className="w-[75px] h-[75px] rounded-full object-cover"
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
                      className="text-gray-700 text-start leading-relaxed flex-1"
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
                    className="w-full p-6 flex flex-col text-start"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {data.name}
                    </h3>
                    <p className="text-gray-600">{data.position}</p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <motion.div
            className="swiper-pagination-testimonial flex justify-center mt-6 space-x-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
      </motion.div>

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
    </motion.div>
  );
};

export default Section15;
