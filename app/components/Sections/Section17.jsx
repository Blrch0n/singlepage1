import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";

const section17Data = [
  {
    icon: <MdOutlinePhoneIphone className="text-4xl text-blue-500" />,
    title: "Phone",
    description: "+1 234 567 890",
  },
  {
    icon: <IoMailOpen className="text-4xl text-blue-500" />,
    title: "Email",
    description: "iDzI5@example.com",
  },
  {
    icon: <MdContactMail className="text-4xl text-blue-500" />,
    title: "Address",
    description: "123 Main Street, City, Country",
  },
];
const Section17 = () => {
  return (
    <div className="w-full h-fit grid grid-cols-3 text-black items-center justify-center bg-white">
      {section17Data.map((data, index) => (
        <div
          key={index}
          className="w-full h-fit flex flex-col items-center justify-center p-8 bg-gray-100"
        >
          <div>{data.icon}</div>
          <div>
            <p>{data.title}</p>
            <h1>{data.description}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section17;
