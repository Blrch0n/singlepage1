import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const section4Data = [
  {
    title: "UNIQUE SPACE",
    description:
      "We are the comprehensive design and technology partner for the digital age. We help businesses to stay relevant to their customers in the digital era by touching hearts and minds.",
  },
  {
    title: "UNIQUE SPACE",
    description:
      "We are the comprehensive design and technology partner for the digital age. We help businesses to stay relevant to their customers in the digital era by touching hearts and minds.",
  },
  {
    title: "UNIQUE SPACE",
    description:
      "We are the comprehensive design and technology partner for the digital age. We help businesses to stay relevant to their customers in the digital era by touching hearts and minds.",
  },
];

const Section4 = () => {
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="w-[50%] bg-[#25282b] h-full py-[120px] px-[150px] ">
        <h3 className="text-[#b8b8b8]">UNIQUE SPACE</h3>
        <h2 className="text-[36px] text-white">
          Slight Differences Can Trigger Creativity
        </h2>
        <span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        ></span>
        <p className="text-[#999999] text-[18px] mb-6">
          We are the comprehensive design and technology partner for the digital
          age. We help businesses to stay relevant to their customers in the
          digital era by touching hearts and minds.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {section4Data.map((item, index) => (
            <AccordionItem
              value={`item-${index}`}
              className={"w-full  text-black"}
              key={index}
            >
              <AccordionTrigger className="text-[#666] px-6 py cursor-pointer bg-white rounded-none text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#999999] text-[18px] p-8">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div
        className="w-[50%] h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/image2.jpg")' }}
      ></div>
    </div>
  );
};

export default Section4;
