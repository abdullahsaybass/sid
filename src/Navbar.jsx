import React, { useState } from "react";
import logo from "./Assests/logo-icon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-24 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <span className="font-['Roboto_Mono'] text-[#1B3333] font-medium text-[20px] md:text-[29.95px] leading-[29.95px] text-gray-900">
            AlgoEdge
          </span>
        </div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Section */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-28 w-full md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-gray-700 text-[#142929]">
            <li className="font-['Radio_Canada_Big'] font-normal text-[16px] leading-[20.8px] hover:text-gray-900 cursor-pointer">
              Strategies
            </li>
            <li className="font-['Radio_Canada_Big'] font-normal text-[16px] leading-[20.8px] hover:text-gray-900 cursor-pointer">
              Institutional Investors
            </li>
            <li className="font-['Radio_Canada_Big'] font-normal text-[16px] leading-[20.8px] hover:text-gray-900 cursor-pointer">
              Team
            </li>
            <li className="font-['Radio_Canada_Big'] font-normal text-[16px] leading-[20.8px] hover:text-gray-900 cursor-pointer">
              Blog
            </li>
          </ul>
          <button className="bg-[#3B8F6E] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#2F7358] transition duration-300 mt-4 md:mt-0">
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
