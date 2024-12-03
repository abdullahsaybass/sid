import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001f1e] text-white py-12">
      <div className="max-w-[81%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4">AlgoEdge</h1>
          <p className="text-sm">
            Providing advanced quantitative and algorithmic strategies to
            investment managers and HNIs.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="space-y-2">
          <h2 className="font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#strategies" className="hover:text-green-500">
                Strategies
              </a>
            </li>
            <li>
              <a href="#investors" className="hover:text-green-500">
                Institutional Investors
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-green-500">
                Team
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Details */}
        <div>
          <h2 className="font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>Delaware, US</li>
            <li>
              <a
                href="mailto:kunal.dhawan@algoedge.io"
                className="hover:text-green-500"
              >
                kunal.dhawan@algoedge.io
              </a>
            </li>
            <li>
              <a href="tel:+15878798880" className="hover:text-green-500">
                (587)879-8880
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
        <p>Copyright © 2024 AlgoEdge, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
