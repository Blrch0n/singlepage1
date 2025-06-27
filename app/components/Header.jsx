"use client";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { useData } from "@/contexts/DataContext";

const defaultHeaderlinks = [
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
  const { data, loading } = useData();

  // Use API data for header links or fallback to default
  const headerData = data.header || {};
  const headerlinks =
    headerData.labels?.length > 0
      ? headerData.labels.map((label) => label.toLowerCase())
      : defaultHeaderlinks;

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

    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      if (hash) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Handle initial hash navigation
    handleHashNavigation();

    // Handle hash changes (back/forward buttons)
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashNavigation);
    };
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

    // Check if we're on the home page by looking for the section
    const element = document.getElementById(sectionId);

    if (element) {
      // We're on the home page, scroll to section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // We're on a different page, navigate to home with hash
      if (typeof window !== "undefined") {
        // If sectionId is 'home', just go to root
        if (sectionId === "home") {
          window.location.href = "/";
        } else {
          // Navigate to home page with hash for the section
          window.location.href = `/#${sectionId}`;
        }
      }
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
              headerData.image ||
              (isScrolled
                ? "https://max-themes.net/demos/enside/main/img/logo.png"
                : "https://max-themes.net/demos/enside/main/upload/logo-white.png")
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
                className={`cursor-pointer transition-all duration-200 ease-in-out relative ${
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
          className={`lg:hidden p-2 transition-all duration-300 active:scale-95 hover:bg-black/10 rounded-lg ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <IoMdMenu
              size={24}
              className={`absolute transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "opacity-0 rotate-90"
                  : "opacity-100 rotate-0"
              }`}
            />
            <IoClose
              size={24}
              className={`absolute transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "opacity-100 rotate-0"
                  : "opacity-0 -rotate-90"
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full left-0 right-0 lg:hidden transition-all duration-300 ease-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div
            className={`backdrop-blur-md shadow-xl border-t rounded-b-lg mx-2 transition-all duration-300 ${
              isScrolled
                ? "bg-white border-gray-200"
                : "bg-black/90 border-white/20"
            }`}
          >
            <ul className="flex flex-col py-2">
              {headerlinks.map((link, index) => {
                const isActive = activeSection === link;

                return (
                  <li
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className={`cursor-pointer px-6 py-4 text-[16px] font-semibold border-l-4 transition-all duration-300 ease-out relative overflow-hidden group ${
                      isActive
                        ? isScrolled
                          ? "text-[#3452ff] border-[#3452ff] bg-blue-50"
                          : "text-[#3452ff] border-[#3452ff] bg-white/10"
                        : isScrolled
                        ? "text-gray-700 border-transparent hover:text-[#3452ff] hover:border-[#3452ff] hover:bg-gray-50"
                        : "text-white border-transparent hover:text-[#3452ff] hover:border-[#3452ff] hover:bg-white/10"
                    }`}
                    style={{
                      animationDelay: isMobileMenuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    {/* Animated background on hover */}
                    <div
                      className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                        isScrolled
                          ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                          : "bg-gradient-to-r from-white/10 to-blue-500/20"
                      }`}
                    />

                    {/* Text content */}
                    <span className="relative z-10 block transform transition-transform duration-200 group-hover:translate-x-1">
                      {link.toUpperCase()}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
