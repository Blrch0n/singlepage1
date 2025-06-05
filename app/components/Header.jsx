"use client";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionName) => {
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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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

  const mobileMenuVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
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
        className="w-full h-fit flex items-center justify-between px-4 py-2 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={isScrolled ? "dark-logo" : "light-logo"}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
              className="w-[140px] h-[36px] md:w-[179px] md:h-[46px] cursor-pointer"
              src={
                isScrolled
                  ? "https://max-themes.net/demos/enside/main/img/logo.png"
                  : "https://max-themes.net/demos/enside/main/upload/logo-white.png"
              }
              onClick={() => scrollToSection("home")}
            />
          </AnimatePresence>
        </div>

        {/* Desktop Navigation */}
        <motion.ul
          variants={navVariants}
          className="hidden lg:flex items-center justify-center gap-6 text-[16px] font-semibold"
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

        {/* Mobile Menu Button */}
        <motion.button
          className={`lg:hidden p-2 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <IoClose size={24} /> : <IoMdMenu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-full left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
            >
              <motion.ul className="flex flex-col py-4">
                {headerlinks.map((link, index) => {
                  const isActive = activeSection === link;

                  return (
                    <motion.li
                      key={link}
                      variants={linkVariants}
                      onClick={() => scrollToSection(link)}
                      className={`cursor-pointer px-6 py-3 text-[16px] font-semibold border-l-4 transition-all duration-200 ${
                        isActive
                          ? "text-[#3452ff] border-[#3452ff] bg-blue-50"
                          : "text-gray-700 border-transparent hover:text-[#3452ff] hover:border-[#3452ff] hover:bg-gray-50"
                      }`}
                    >
                      {link.toUpperCase()}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Header;
