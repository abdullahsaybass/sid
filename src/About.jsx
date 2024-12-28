import React from "react";
import icon1 from './Assests/icon-1.svg';
import icon2 from './Assests/icon-2.svg';
import icon3 from './Assests/icon-3.svg';
import icon4 from './Assests/icon-4.svg';
import icon5 from './Assests/icon-5.svg';
import icon6 from './Assests/icon-6.svg';
import polygon4 from './Assests/Polygon 4.svg'
import Line from './Assests/Line 13.svg'

const AboutAlgoEdge = () => {
  return (
    <div className="relative w-[85%] mx-auto bg-gray-50 py-6">
      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center md:items-start space-y-6 md:space-y-0 relative">
          {/* About AlgoEdge Title */}
          <div className="w-full md:w-[50%] flex md:mt-8 md:justify-start">
            <h1 className="text-[32px] font-['Gayathri'] font-bold md:text-[64px] text-[#292929]">
              About{" "}
              <span className="text-[32px] font-['Gayathri'] md:text-[64px] font-bold text-[#3B8F6E]">
                AlgoEdge
              </span>
            </h1>
          </div>
          {/* About AlgoEdge Description */}
          <div className="flex w-full md:w-[50%] ">
            <img 
              src={Line} 
              alt="Line" 
              className="pl-6 sm:pl-0 hidden md:block" // Adjust the image position on mobile
            />
            <p className="text-[14px] font-['Radio Canada Big'] text-[#142929] font-small leading-relaxed md:ml-8">
              AlgoEdge is a pioneering quantitative research firm at the forefront
              of high-performance algorithmic trading. We leverage cutting-edge
              technology to demystify the financial markets, making quantitative
              strategies accessible to all investment managers.
            </p>
          </div>
        </div>


      {/* Why Choose Us Section */}
      <div className="mt-12 relative">
        {/* Polygon outside of the w-[81%] container */}
        <img
          src={polygon4}
          alt="polygon-4"
          className="hidden md:block absolute top-[300px] left-[-70px] z-0" // Adjust position to move it outside
        />

        <h2 className="font-['Gayathri'] text-[#3B8F6E] text-[24px] font-bold mb-6">
          WHY CHOOSE US
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          {[ 
            {
              id: "01",
              title: "An Advanced Quantitative",
              highlight: "Trading Research Firm",
              icon: icon1, // Pass the image path directly
            },
            {
              id: "02",
              title: "Registered In Several",
              highlight: "Global Financial Hubs",
              icon: icon2,
            },
            {
              id: "03",
              title: "Currently Licensing 10+ Strategies Across ",
              highlight: "Three Asset Classes",
              icon: icon3,
            },
            {
              id: "04",
              title: "Onboarded Global Institutional ",
              highlight: "B2B Clients",
              icon: icon4,
            },
            {
              id: "05",
              title: "We’re Partnered With",
              highlight: "3 Renowned Global Brokers,",
              title2:"Eliminating Transactional Expenses",
              icon: icon5,
            },
            {
              id: "06",
              title: "",
              highlight: "15+ Years Experience ",
              title2:"Of Delivering Alpha Returns At Top Hedge Funds",
              icon: icon6,
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-custom-light h-68 rounded-lg p-4 border border-gray-200"
            >
              {/* Child 1: Number and Icon */}
              <div className="flex items-center justify-between">
                {/* Number */}
                <div className="flex items-center">
                  <div className="w-[1px] h-6 bg-[#3B8F6E]"></div>
                  <span className="text-[#142929] text-[24px] ml-2 font-bold mr-2">
                    {item.id}
                  </span>
                </div>
                {/* Icon */}
                <img
                  src={item.icon} // Access the image path directly
                  alt={`Icon ${item.id}`}
                  className="h-10 w-10"
                />
              </div>

              {/* Child 2: Text Content */}
              <div className="mt-14">
                <h3 className="font-['gayathri'] text-[24px] text-[#142929] font-bold ">
                  {item.title} <span className="font-['gayathri']  text-[24px] text-[#3B8F6E] font-bold">{item.highlight}</span> {item.title2}
                </h3>
                <h3 className="font-['gayathri'] text-[20px] text-[#3B8F6E] font-semibold text-green-600">
                  
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAlgoEdge;
