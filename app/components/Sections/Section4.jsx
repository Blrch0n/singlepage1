"use client";
import { motion } from "framer-motion";
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
    <motion.div
      className="w-full flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-full sm:w-[70%] lg:w-[50%] bg-[#25282b] min-h-screen py-[60px] px-[30px] lg:py-[120px] lg:px-[150px] flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[#b8b8b8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          UNIQUE SPACE
        </motion.h3>
        <motion.h2
          className="text-[24px] md:text-[36px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Slight Differences Can Trigger Creativity
        </motion.h2>
        <motion.span
          className="block h-2 w-6 rounded-full my-4"
          style={{
            background: "linear-gradient(to right, #3452ff 0%, #ad3ed8 100%)",
          }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 24, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-[#999999] text-[16px] md:text-[18px] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          We are the comprehensive design and technology partner for the digital
          age. We help businesses to stay relevant to their customers in the
          digital era by touching hearts and minds.
        </motion.p>

        <motion.div
          className="flex-1 overflow-y-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {section4Data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="w-full text-black"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AccordionTrigger className="text-[#666] px-6 py-4 cursor-pointer bg-white rounded-none text-left hover:bg-gray-50 transition-colors duration-200">
                      {item.title}
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="text-[#999999] text-[16px] md:text-[18px] p-4 md:p-8 max-h-[300px] overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block w-[50%] min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/image2.jpg")' }}
        initial={{ opacity: 0, x: 50, scale: 1.1 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default Section4;
