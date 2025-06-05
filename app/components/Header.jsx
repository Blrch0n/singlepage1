"use client";
import { IoMdMenu } from "react-icons/io";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Check which section is currently in viewport
      const sections = headerlinks.map((link) => {
        let sectionId;
        switch (link) {
          case "our work":
            sectionId = "work";
            break;
          default:
            sectionId = link;
        }
        return { name: link, id: sectionId };
      });

      // Find the section that's currently most visible
      let currentSection = "";
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight / 2;

      sections.forEach(({ name, id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = name;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

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

  // ...existing motion variants...
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
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
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
              exit={{ opacity: 0 }}
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
          {headerlinks.map((link, index) => {
            const isActive = activeSection === link;

            return (
              <motion.li
                key={link}
                variants={linkVariants}
                whileHover="hover"
                onClick={() => scrollToSection(link)}
                className={`cursor-pointer duration-100 ease-in-out relative ${
                  isScrolled
                    ? "text-black hover:text-[#3452ff]"
                    : "text-white hover:text-[#3452ff]"
                } ${
                  isActive
                    ? isScrolled
                      ? "text-[#3452ff]"
                      : "text-[#3452ff]"
                    : ""
                }`}
              >
                {link.toUpperCase()}

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#3452ff]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default Header;
