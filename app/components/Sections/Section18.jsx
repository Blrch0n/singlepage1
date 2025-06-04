import React from "react";

const Section18 = () => {
  return (
    <div
      className="w-full h-[650px] relative bg-cover flex items-center bg-fixed justify-center bg-center"
      style={{ backgroundImage: "url(/image5.jpg)" }}
    >
      <div className="absolute inset-0 bg-[#00000090]"></div>
      <div className="relative text-white flex flex-col w-[500px] items-center justify-center text-center gap-4">
        <p className="text-[14px]">Want to be our client?</p>
        <h2 className="text-[55px]">No subscription, you only pay once.</h2>
        <button
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            color: "#fff",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Purchase theme
        </button>
      </div>
    </div>
  );
};

export default Section18;
