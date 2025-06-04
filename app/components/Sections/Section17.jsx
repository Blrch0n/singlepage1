import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";

const section17Data = [
  {
    icon: <MdOutlinePhoneIphone className="text-[40px] text-[#fcb03b]" />,
    title: "Phone",
    description: "+1 234 567 890",
  },
  {
    icon: <IoMailOpen className="text-[40px] text-[#f15b26]" />,
    title: "Email",
    description: "iDzI5@example.com",
  },
  {
    icon: <MdContactMail className="text-[40px] text-[#3cb878]" />,
    title: "Address",
    description: "123 Main Street, City, Country",
  },
];
const Section17 = () => {
  return (
    <div className="w-full h-fit bg-[#eeeeee] ">
      <div className="max-w-[1200px] mx-auto w-full h-fit grid grid-cols-3 text-black items-center justify-center ">
        {section17Data.map((data, index) => (
          <div
            key={index}
            className={`w-full h-fit flex flex-row gap-8 items-center justify-center p-8 ${
              index < section17Data.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <div>{data.icon}</div>
            <div>
              <p className="text-[14px] text-[#828282]">{data.title}</p>
              <h1 className="text-[25px] text-[#2A2F35] font-bold">
                {data.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section17;
