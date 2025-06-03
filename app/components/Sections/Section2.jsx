const section2_data = [
  {
    img: "https://max-themes.net/demos/enside/main/upload/man-business-landscape.jpg",
    title: "Brand Development",
    description:
      "Our energy and expertise are focus in inspiring projects, activation campaigns and influence strategies with our brands",
  },
  {
    img: "https://max-themes.net/demos/enside/main/upload/office-hand.jpg",
    title: "Content Strategy",
    description:
      "We believe in a collaborative partnership where we work with you and your brand to create the perfect solution",
  },
  {
    img: "https://max-themes.net/demos/enside/main/upload/women-house-interior.jpg",
    title: "Ecommerce & Technology",
    description:
      "Development and Design – every solution needs a conceptual design that the further work will be based on.",
  },
];

const Section2 = () => {
  return (
    <div className="w-full h-fit flex py-[110px] flex-col gap-10 items-center justify-center bg-white text-black">
      <div className="w-full h-fit flex flex-col items-center justify-center text-center">
        <h3 className="text-[#828282]">Welcome</h3>
        <h2 className="text-[72px] text-[#2A2F35] w-[520px]">
          Outstanding Features
        </h2>
        <span
          className="block h-[6px] w-[35px] rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p className="text-[18px] text-[#999999] w-[570px]">
          We are the comprehensive design and technology partner for the digital
          age. We help businesses to stay relevant to their customers in the
          digital era by touching hearts and minds.
        </p>
      </div>
      <div className="w-full h-fit flex flex-wrap items-center justify-center">
        {section2_data.map((item, index) => (
          <div
            className="w-[370px] h-fit flex flex-col gap-10 items-center justify-center text-center m-4"
            key={index}
          >
            <img
              className="w-full h-[270px] object-cover bg-center bg-cover"
              src={item.img}
              alt={item.title}
            />
            <h1 className="text-[#2A2F35] text-[21px]">{item.title}</h1>
            <p className="text-[#999999]">{item.description}</p>
            <span className="bg-[#2A2F3530] w-1/2 h-[1px]"></span>
          </div>
        ))}
      </div>
      <button className="btn-gradient hover:bg-[#3452ff] duration-300 ease-in-out px-[18px] rounded-[5px] text-white py-4">
        Explore All Features
      </button>
    </div>
  );
};

export default Section2;
