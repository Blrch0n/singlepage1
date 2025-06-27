"use client";
import { IoUmbrellaOutline } from "react-icons/io5";
import { PiLego } from "react-icons/pi";
import { TbHammer } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { SlLike } from "react-icons/sl";
import { BsSafe2 } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useData } from "../../../contexts/DataContext";

// Fallback data
const fallbackButtonData = ["Prototypes", "Development", "Support", "Design"];

const fallbackStatusData = [
  {
    icon: <SlLike size={42} fontWeight={200} color="#3452ff" />,
    title: 97,
    description: "Percent of users recommend us to friends and family",
  },
  {
    icon: <BsSafe2 size={42} fontWeight={200} color="#3452ff" />,
    title: 350,
    description: "Companies have shifted to using us recently",
  },
  {
    icon: <AiOutlineGlobal size={42} fontWeight={200} color="#3452ff" />,
    title: 35,
    description: "We deliver so much more than the competition",
  },
];

const fallbackDevelopmentData = [
  {
    icon: <TbHammer />,
    title: "Design & Developing",
    description:
      "Creative concept – every solution needs a conceptual design that the further work will be based on.",
  },
  {
    icon: <PiStudent />,
    title: "Fully Responsive",
    description:
      "Creative concept – every solution needs a conceptual design that the further work will be based on.",
  },
  {
    icon: <FaRegUserCircle />,
    title: "Great Service",
    description:
      "Creative concept – every solution needs a conceptual design that the further work will be based on.",
  },
  {
    icon: <RiToolsFill />,
    title: "Fast Support",
    description:
      "Creative concept – every solution needs a conceptual design that the further work will be based on.",
  },
];

const fallbackDesignData = [
  {
    icon: <TbHammer />,
    title: "Design & Developing",
    description:
      "Creative concept – every solution needs a conceptual design that the further work will be based on.",
  },
  {
    icon: <PiStudent />,
    title: "Fully Responsive",
    description:
      "Creative concept – every solution needs a conceptual design that the further work will be based on.",
  },
];

const Section9 = () => {
  const { data, loading, error } = useData();
  const [isclicked, setIsClicked] = useState("Prototypes");

  // Extract section data from API or use fallbacks
  const section9Data = data?.section9 || {};
  const buttonData = section9Data.tabs || fallbackButtonData;
  const statusData = section9Data.stats || fallbackStatusData;
  const developmentData = section9Data.capabilities || fallbackDevelopmentData;
  const designData = section9Data.design || fallbackDesignData;
  const headerData = section9Data.header || {};

  if (loading) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("Section9 error:", error);
    // Continue with fallback data
  }

  const useCountAnimation = (targetValue, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true);
        let startTime = null;
        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * targetValue));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, targetValue, duration, hasAnimated]);

    return [count, ref];
  };

  return (
    <motion.div
      className="w-full h-fit gap-[20px] sm:gap-[30px] lg:gap-[40px] bg-white py-[60px] sm:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section - Simplified */}
      <div className="max-w-[1200px] w-full h-fit flex flex-col items-center gap-2 text-center">
        <h3 className="text-[#828282] text-[12px] sm:text-[14px] lg:text-[16px] uppercase">
          {headerData.subtitle || "technology"}
        </h3>
        <h2 className="text-[36px] sm:text-[56px] lg:text-[72px] text-[#2A2F35] px-4">
          {headerData.title || "Capabilities"}
        </h2>
        <span
          className="block h-1.5 w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        />
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] max-w-[600px] px-4">
          {headerData.description ||
            "Taking care of the new products's launch and user support"}
        </p>
      </div>

      {/* Tab Navigation - Simplified */}
      <div className="flex w-full h-fit justify-center flex-col items-center">
        <div className="w-fit grid grid-cols-2 lg:grid-cols-4 items-center gap-2 justify-center p-4 sm:p-6 lg:p-8 bg-white text-black">
          {buttonData.map((item, index) => (
            <motion.div
              key={index}
              animate={{
                backgroundColor: isclicked === item ? "#3452ff" : "transparent",
                color: isclicked === item ? "#fff" : "#2A2F35",
                borderColor: isclicked === item ? "#3452ff" : "#eeeeee",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border relative cursor-pointer flex items-center justify-center text-center py-2 px-3 sm:py-3 sm:px-4 min-w-[100px] sm:min-w-[120px] rounded-lg hover:bg-[#3452ff] hover:text-white text-sm sm:text-base"
              onClick={() => setIsClicked(item)}
            >
              <span className="relative z-10">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Tab Content - Simplified animations */}
        <AnimatePresence mode="wait">
          {isclicked === "Prototypes" && (
            <motion.div
              key="prototypes"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row bg-white items-center justify-center text-center p-4 gap-8"
            >
              <div className="flex w-full lg:w-[40%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]">
                  All you need is Enside, a modern & simple template
                </h2>
                <p className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row w-full h-fit justify-center lg:justify-end items-center gap-4 sm:gap-6 lg:gap-8">
                <div
                  className="w-full sm:w-[300px] lg:w-[368px] h-[250px] sm:h-[280px] lg:h-[300px] relative rounded-[10px] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-cover bg-center text-white hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundImage:
                      "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                  <IoUmbrellaOutline className="z-10 text-3xl sm:text-4xl mb-4" />
                  <h1 className="z-10 text-lg sm:text-xl font-bold mb-2">
                    We bring the brand to life
                  </h1>
                  <p className="z-10 text-sm">
                    We only hire great people who strike to push their idea
                  </p>
                </div>

                <div
                  className="w-full sm:w-[300px] lg:w-[368px] h-[250px] sm:h-[280px] lg:h-[300px] relative rounded-[10px] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-cover bg-center text-white hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundImage:
                      "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                  <PiLego className="z-10 text-3xl sm:text-4xl mb-4" />
                  <h1 className="z-10 text-lg sm:text-xl font-bold mb-2">
                    Build Your Dream
                  </h1>
                  <p className="z-10 text-sm">
                    We only hire great people who strike to push their idea
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {isclicked === "Development" && (
            <motion.div
              key="development"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row items-center justify-between p-4 bg-white text-black gap-8"
            >
              <div className="flex w-full lg:w-[40%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]">
                  How to Start your Business
                </h2>
                <p className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {developmentData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 text-center sm:text-left hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="text-2xl sm:text-xl hover:scale-110 transition-transform duration-200">
                      {data.icon}
                    </div>
                    <div>
                      <h1 className="text-lg sm:text-base font-semibold mb-2">
                        {data.title}
                      </h1>
                      <p className="text-sm text-[#999999]">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {isclicked === "Support" && (
            <motion.div
              key="support"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 bg-white text-black gap-8"
            >
              <div className="flex w-full lg:w-[40%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]">
                  How to Start your Business
                </h2>
                <p className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {developmentData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 text-center sm:text-left hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="text-2xl sm:text-xl hover:scale-110 transition-transform duration-200">
                      {data.icon}
                    </div>
                    <div>
                      <h1 className="text-lg sm:text-base font-semibold mb-2">
                        {data.title}
                      </h1>
                      <p className="text-sm text-[#999999]">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {isclicked === "Design" && (
            <motion.div
              key="design"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row items-center justify-between p-4 bg-white text-black gap-8"
            >
              <div className="flex w-full lg:w-[33.3%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]">
                  How to Start your Business
                </h2>
                <p className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="w-full lg:w-[30%] grid grid-cols-1 items-center justify-center gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {designData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 text-center sm:text-left hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="text-2xl sm:text-xl hover:scale-110 transition-transform duration-200">
                      {data.icon}
                    </div>
                    <div>
                      <h1 className="text-lg sm:text-base font-semibold mb-2">
                        {data.title}
                      </h1>
                      <p className="text-sm text-[#999999]">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="w-full sm:w-[280px] lg:w-[300px] h-[250px] sm:h-[280px] lg:h-[300px] text-white p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-cover bg-center relative rounded-[10px] hover:-translate-y-2 transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url(https://max-themes.net/demos/enside/main/upload/team-3-1024x660.jpg)",
                }}
              >
                <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                <PiLego className="z-10 text-3xl sm:text-4xl mb-4" />
                <h1 className="z-10 text-lg sm:text-xl font-bold mb-2">
                  We bring the brand to life
                </h1>
                <p className="z-10 text-sm">
                  We only hire great people who strike to push their idea
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <hr className="max-w-[1200px] w-full h-[1px] bg-[#2A2F35] mx-4" />

      {/* Stats Section - Simplified */}
      <div className="max-w-[1200px] w-full h-fit flex flex-col gap-6 sm:gap-8 items-center justify-center text-black p-4 sm:p-6 lg:p-8 bg-white">
        <h1 className="text-[#2A2F35] text-2xl sm:text-3xl lg:text-4xl text-center px-4">
          {section9Data.statsTitle ||
            "We create human experience in a digital world"}
        </h1>
        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 sm:gap-8 bg-white text-black">
          {statusData.map((data, index) => {
            const [count, countRef] = useCountAnimation(
              data.title,
              2000 + index * 200
            );

            return (
              <div
                className="flex flex-col items-center justify-center text-center p-4 duration-300"
                key={index}
              >
                <h1
                  ref={countRef}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[40px] sm:text-[50px] lg:text-[60px] mb-2"
                >
                  <div className="mb-2 sm:mb-0 duration-300">{data.icon}</div>
                  <span>{count}</span>
                </h1>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#828282] max-w-[280px]">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Section9;
