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
    <div>
      <div className="w-full bg-white h-fit flex flex-col">
        <h3>friends</h3>
        <h2>Our Partners and Brands</h2>
        <span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p>
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
              className=" grayscale-100 hover:grayscale-0 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section16;
