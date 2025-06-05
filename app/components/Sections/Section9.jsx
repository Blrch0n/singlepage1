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

const buttonData = ["Prototypes", "Development", "Support", "Design"];

const statusData = [
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

const developmentData = [
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

const designData = [
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
  const [isclicked, setIsClicked] = useState("Prototypes");
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

          // Easing function for smooth animation
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
      <motion.div
        className="max-w-[1200px] w-full h-fit flex flex-col items-center gap-2 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[#828282] text-[12px] sm:text-[14px] lg:text-[16px] uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          technology
        </motion.h3>
        <motion.h2
          className="text-[36px] sm:text-[56px] lg:text-[72px] text-[#2A2F35] px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Capabilities
        </motion.h2>
        <motion.span
          className="block h-1.5 w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 35, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#999999] max-w-[600px] px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Taking care of the new products's launch and user support
        </motion.p>
      </motion.div>

      <motion.div
        className="flex w-full h-fit justify-center flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-fit grid grid-cols-2 lg:grid-cols-4 items-center gap-2 justify-center p-4 sm:p-6 lg:p-8 bg-white text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {buttonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                backgroundColor: isclicked === item ? "#3452ff" : "transparent",
                color: isclicked === item ? "#fff" : "#2A2F35",
                borderColor: isclicked === item ? "#3452ff" : "#eeeeee",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.9 + index * 0.1,
              }}
              viewport={{ once: true }}
              className="border relative cursor-pointer flex items-center justify-center text-center py-2 px-3 sm:py-3 sm:px-4 min-w-[100px] sm:min-w-[120px] rounded-lg hover:bg-[#3452ff] hover:text-white text-sm sm:text-base"
              onClick={() => setIsClicked(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isclicked === item && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg border-2 border-[#3452ff]"
                  style={{ backgroundColor: "#3452ff" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {isclicked === "Prototypes" && (
            <motion.div
              key="prototypes"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row bg-white items-center justify-center text-center p-4 gap-8"
            >
              <motion.div
                className="flex w-full lg:w-[40%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  All you need is Enside, a modern & simple template
                </motion.h2>
                <motion.p
                  className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </motion.p>
              </motion.div>
              <div className="flex flex-col sm:flex-row w-full h-fit justify-center lg:justify-end items-center gap-4 sm:gap-6 lg:gap-8">
                <motion.div
                  initial={{ x: 50, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full sm:w-[300px] lg:w-[368px] h-[250px] sm:h-[280px] lg:h-[300px] relative rounded-[10px] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-cover bg-center text-white"
                  style={{
                    backgroundImage:
                      "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <IoUmbrellaOutline className="z-10 text-3xl sm:text-4xl mb-4" />
                  </motion.div>
                  <motion.h1
                    className="z-10 text-lg sm:text-xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    We bring the brand to life
                  </motion.h1>
                  <motion.p
                    className="z-10 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    We only hire great people who strike to push their idea
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full sm:w-[300px] lg:w-[368px] h-[250px] sm:h-[280px] lg:h-[300px] relative rounded-[10px] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-cover bg-center text-white"
                  style={{
                    backgroundImage:
                      "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <PiLego className="z-10 text-3xl sm:text-4xl mb-4" />
                  </motion.div>
                  <motion.h1
                    className="z-10 text-lg sm:text-xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Build Your Dream
                  </motion.h1>
                  <motion.p
                    className="z-10 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    We only hire great people who strike to push their idea
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {isclicked === "Development" && (
            <motion.div
              key="development"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row items-center justify-between p-4 bg-white text-black gap-8"
            >
              <motion.div
                className="flex w-full lg:w-[40%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  How to Start your Business
                </motion.h2>
                <motion.p
                  className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </motion.p>
              </motion.div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {developmentData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 text-center sm:text-left"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl sm:text-xl"
                    >
                      {data.icon}
                    </motion.div>
                    <div>
                      <motion.h1
                        className="text-lg sm:text-base font-semibold mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      >
                        {data.title}
                      </motion.h1>
                      <motion.p
                        className="text-sm text-[#999999]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        {data.description}
                      </motion.p>
                    </div>
                  </motion.div>
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 bg-white text-black gap-8"
            >
              <motion.div
                className="flex w-full lg:w-[40%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  How to Start your Business
                </motion.h2>
                <motion.p
                  className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </motion.p>
              </motion.div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {developmentData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 text-center sm:text-left"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl sm:text-xl"
                    >
                      {data.icon}
                    </motion.div>
                    <div>
                      <motion.h1
                        className="text-lg sm:text-base font-semibold mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      >
                        {data.title}
                      </motion.h1>
                      <motion.p
                        className="text-sm text-[#999999]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        {data.description}
                      </motion.p>
                    </div>
                  </motion.div>
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-[1200px] w-full min-h-[460px] h-fit flex flex-col lg:flex-row items-center justify-between p-4 bg-white text-black gap-8"
            >
              <motion.div
                className="flex w-full lg:w-[33.3%] flex-col gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-start"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-start text-[#2A2F35]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  How to Start your Business
                </motion.h2>
                <motion.p
                  className="text-center lg:text-start text-[#999999] text-[14px] sm:text-[16px] lg:text-[18px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </motion.p>
              </motion.div>
              <div className="w-full lg:w-[30%] grid grid-cols-1 items-center justify-center gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {designData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 text-center sm:text-left"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl sm:text-xl"
                    >
                      {data.icon}
                    </motion.div>
                    <div>
                      <motion.h1
                        className="text-lg sm:text-base font-semibold mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      >
                        {data.title}
                      </motion.h1>
                      <motion.p
                        className="text-sm text-[#999999]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        {data.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 50 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full sm:w-[280px] lg:w-[300px] h-[250px] sm:h-[280px] lg:h-[300px] text-white p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-cover bg-center relative rounded-[10px]"
                style={{
                  backgroundImage:
                    "url(https://max-themes.net/demos/enside/main/upload/team-3-1024x660.jpg)",
                }}
              >
                <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <PiLego className="z-10 text-3xl sm:text-4xl mb-4" />
                </motion.div>
                <motion.h1
                  className="z-10 text-lg sm:text-xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  We bring the brand to life
                </motion.h1>
                <motion.p
                  className="z-10 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  We only hire great people who strike to push their idea
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.hr
        className="max-w-[1200px] w-full h-[1px] bg-[#2A2F35] mx-4"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="max-w-[1200px] w-full h-fit flex flex-col gap-6 sm:gap-8 items-center justify-center text-black p-4 sm:p-6 lg:p-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-[#2A2F35] text-2xl sm:text-3xl lg:text-4xl text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We create human experience in a digital world
        </motion.h1>
        <motion.div
          className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 sm:gap-8 bg-white text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {statusData.map((data, index) => {
            const [count, countRef] = useCountAnimation(
              data.title,
              2000 + index * 200
            );

            return (
              <motion.div
                className="flex flex-col items-center justify-center text-center p-4"
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <motion.h1
                  ref={countRef}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[40px] sm:text-[50px] lg:text-[60px] mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-2 sm:mb-0"
                  >
                    {data.icon}
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {count}
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#828282] max-w-[280px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {data.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section9;
