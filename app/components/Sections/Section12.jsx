import { TbNotebook } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";

const section12Data = [
  {
    icon: (
      <TbNotebook className="text-4xl group-hover:text-black text-[#6d83ff]" />
    ),
    title: "Parallax Section",
    description:
      "This is how we can be sure that your brand expands according to market goals and continues to be attractive in the future",
  },
  {
    icon: (
      <AiFillLike className="text-4xl group-hover:text-black text-[#6d83ff]" />
    ),
    title: "Responsive Design",
    description:
      "It is fundamental to have a strategy that takes into consideration the features that are important to the client",
  },
];

const Section12 = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-[100px] lg:flex-row items-center justify-between bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url(/image4.jpg)" }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-[#00000080] bg-opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full lg:w-[45%] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-12">
        {/* Main Content Card */}
        <div className="w-full rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 transform transition-all duration-300">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-[#b8b8b8] font-semibold text-sm sm:text-[16px] uppercase tracking-wider mb-2">
              Our Concept
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              New products inspired by the changing working-style and times
            </h2>
            <span
              className="block h-1.5 w-16 rounded-full mb-4 sm:mb-6"
              style={{
                background: "linear-gradient(135deg, #3452ff 0%, #ad3ed8 100%)",
              }}
            ></span>
            <p className="text-[#ffffff] text-sm sm:text-base lg:text-lg leading-relaxed">
              Enside allows you to build a fully functional and feature rich
              onepage WordPress site, whatever your agency or business, without
              any knowledge of coding.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-6 sm:my-8" />

          {/* Features Grid */}
          <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-6 sm:gap-8">
            {section12Data.map((data, index) => (
              <div
                className="flex flex-col space-y-3 sm:space-y-4 p-3 sm:p-4 rounded-xl transition-all duration-500 transforms"
                key={index}
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-transparent border border-[#6d83ff] rounded-xl hover:border-white hover:bg-white transition-colors duration-300">
                  {data.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white transition-colors duration-300">
                  {data.title}
                </h3>
                <p className="text-[#b8b8b8] text-sm sm:text-[16px] leading-relaxed">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Container - Hidden on mobile, visible on lg+ screens */}
      <div className="hidden lg:flex relative z-10 w-[50%] flex-col items-center justify-center p-6 lg:p-12">
        <div className="relative group w-full">
          <img
            src="https://max-themes.net/demos/enside/main/upload/images-ipad-phone.png"
            alt="iPad and Phone mockup"
            className="w-full h-auto drop-shadow-2xl transform transition-all duration-500 filter"
          />
        </div>
      </div>
    </div>
  );
};

export default Section12;
