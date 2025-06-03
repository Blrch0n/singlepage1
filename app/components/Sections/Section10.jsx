import React from "react";

const section10Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/office-interior-3.jpg",
    title: "Our services",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/office-man.jpg",
    title: "Support team",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/coffe-vertical.jpg",
    title: "Contact us",
  },
];

const Section10 = () => {
  return (
    <div className="w-full h-fit grid grid-cols-3">
      {section10Data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center p-4"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Section10;
