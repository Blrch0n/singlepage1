import React from "react";

const Section3 = () => {
  return (
    <div
      className="w-full h-fit flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #664ed3 0%, #bf67ef 100%)",
      }}
    >
      <div className="w-full h-fit flex max-w-[1200px] flex-row items-center justify-between text-white p-8">
        <div className="w-1/2 h-full flex flex-col items-start justify-center">
          <h1 className="text-[30px]">Creative Spirit</h1>
          <p className="text-[#b8b8b8]">
            The pieces we make are the free thoughts that come with daily work
            given a physical form
          </p>
        </div>
        <button
          style={{
            background: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
            color: "#fff",
            border: "none",
            padding: "0.7rem 1.7rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          See all Features
        </button>
      </div>
    </div>
  );
};

export default Section3;
