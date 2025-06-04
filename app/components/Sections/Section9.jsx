"use client";
import { IoUmbrellaOutline } from "react-icons/io5";
import { PiLego } from "react-icons/pi";
import { TbHammer } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { useState } from "react";
import { SlLike } from "react-icons/sl";
import { BsSafe2 } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

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

  return (
    <div className="w-full h-fit gap-[40px] bg-white py-[100px] flex flex-col items-center justify-center">
      <div className="max-w-[1200px] h-fit flex flex-col items-center gap-2">
        <h3 className="text-[#828282] text-[16px] uppercase">technology</h3>
        <h2 className="text-[72px] text-[#2A2F35]">Capabilities</h2>
        <span
          className="block h-1.5 w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p className="text-[18px] text-[#999999]">
          Taking care of the new products's launch and user support
        </p>
      </div>
      <div className="flex w-full h-fit justify-center flex-col items-center">
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-2 justify-center p-8 bg-white text-black">
          {buttonData.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                backgroundColor: isclicked === item ? "#3452ff" : "transparent",
                color: isclicked === item ? "#fff" : "#2A2F35",
                borderColor: isclicked === item ? "#3452ff" : "#eeeeee",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border relative cursor-pointer flex items-center justify-center text-center py-3 px-4 min-w-[120px] rounded-lg hover:bg-[#3452ff] hover:text-white"
              onClick={() => setIsClicked(item)}
            >
              {/* <span>{item}</span> */}
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
        </div>

        <AnimatePresence mode="wait">
          {isclicked === "Prototypes" && (
            <motion.div
              key="prototypes"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-[1200px] min-h-[460px] h-fit flex flex-row bg-white items-center justify-center text-center p-4"
            >
              <div className="flex w-[40%] flex-col gap-8 items-start justify-start">
                <h2 className="text-4xl text-start text-[#2A2F35]">
                  All you need is Enside, a modern & simple template
                </h2>
                <p className="text-start text-[#999999] text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="flex flex-row w-full h-fit justify-end items-center gap-8">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-[368px] h-[300px] relative rounded-[10px] p-10 flex flex-col items-center justify-center text-center bg-cover bg-center text-white"
                  style={{
                    backgroundImage:
                      "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                  <IoUmbrellaOutline className="z-10 text-4xl mb-4" />
                  <h1 className="z-10 text-xl font-bold mb-2">
                    We bring the brand to life
                  </h1>
                  <p className="z-10 text-sm">
                    We only hire great people who strike to push their idea
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-[368px] h-[300px] relative rounded-[10px] p-10 flex flex-col items-center justify-center text-center bg-cover bg-center text-white"
                  style={{
                    backgroundImage:
                      "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                  <PiLego className="z-10 text-4xl mb-4" />
                  <h1 className="z-10 text-xl font-bold mb-2">
                    Build Your Dream
                  </h1>
                  <p className="z-10 text-sm">
                    We only hire great people who strike to push their idea
                  </p>
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
              className="max-w-[1200px] min-h-[460px] h-fit flex flex-row items-center justify-between p-4 bg-white text-black"
            >
              <div className="flex w-[40%] flex-col gap-8 items-start justify-start">
                <h2 className="text-4xl text-start text-[#2A2F35]">
                  How to Start your Business
                </h2>
                <p className="text-start text-[#999999] text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-8 p-8">
                {developmentData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-row items-start justify-start gap-4 p-4"
                  >
                    <div>{data.icon}</div>
                    <div>
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>
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
              className="max-w-[1200px] min-h-[460px] h-fit flex flex-row items-center justify-between p-8 bg-white text-black"
            >
              <div className="flex w-[40%] flex-col gap-8 items-start justify-start">
                <h2 className="text-4xl text-start text-[#2A2F35]">
                  How to Start your Business
                </h2>
                <p className="text-start text-[#999999] text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-8 p-8">
                {developmentData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-row items-start justify-start gap-4 p-4"
                  >
                    <div>{data.icon}</div>
                    <div>
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>
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
              className="max-w-[1200px] min-h-[460px] h-fit flex flex-row items-center justify-between p-8 bg-white text-black"
            >
              <div className="flex w-[33.3%] flex-col gap-8 items-start justify-start">
                <h2 className="text-4xl text-start text-[#2A2F35]">
                  How to Start your Business
                </h2>
                <p className="text-start text-[#999999] text-[18px]">
                  We are the comprehensive design and technology partner for the
                  digital age. We help businesses to stay relevant to their
                  customers in the digital era by touching hearts and minds.
                </p>
              </div>
              <div className="w-[30%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center justify-center gap-8 p-8">
                {designData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-row items-start justify-start gap-4 p-4"
                  >
                    <div>{data.icon}</div>
                    <div>
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-[300px] h-[300px] text-white p-10 flex flex-col items-center justify-center text-center bg-cover bg-center relative rounded-[10px]"
                style={{
                  backgroundImage:
                    "url(https://max-themes.net/demos/enside/main/upload/team-3-1024x660.jpg)",
                }}
              >
                <div className="absolute inset-0 bg-[#00000080] rounded-[10px]"></div>
                <PiLego className="z-10 text-4xl mb-4" />
                <h1 className="z-10 text-xl font-bold mb-2">
                  We bring the brand to life
                </h1>
                <p className="z-10 text-sm">
                  We only hire great people who strike to push their idea
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <hr className="max-w-[1200px] w-full h-[1px] bg-[#2A2F35]" />
      <div className="max-w-[1200px] w-full h-fit flex flex-col gap-8 items-center justify-center text-black p-8 bg-white">
        <h1 className="text-[#2A2F35] text-4xl">
          We create human experience in a digital world
        </h1>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 bg-white text-black">
          {statusData.map((data, index) => (
            <div
              className="flex flex-col items-center justify-center text-center p-4"
              key={index}
            >
              <h1 className="flex items-center justify-start gap-8 text-[60px] mb-2">
                {data.icon} {data.title}
              </h1>
              <p className="text-[18px] text-[#828282]">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9;
