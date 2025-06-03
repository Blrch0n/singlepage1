import React from "react";

const Section18 = () => {
  return (
    <div
      className="w-full h-[650px] bg-cover flex items-center justify-center bg-center"
      style={{ backgroundImage: "url(/image3.jpg)" }}
    >
      <div>
        <p>Want to be our client?</p>
        <h2>No subscription, you only pay once.</h2>
        <button
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            color: "#fff",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Purchase theme
        </button>{" "}
      </div>
    </div>
  );
};

export default Section18;
