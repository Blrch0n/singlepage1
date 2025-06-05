import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const news_slider_data = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

const NewsSlider = () => {
  return (
    <div className="news-slider">
      <style jsx>{`
        .news-slider {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          transform: translateY(0);
          transition: all 0.3s ease;
          animation: slideIn 0.8s ease-out;
        }

        .news-slider:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
        }

        .mySwiper {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }

        .swiper-slide {
          opacity: 0;
          transform: scale(1.1);
          transition: all 0.6s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-slide img {
          transition: transform 0.6s ease;
        }

        .swiper-slide:hover img {
          transform: scale(1.05);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.6);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.3s ease;
          top: 20px;
          z-index: 10;
        }

        .swiper-button-next {
          right: 20px;
          left: auto;
        }

        .swiper-button-prev {
          right: 65px;
          left: auto;
        }

        .news-slider:hover .swiper-button-next,
        .news-slider:hover .swiper-button-prev {
          opacity: 1;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }

        .swiper-pagination {
          bottom: 20px !important;
          position: absolute;
          text-align: center;
          z-index: 10;
        }

        .swiper-pagination-bullet {
          width: 25px !important;
          height: 5px !important;
          border-radius: 2.5px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
          display: inline-block !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scaleX(1.2) !important;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        className="mySwiper"
      >
        {news_slider_data.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`News slide ${index + 1}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
