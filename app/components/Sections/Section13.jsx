import React from "react";

const Section13 = () => {
  return (
    <div
      className="w-full h-fit"
      style={{
        background: "linear-gradient(to right, #664ed3 0%, #87d14b 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto h-fit flex flex-row items-center justify-between p-8">
        <div>
          <h2 className="text-[30px] text-white">Get in touch </h2>
          <p className="text-[#b8b8b8]">
            Want to Know More About Us? Get In Touch
          </p>
        </div>
        <button
          style={{
            background: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
          }}
          className="text-white py-3 px-8 rounded-[5px]"
        >
          See all Features
        </button>
      </div>
    </div>
  );
};

export default Section13;
