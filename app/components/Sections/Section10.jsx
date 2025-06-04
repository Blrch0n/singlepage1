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
          className="flex flex-col w-full h-[150px] group relative items-center justify-center text-center p-4"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#000000c2] group-hover:bg-[#3452ffc2] transition-all duration-300 ease-in-out"></div>
          <h3 className="text-[21px] font-semibold text-white relative p-2 rounded">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Section10;
