"use client";
import { IoUmbrellaOutline } from "react-icons/io5";
import { PiLego } from "react-icons/pi";
import { TbHammer } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsSafe2 } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const buttonData = ["Prototypes", "Development", "Support", "Design"];

const statusData = [
  {
    icon: <AiFillLike />,
    title: 97,
    description: "Percent of users recommend us to friends and family",
  },
  {
    icon: <BsSafe2 />,
    title: 350,
    description: "Companies have shifted to using us recently",
  },
  {
    icon: <AiOutlineGlobal />,
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
    <div>
      <div className="w-[50%] bg-white h-fit flex flex-col">
        <h3>Unique services</h3>
        <h2>Our Approach</h2>
        <span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p>We offer custom solutions to industry leading companies</p>
      </div>
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 p-8 bg-white text-black">
          {buttonData.map((item, index) => (
            <div key={index} onClick={() => setIsClicked(item)}>
              {item}
            </div>
          ))}
        </div>
        {isclicked === "Prototypes" && (
          <div className="w-full h-fit flex flex-row bg-whtie items-center justify-center text-center p-4">
            <div>
              <h2>All you need is Enside, a modern & simple template</h2>
              <p>
                We are the comprehensive design and technology partner for the
                digital age. We help businesses to stay relevant to their
                customers in the digital era by touching hearts and minds.
              </p>
            </div>
            <div className="flex flex-row w-full h-fit justify-between items-center gap-4">
              <div
                className="w-[300px] h-[300px] p-10 flex flex-col items-center justify-center text-center bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg",
                }}
              >
                <IoUmbrellaOutline />
                <h1>We bring the brand to life</h1>
                <p>We only hire great people who strike to push their idea</p>
              </div>
              <div
                className="w-[300px] h-[300px] p-10 flex flex-row items-center justify-center text-center bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://max-themes.net/demos/enside/main/upload/friends-montains-1170x660.jpg",
                }}
              >
                <PiLego />
                <h1>We bring the brand to life</h1>
                <p>We only hire great people who strike to push their idea</p>
              </div>
            </div>
          </div>
        )}
        {isclicked === "Development" && (
          <div className="w-full h-fit flex flex-row items-center justify-between p-8 bg-white text-black">
            <div>
              <h1>How to Start your Business</h1>
              <p>
                We are the comprehensive design and technology partner for the
                digital age. We help businesses to stay relevant to their
                customers in the digital era by touching hearts and minds.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-8 p-8">
              {developmentData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start justify-start gap-4 p-4"
                >
                  <div>{data.icon}</div>
                  <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {isclicked === "Support" && (
          <div className="w-full h-fit flex flex-row items-center justify-between p-8 bg-white text-black">
            <div>
              <h1>Amazing and Fast 24/7 support</h1>
              <p>
                We are the comprehensive design and technology partner for the
                digital age. We help businesses to stay relevant to their
                customers in the digital era by touching hearts and minds.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-8 p-8">
              {developmentData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start justify-start gap-4 p-4"
                >
                  <div>{data.icon}</div>
                  <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {isclicked === "Design" && (
          <div className="w-full h-fit flex flex-row items-center justify-between p-8 bg-white text-black">
            <div className="w-[30%] h-fit flex flex-col">
              <h1>Create unique layout</h1>
              <p>
                We are the comprehensive design and technology partner for the
                digital age. We help businesses to stay relevant to their
                customers in the digital era by touching hearts and minds.
              </p>
            </div>
            <div className="w-[30%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center justify-center gap-8 p-8">
              {designData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start justify-start gap-4 p-4"
                >
                  <div>{data.icon}</div>
                  <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="w-[300px] h-[300px] text-white p-10 flex flex-row items-center justify-center text-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://max-themes.net/demos/enside/main/upload/team-3-1024x660.jpg)",
              }}
            >
              <PiLego />
              <h1>We bring the brand to life</h1>
              <p>We only hire great people who strike to push their idea</p>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="w-full h-fit flex flex-col items-center justify-center text-black p-8 bg-white">
        <h1>We create human experience in a digital world</h1>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 p-8 bg-white text-black">
          {statusData.map((data, index) => (
            <div
              className="flex flex-col items-center justify-center text-center p-4"
              key={index}
            >
              <h1 className="flex items-center justify-center text-3xl font-bold mb-2">
                {data.icon} {data.title}
              </h1>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9;
