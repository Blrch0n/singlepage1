"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useData } from "@/contexts/DataContext";

const Section3 = () => {
  const router = useRouter();
  const { data } = useData();

  // Get data from API or use defaults
  const aboutData = data.about?.section2 || {};
  const creativeSpiritData = aboutData.creativeSpirit || {};
  const actionButtonData = aboutData.actionButton || {};
  return (
    <div
      className="w-full h-fit flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #664ed3 0%, #bf67ef 100%)",
      }}
    >
      <motion.div
        className="w-full h-fit flex flex-col max-w-[1200px] sm:flex-row items-center justify-between text-white p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center mb-6 sm:mb-0">
          <h1 className="text-[30px] mb-4">
            {creativeSpiritData.title || "Creative Spirit"}
          </h1>
          <p className="text-[#b8b8b8] sm:text-start text-center">
            {creativeSpiritData.content ||
              "The pieces we make are the free thoughts that come with daily work given a physical form"}
          </p>
        </div>
        <motion.button
          style={{
            background: "linear-gradient(to right, #9888ef 0%, #8978d3 100%)",
            color: "#fff",
            border: "none",
            padding: "0.7rem 1.7rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => router.push(actionButtonData.link || "/")}
          whileHover={{
            scale: 1.0,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {actionButtonData.text || "See all Features"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Section3;
