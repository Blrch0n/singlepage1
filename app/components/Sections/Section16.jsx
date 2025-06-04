import React from "react";
const section16Data = [
  "https://max-themes.net/demos/enside/main/upload/logo-b-2.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-3.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-4.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-7.png",
  "https://max-themes.net/demos/enside/main/upload/logo-b-8.png",
];

const Section16 = () => {
  return (
    <div className="w-full h-fit bg-[#fff] py-[110px]">
      <div className="max-w-[1200px] mx-auto w-full h-fit ">
        <div className="mb-8 w-full h-fit flex flex-col items-center justify-center">
          <h3 className="text-[#828282] font-semibold text-[16px] uppercase tracking-wider mb-2">
            friends
          </h3>
          <h2 className="text-[72px] w-[570px] text-center text-[#2A2F35] leading-tight mb-4">
            Our Partners and Brands
          </h2>
          <span
            className="block h-1.5 w-8 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%)",
            }}
          ></span>
          <p className="text-[#808080] w-[570px] text-center text-base lg:text-lg leading-relaxed">
            Our team of strategists, designers, and engineers deliver valuable,
            tangible customer experiences
          </p>
        </div>
        <div className="w-full h-fit grid grid-cols-5 gap-4 p-8">
          {section16Data.map((data, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-row items-center justify-center"
            >
              <img
                src={data}
                alt={data}
                className=" grayscale-100 w-[210px] h-auto hover:grayscale-0 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section16;
