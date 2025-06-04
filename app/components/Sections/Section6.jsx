import { BsSafe } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
const section6Data = [
  {
    icon: <BsSafe color="#a9a9a9" size={40} />,
    title: "Tailored",
    description:
      "We believe in a collaborative partnership where we work with you to create the perfect solution",
  },
  {
    icon: <FaHelmetSafety color="#a9a9a9" size={40} />,
    title: "Strategic",
    description:
      "Our energy is focus in inspiring projects, activation campaigns and influence strategies",
  },
  {
    icon: <PiBag color="#a9a9a9" size={40} />,
    title: "Quality",
    description:
      "Development  – every solution needs a conceptual design that the further work will be based on.",
  },
  {
    icon: <GiCoffeeCup color="#a9a9a9" size={40} />,
    title: "Complete",
    description:
      "We help businesses to stay relevant to their customers in the digital era by touching hearts and minds.",
  },
];

const Section6 = () => {
  return (
    <div className="w-full h-fit bg-white py-[80px] flex items-center justify-center">
      <div className="bg-white w-[1200px] mx-auto h-fit flex flex-col gap-[80px] items-center justify-center text-black ">
        <div className="w-full flex-row flex items-start gap-[100px] justify-between bg-white text-black">
          <div className="w-[50%] pr-[80px] h-fit gap-2 flex flex-col">
            <h3
              className="text-[#828282] uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Capabilities
            </h3>
            <h2 className="text-[36px] w-[420px]">
              Creative concept or System Design
            </h2>
            <span
              className="block h-1.5 w-[35px] rounded-full my-4"
              style={{
                background:
                  "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
              }}
            ></span>
            <p className="text-[#999999] text-[18px]">
              We are the comprehensive design and technology partner for the
              digital age. We help businesses to stay relevant to their
              customers in the digital era by touching hearts and minds.
            </p>
          </div>
          <img
            className="w-[50%] h-auto object-cover bg-center bg-cover"
            src="https://max-themes.net/demos/enside/main/upload/image-preview-enside.png"
            alt=""
          />
        </div>
        <hr className="w-full bg-[#EBEBEB]" />
        <div className="w-full grid grid-cols-4 items-center justify-center gap-8">
          {section6Data.map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-center justify-center text-center p-4"
            >
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, #3452ff 0%, #ad3ed8 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  width: "160px",
                  padding: "1px",
                  height: "160px",
                  color: "#fff",
                  fontSize: "2rem",
                }}
              >
                <span className="w-full h-full rounded-full flex items-center justify-center text-black bg-white">
                  {data.icon}
                </span>
              </div>
              <h3 className="text-[#2A2F35] text-[18px]">{data.title}</h3>
              <p className="text-[#999999]">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
