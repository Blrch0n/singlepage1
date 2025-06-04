import { FiWatch } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { GoPlug } from "react-icons/go";
const section8Data = [
  {
    icon: <FiWatch size={40} color="white" />,
    title: "Unlimited Colors",
    color: "#664ed3",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
  {
    icon: <TfiWorld size={40} color="white" />,
    title: "High Quality Design",

    color: "#ff1053",
    desciption:
      "We help our clients in developing systems of digital products and services over time.",
  },
  {
    icon: <GoPlug size={40} color="white" />,
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
          className="flex flex-col items-start justify-start text-white gap-4 text-center py-[60px] px-[50px]"
        >
          <span className="p-5 w-[74px] flex items-center justify-center h-[74px] border-2 rounded-3xl border-white">
            {item.icon}
          </span>
          <h3 className="text-[16px] font-bold mt-2">{item.title}</h3>
          <p className="text-start">{item.desciption}</p>
        </div>
      ))}
    </div>
  );
};

export default Section8;
