const section7Data = [
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/architecture-stairs-vertical.jpg",
    title: "STRATEGY",
    description:
      "Enside allows you to build a fully functional and feature rich onepage WordPress site, whatever your agency or business, without any knowledge of coding.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/man-laughtig.jpg",
    title: "INSIGHT",
    description:
      "Effortlessly beautiful, Enside offers a collection of pre-built demos, with one-click import, and you can make your site your own using WP Bakery for WordPress.",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/interior-fashion.jpg",
    title: "EXPERIENCE",
    description:
      "We’ve created a wide selection of stunning and powerful demos so that you can find the best starting point for your personal, business or agency website.",
  },
  {
    image:
      "https://max-themes.net/demos/enside/main/upload/architecture-stairs.jpg",
    title: "PERFORMANCE",
    description:
      "The admin panel invites you to get creative and make your site unique in seconds. You get to choose how your users engage with you and your business.",
  },
];
const Section7 = () => {
  return (
    <div className="w-full h-fit bg-[#25282b] py-[120px] flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto h-fit flex flex-col gap-[80px] items-center justify-center text-white">
        <div className="w-full h-fit flex flex-col items-center gap-2">
          <h3 className="text-[#b8b8b8] text-[16px] uppercase">
            Unique services
          </h3>
          <h2 className="text-[72px] text-white">Our Approach</h2>
          <span
            className="block h-1.5 w-[35px] rounded-full my-4"
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            }}
          ></span>
          <p className="text-[18px] text-[#999999]">
            We offer custom solutions to industry leading companies
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 text-black">
          {section7Data.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-white group w-[270px] relative h-[350px] overflow-hidden rounded-[10px] px-[25px] pb-[25px] pt-[100px] justify-center bg-cover bg-center text-center p-4"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
            >
              <div className="absolute top-0 left-0 inset-0 bg-[#00000080] group-hover:bg-[#8978d370] duration-300 ease-in-out z-0"></div>
              <h3 className="text-2xl relative z-10">{data.title}</h3>
              <p className="relative text-center z-10 text-[16px]">
                {data.description.length <= 160
                  ? data.description
                  : data.description.slice(0, 160) + "..."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
