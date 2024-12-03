import React from "react";
import logo from './Assests/logo-icon.png'

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-36">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full  flex items-center justify-center">
          <img src={logo} alt="Logo" className="logo" />
          </div>
          <span
            className="font-['Roboto_Mono'] text-[#1B3333] font-medium text-[29.95px] leading-[29.95px] text-gray-900"
          >
            AlgoEdge
          </span>
        </div>

        {/* Menu Section */}
        <div className="flex items-center space-x-28">
          <ul className="flex space-x-8 text-gray-700 text-[#142929]">
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
          <button className="bg-[#3B8F6E] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#2F7358] transition duration-300">
            Log In
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
