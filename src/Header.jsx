import React from 'react';
import polygon1 from './Assests/Polygon 1.svg';
import polygon2 from './Assests/Polygon 2.svg';
import polygon3 from './Assests/Polygon 3.svg';
import Line14 from './Assests/Line 14.png';
import map from './Assests/Map.svg';

const Header = () => {
  return (
    <div>
      <section className="relative bg-gray-50 py-20">
        <img
          src={polygon1}
          alt="polygon-1"
          className="hidden md:block absolute top-40 left-8"
        />
        <img
          src={polygon2}
          alt="polygon-2"
          className="hidden md:block absolute top-60 right-8"
        />
        <div className="container mx-auto text-center px-6">
          <h1 className="text-[40px] md:text-6xl lg:text-[74px] font-['Gayathri'] font-medium leading-tight text-[#292929]-800">
            Quantitative Trading{' '}
            <span className="text-[#3B8F6E] font-['Gayathri'] font-medium">
              Research
            </span>
          </h1>
          {/* Ensuring full width for the p tag on mobile */}
          <p className="mt-4 text-sm sm:text-[16] md:text-lg text-[16] px-3 lg:px-56 text-[#142929]">
            With the world's brightest quantitative talent, we deliver advanced
            quantitative solutions that optimize trading, risk management, and
            portfolio performance.
          </p>

          <button className="mt-8 bg-[#3B8F6E] text-white py-3 px-6 rounded-full text-base sm:text-lg hover:bg-green-700 transition duration-300">
            Contact us
          </button>
        </div>

        {/* Map Section */}
        <div className="flex items-center justify-center mt-10 relative">
          {/* Map Content */}
          <img
            src={map}
            alt="Map"
            className="w-[85%] max-w-full object-cover"
          />
        </div>

        {/* Responsive Styling */}
        <style jsx>{`
          @media (min-width: 768px) {
            .w-[80%] {
              width: 85%;
            }
            .h-[450px] {
              height: 600px;
            }
          }
          @media (min-width: 1200px) {
            .w-[80%] {
              width: 90%;
            }
            .h-[450px] {
              height: 700px;
            }
          }
        `}</style>

        <img
          src={polygon3}
          alt="polygon-3"
          className="hidden md:block absolute top-100 right-8"
        />
      </section>
    </div>
  );
};

export default Header;
