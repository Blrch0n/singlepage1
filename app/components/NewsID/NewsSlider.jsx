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
    <div className="news-slider-wrapper">
      <style jsx>{`
        .news-slider-wrapper {
          position: relative;
          padding-bottom: 50px; /* Space for external pagination */
        }

        .news-slider-container {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          transform: translateY(0);
          transition: all 0.3s ease;
          animation: slideIn 0.8s ease-out;
        }

        .news-slider-container:hover {
          // transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
        }

        .news-slider-container :global(.news-swiper) {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }

        .news-slider-container :global(.swiper-slide) {
          opacity: 0;
          transform: scale(1.1);
          transition: all 0.6s ease;
        }

        .news-slider-container :global(.swiper-slide-active) {
          opacity: 1;
          transform: scale(1);
        }

        .news-slider-container :global(.swiper-slide) img {
          transition: transform 0.6s ease;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        // .news-slider-container :global(.swiper-slide):hover img {
        //   transform: scale(1.05);
        // }

        .news-slider-container :global(.swiper-button-next),
        .news-slider-container :global(.swiper-button-prev) {
          color: white;
          background: rgba(0, 0, 0, 0.6);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
          top: 30px;
          z-index: 10;
        }

        .news-slider-container :global(.swiper-button-next) {
          right: 10px;
          left: auto;
        }

        .news-slider-container :global(.swiper-button-prev) {
          right: 55px;
          left: auto;
        }

        .news-slider-container :global(.swiper-button-next):after,
        .news-slider-container :global(.swiper-button-prev):after {
          font-size: 14px;
          font-weight: bold;
        }

        /* External pagination container */
        .news-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          width: 100%;
        }

        /* External pagination styles */
        .news-slider-wrapper :global(.swiper-pagination) {
          position: static !important;
          bottom: auto !important;
          top: auto !important;
          text-align: center !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          z-index: 10;
        }

        .news-slider-wrapper :global(.swiper-pagination-bullet) {
          width: 25px !important;
          height: 5px !important;
          border-radius: 2.5px !important;
          background: rgba(0, 0, 0, 0.3) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
          display: inline-block !important;
        }

        .news-slider-wrapper :global(.swiper-pagination-bullet-active) {
          background: #333 !important;
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

        /* Responsive styles */
        @media (min-width: 640px) {
          .news-slider-container :global(.swiper-slide) img {
            height: 400px;
          }
        }
      `}</style>

      <div className="news-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            el: ".news-pagination",
          }}
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
          className="news-swiper"
        >
          {news_slider_data.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`News slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* External pagination container */}
      <div className="news-pagination"></div>
    </div>
  );
};

export default NewsSlider;
