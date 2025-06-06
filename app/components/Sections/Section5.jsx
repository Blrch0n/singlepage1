"use client";
import { motion } from "framer-motion";

const section5Data = [
  {
    image: "https://max-themes.net/demos/enside/main/upload/tree-brancg.png",
    path: "Agency / App Design / Services",
    title: "Product Design",
    description: "Creative RIng",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/Iphone-portfolio.jpg",
    path: "Agency / Services / UI&UX",
    title: "Ugly Delicious",
    description: "Personal",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/kitchen-portfolio.jpg",
    path: "App Design / Services / UI&UX",
    title: "Kitchen Stories",
    description: "Client: Themeforest",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/man-portfolio.jpg",
    path: "Agency / App Design / Services",
    title: "Commercial",
    description: "Special",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/lamp-portfolio.jpg",
    path: "App Design / Services",
    title: "Lamp Mock Up",
    description: "Perfect for Home",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/bird-portfolio.jpg",
    path: "Agency",
    title: "Enside Web",
    description: "Mock up components",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/girl-yellow-portfolio.jpg",
    path: "Agency / App Design / Services / UI&UX ",
    title: "Pixel Days",
    description: "Digital",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/chair-portfolio.jpg",
    path: "Agency / App Design / Services / UI&UX",
    title: "Particles",
    description: "Commercial",
  },
];

const Section5 = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="bg-white max-w-[1200px] w-full h-fit flex flex-col gap-8 sm:gap-12 items-center justify-center text-black py-12 sm:py-16 lg:py-[100px]">
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-center text-center px-4">
          <h3 className="text-[#828282] uppercase text-sm sm:text-base">
            portfolio
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] w-full max-w-[520px] leading-tight">
            Case Studies
          </h2>
          <span
            className="block h-[6px] w-[35px] rounded-full my-4"
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            }}
          />
          <p className="text-base sm:text-[18px] text-[#999999] w-full max-w-[520px] leading-relaxed">
            Inspiring and functional branding, development, consulting,
            websites, online services, and apps.
          </p>
        </div>

        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-auto place-items-center px-4">
          {section5Data.map((item, index) => (
            <motion.div
              className="w-full max-w-sm h-fit flex flex-col items-center gap-1 justify-center text-center"
              key={index}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-full group relative mb-4">
                <img
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#00000080] flex justify-center items-center transition-all duration-300 rounded-lg">
                  <button className="bg-white text-black px-4 sm:px-5 hover:bg-[#3452ff] py-2 sm:py-3 text-xs sm:text-[12px] rounded-[5px] opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:text-white duration-300">
                    View more
                  </button>
                </div>
              </div>

              <span className="uppercase text-[9px] sm:text-[10px] space-x-0.5 text-[#2A2F35]">
                {item.path}
              </span>

              <h1 className="text-lg sm:text-[20px] font-normal">
                {item.title}
              </h1>

              <p className="text-xs sm:text-[13px] text-[#68686d]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
