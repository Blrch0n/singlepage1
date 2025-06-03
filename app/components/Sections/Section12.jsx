import { TbNotebook } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
const section12Data = [
  {
    icon: <TbNotebook className="text-4xl text-blue-500" />,
    title: "Parallax Section",
    description:
      "This is how we can be sure that your brand expands according to market goals and continues to be attractive in the future",
  },
  {
    icon: <AiFillLike className="text-4xl text-blue-500" />,
    title: "Responsive Design",
    description:
      "ThIt is fundamental to have a strategy that takes into consideration the features that are important to the client",
  },
];
const Section12 = () => {
  return (
    <div className="w-full h-fit flex flex-row items-center justify-between bg-gray-100 p-8">
      <div className="w-[40%] h-fit flex flex-col items-center justify-center text-black p-8">
        <div className="w-full bg-white h-fit flex flex-col">
          <h3>our concept</h3>
          <h2>New products inspired by the changing working-style and times</h2>
          <span
            className="block h-2 w-6 rounded-full my-4"
            style={{
              background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
            }}
          ></span>
          <p>
            Enside allows you to build a fully functional and feature rich
            onepage WordPress site, whatever your agency or business, without
            any knowledge of coding.
          </p>
        </div>
        <hr />
        <div className="w-full grid grid-cols-2">
          {section12Data.map((data, index) => (
            <div className="w-full flex flex-col" key={index}>
              <span>{data.icon}</span>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%] h-fit flex flex-col items-center justify-center text-black p-8">
        <img
          src="https://max-themes.net/demos/enside/main/upload/images-ipad-phone.png"
          alt="ehll"
        />
      </div>
    </div>
  );
};

export default Section12;
