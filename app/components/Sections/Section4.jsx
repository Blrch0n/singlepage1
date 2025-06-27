"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useData } from "@/contexts/DataContext";

const defaultSection4Data = [
  {
    title: "Design Excellence",
    description:
      "We create visually stunning and user-friendly designs that capture your brand essence and engage your audience effectively.",
  },
  {
    title: "Technology Innovation",
    description:
      "Our cutting-edge technology solutions help businesses stay ahead in the rapidly evolving digital landscape.",
  },
  {
    title: "Digital Strategy",
    description:
      "We develop comprehensive digital strategies that align with your business goals and drive measurable results.",
  },
];

const Section4 = () => {
  const { data } = useData();

  // Get data from API or use defaults
  const aboutData = data.about?.section3 || {};
  const uniqueSpaceData = aboutData.uniqueSpace || {};
  const accordionData = aboutData.accordion || defaultSection4Data;
  const imageData = aboutData.image || {};

  // Use API accordion data or fallback to default
  const section4Data =
    accordionData.length > 0 ? accordionData : defaultSection4Data;
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full lg:w-[50%] bg-[#25282b] min-h-screen py-[60px] px-[30px] lg:py-[120px] lg:px-[150px] flex flex-col">
        <h3 className="text-[#b8b8b8]">
          {uniqueSpaceData.title || "UNIQUE SPACE"}
        </h3>
        <h2 className="text-[24px] md:text-[36px] text-white">
          {uniqueSpaceData.subtitle ||
            "Slight Differences Can Trigger Creativity"}
        </h2>
        <span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
        />
        <p className="text-[#999999] text-[16px] md:text-[18px] mb-6">
          {uniqueSpaceData.description ||
            "We are the comprehensive design and technology partner for the digital age. We help businesses to stay relevant to their customers in the digital era by touching hearts and minds."}
        </p>

        <div className="flex-1 overflow-y-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {section4Data.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="w-full text-black"
              >
                <AccordionTrigger className="text-[#666] px-6 py-4 cursor-pointer bg-white rounded-none text-left hover:bg-gray-50 transition-colors duration-200">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#999999] text-[16px] md:text-[18px] p-4 md:p-8 max-h-[300px] overflow-y-auto">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <motion.div
        className="hidden lg:block w-[50%] min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url("${imageData.src || "/image2.jpg"}")` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default Section4;
