"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headerlinks = [
  "about",
  "our work",
  "services",
  "team",
  "news",
  "contact",
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionName) => {
    // Convert section name to match your div IDs
    let sectionId;
    switch (sectionName) {
      case "our work":
        sectionId = "work";
        break;
      default:
        sectionId = sectionName;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Motion variants
  const headerVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const backgroundVariants = {
    transparent: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <motion.section
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="w-full h-fit fixed top-0 left-0 right-0 z-50 flex items-center justify-center"
    >
      <motion.div
        variants={backgroundVariants}
        animate={isScrolled ? "scrolled" : "transparent"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full h-fit flex items-center px-4 py-2"
      >
        <div className="w-full justify-between mx-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={isScrolled ? "dark-logo" : "light-logo"}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-[179px] h-[46px] mx-auto my-4 cursor-pointer"
              src={
                isScrolled
                  ? "https://max-themes.net/demos/enside/main/img/logo.png"
                  : "https://max-themes.net/demos/enside/main/upload/logo-white.png"
              }
              onClick={() => scrollToSection("home")}
            />
          </AnimatePresence>
        </div>

        <motion.ul
          variants={navVariants}
          className="flex items-center justify-center w-full gap-4 text-[16px] font-semibold"
        >
          {headerlinks.map((link, index) => (
            <motion.li
              key={link}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection(link)}
              className={`cursor-pointer duration-300 ease-in-out relative ${
                isScrolled
                  ? "text-black hover:text-[#3452ff]"
                  : "text-white hover:text-[#3452ff]"
              }`}
            >
              {link.toUpperCase()}

              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#3452ff]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default Header;
