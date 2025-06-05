"use client";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from "react";

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

  return (
    <section className="w-full h-fit fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-full flex items-center justify-center absolute inset-0 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      />
      <div className="w-full h-fit flex items-center justify-between px-4 py-2 max-w-7xl mx-auto relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="w-[140px] h-[36px] md:w-[179px] md:h-[46px] cursor-pointer transition-opacity duration-300"
            src={
              isScrolled
                ? "https://max-themes.net/demos/enside/main/img/logo.png"
                : "https://max-themes.net/demos/enside/main/upload/logo-white.png"
            }
            onClick={() => scrollToSection("home")}
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center justify-center gap-6 text-[16px] font-semibold">
          {headerlinks.map((link) => {
            const isActive = activeSection === link;

            return (
              <li
                key={link}
                onClick={() => scrollToSection(link)}
                className={`cursor-pointer transition-all duration-200 ease-in-out relative hover:-translate-y-0.5 ${
                  isScrolled
                    ? "text-black hover:text-[#3452ff]"
                    : "text-white hover:text-[#3452ff]"
                } ${isActive ? "text-[#3452ff]" : ""}`}
              >
                {link.toUpperCase()}

                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#3452ff] transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors duration-200 active:scale-95 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IoClose size={24} /> : <IoMdMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <ul className="flex flex-col py-4">
              {headerlinks.map((link) => {
                const isActive = activeSection === link;

                return (
                  <li
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className={`cursor-pointer px-6 py-3 text-[16px] font-semibold border-l-4 transition-all duration-200 ${
                      isActive
                        ? "text-[#3452ff] border-[#3452ff] bg-blue-50"
                        : "text-gray-700 border-transparent hover:text-[#3452ff] hover:border-[#3452ff] hover:bg-gray-50"
                    }`}
                  >
                    {link.toUpperCase()}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
