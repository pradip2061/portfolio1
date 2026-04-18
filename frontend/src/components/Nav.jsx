import React, { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { LuSquareUser, LuSquareCode, LuBrain } from "react-icons/lu";

function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";
      const scrollY = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "#home",
      id: "home",
      icon: <FiHome className="w-6 h-6" />,
      label: "Home",
    },
    {
      href: "#about",
      id: "about",
      icon: <LuSquareUser className="w-6 h-6" />,
      label: "About",
    },
    {
      href: "#skill",
      id: "skill",
      icon: <LuBrain className="w-6 h-6" />,
      label: "Skill",
    },
    {
      href: "#skill",
      id: "projects",
      icon: <LuSquareCode className="w-6 h-6" />,
      label: "Projects",
    },
    {
      href: "https://linkedin.com",
      id: "linkedin",
      icon: <FaLinkedinIn className="w-6 h-6" />,
      label: "LinkedIn",
      external: true,
    },
  ];

  const handleClick = (item) => {
    // Skill click → open Tech Stack tab
    if (item.id === "skill") {
      window.dispatchEvent(
        new CustomEvent("changeSkillTab", {
          detail: "techstack",
        })
      );
    }

    // Projects click → open Projects tab
    if (item.id === "projects") {
      window.dispatchEvent(
        new CustomEvent("changeSkillTab", {
          detail: "projects",
        })
      );
    }

    if (!item.external) {
      setActive(item.id);
    }
  };

  return (
    <div
      className="
        fixed z-50 w-full flex justify-center px-4

        bottom-4
        lg:top-4 lg:bottom-auto
      "
    >
      {/* Nav Container */}
      <div
        className="
          bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
          border border-gray-700
          rounded-full
          flex justify-between items-center
          px-6 py-3
          shadow-2xl

          w-[95%]
          sm:w-[85%]
          md:w-[70%]
          lg:w-[32%]
        "
      >
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group flex justify-center"
          >
            <a
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              onClick={() => handleClick(item)}
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center
                ${
                  active === item.id
                    ? "bg-orange text-white scale-110 shadow-lg"
                    : "text-white hover:bg-gray-600"
                }`}
            >
              {item.icon}
            </a>

            {/* Tooltip only for desktop */}
            <span
              className="
                hidden lg:block
                absolute top-full mt-2
                left-1/2 -translate-x-1/2
                px-2 py-1 text-sm
                rounded-md
                bg-white text-black
                opacity-0 group-hover:opacity-100
                transition
                z-10
              "
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;