"use client";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`w-full h-fit fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full h-fit flex items-center   px-4 py-2">
        <div className="w-full justify-between mx-auto">
          <img
            className="w-[179px] h-[46px] mx-auto my-4"
            src={
              isScrolled
                ? "https://max-themes.net/demos/enside/main/img/logo.png"
                : "https://max-themes.net/demos/enside/main/upload/logo-white.png"
            }
          />
        </div>
        <ul className="flex items-center justify-center w-full gap-4 text-[16px] font-semibold">
          {headerlinks.map((link) => (
            <li
              className={`cursor-pointer duration-300 ease-in-out ${
                isScrolled
                  ? "text-black hover:text-[#3452ff]"
                  : "text-white hover:text-[#3452ff]"
              }`}
              key={link}
            >
              {link.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
