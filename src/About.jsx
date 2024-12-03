import React from "react";
import icon1 from './Assests/icon-1.png';
import icon2 from './Assests/Icon-2.png';
import icon3 from './Assests/icon-3.png';
import icon4 from './Assests/icon-4.png';
import icon5 from './Assests/icon-5.png';
import icon6 from './Assests/icon-6.png';

const AboutAlgoEdge = () => {
  return (
    <div className="w-[81%] mx-auto bg-gray-50 py-12">
      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* About AlgoEdge Title */}
        <div className="w-full md:w-[50%] flex justify-center mt-8 md:justify-start">
          <h1 className="text-5xl font-['Gayathri'] font-medium text-[64px] text-gray-700">
            About{" "}
            <span className="font-['Gayathri'] font-medium text-[64px] text-green-700">
              AlgoEdge
            </span>
          </h1>
        </div>
        {/* About AlgoEdge Description */}
        <div className="w-full md:w-[50%] border-l-4 border-green-600 pl-6">
          <p className="text-lg font-['Radio Canada Big'] text-gray-600 font-medium text-[16px] leading-relaxed">
            AlgoEdge is a pioneering quantitative research firm at the forefront
            of high-performance algorithmic trading. We leverage cutting-edge
            technology to demystify the financial markets, making quantitative
            strategies accessible to all investment managers.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12">
        <h2 className="font-['Gayathri'] text-[#3B8F6E] font-medium text-[24px] font-bold mb-6">
          WHY CHOOSE US
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
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
              title: "Currently Licensing 10+ Strategies",
              highlight: "Across Three Asset Classes",
              icon: icon3,
            },
            {
              id: "04",
              title: "Onboarded Global",
              highlight: "Institutional B2B Clients",
              icon: icon4,
            },
            {
              id: "05",
              title: "We’re Partnered With 3 Renowned",
              highlight: "Global Brokers",
              icon: icon5,
            },
            {
              id: "06",
              title: "15+ Years Experience Of Delivering",
              highlight: "Alpha Returns At Top Hedge Funds",
              icon: icon6,
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-custom-light h-60 rounded-lg p-6 border border-gray-200"
            >
              {/* Child 1: Number and Icon */}
              <div className="flex items-center justify-between">
                {/* Number */}
                <div className="flex items-center">
                  <div className="w-[1px] h-6 bg-[#3B8F6E]"></div>
                  <span className="text-[#3B8F6E] text-2xl ml-2 font-bold mr-2">
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
                <h3 className="font-['gayathri']  text-[20px] text-[#142929] font-semibold ">
                  {item.title}
                </h3>
                <h3 className="font-['gayathri'] text-[20px] text-[#3B8F6E] font-semibold text-green-600">
                  {item.highlight}
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
