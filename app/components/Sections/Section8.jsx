import { FiWatch } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { GoPlug } from "react-icons/go";
const section8Data = [
  {
    icon: <FiWatch size={40} />,
    title: "Unlimited Colors",
    color: "#664ed3",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
  {
    icon: <TfiWorld size={40} />,
    title: "High Quality Design",

    color: "#ff1053",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
  {
    icon: <GoPlug size={40} />,
    title: "Luxurious Layouts",
    color: "#737884",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
];

const Section8 = () => {
  return (
    <div className="w-full h-fit grid grid-cols-3">
      {section8Data.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: item.color }}
          className="flex flex-col items-center justify-center text-center p-4"
        >
          <span className="w-fit h-fit p-5 border rounded-[8px] border-white">
            {item.icon}
          </span>
          <h3>{item.title}</h3>
          <p>{item.desciption}</p>
        </div>
      ))}
    </div>
  );
};

export default Section8;
