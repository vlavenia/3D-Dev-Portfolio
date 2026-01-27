import { navItems } from "../constants";
import { useEffect, useState } from "react";

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full flex-center fixed z-50 top-0 left-0 px-5 transition-all duration-300
        ${scrolled ? "bg-[#0C0721] backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container md:my-10 my-5 flex items-center justify-between">
        <a className="gradient-title md:text-5xl text-3xl font-bold">Vega.</a>
        <div className="md:flex items-center gap-7 hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
