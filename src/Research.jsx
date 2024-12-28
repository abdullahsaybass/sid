import React from 'react';
import polygon7 from './Assests/Polygon 7.svg';
import icon11 from './Assests/S-Icon.svg';

const Research = () => {
  const steps = [
    {
      number: "01",
      title: "Research",
      description: "Analyze market trends and asset classes to identify trading opportunities.",
      icon: <img src={icon11} alt="icon11" className="w-8 h-8 sm:w-10 sm:h-10" />, // Adjust icon size for mobile
    },
    { number: "02", title: "Whitepaper Development" },
    { number: "03", title: "Backtesting" },
    { number: "04", title: "Refinement" },
    { number: "05", title: "Live Trading" },
    { number: "06", title: "Continual Refinement" },
  ];

  return (
    <div>
      <section className="relative mt-4 sm:mt-0 ">
        <img
          src={polygon7}
          alt="polygon-7"
          className="hidden md:block absolute left-10 bottom-48" // Places the image at the bottom-left corner
        />
        <div className="max-w-[85%] mx-auto bg-[#F4FFFB] mt-10 py-10">
          <h2 className="text-[28px] sm:text-[40px] md:text-[50px] font-['gayathri'] ml-4 sm:ml-10 md:ml-16 font-bold text-left">
            Our Proprietary Strategy
          </h2>
          <h3 className="text-[28px] sm:text-[40px] md:text-[50px] font-['gayathri'] ml-4 sm:ml-10 md:ml-16 font-bold text-left text-[#3B8F6E]">
            Research & Launch Methodology
          </h3>
          <div className="relative px-4 sm:px-10 md:px-16 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-7 rounded-lg shadow-sm border border-[#E4E4E4] ${
                  step.description ? "bg-white" : "bg-[#F4FFFB]"
                }`}
              >
                {/* Green line */}
                <div className="flex items-center">
                  <div className=" w-[1px] h-4 bg-[#3B8F6E]"></div>
                  {/* Step number */}
                  <div className="flex items-center">
                    <span className="text-[#142929] text-[20px] sm:text-[24px] ml-2 font-semi-bold">{step.number}</span>
                  </div>
                </div>

                {/* Title and description */}
                <div className="flex-1 sm:ml-12 text-left w-full sm:w-[80%]">
                  <h4 className="text-[16px] sm:text-[20px] font-['gayathri'] font-bold text-[#142929]">
                    {step.title}
                  </h4>
                  {step.description && (
                    <p className="text-[14px] sm:text-[16px] font-['Radio Canada Big'] font-semibold text-[#142929] sm:w-[80%] w-[80%]">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Green background box with icon */}
                {step.icon && step.description && (
                  <div className="absolute flex items-center justify-center bg-[#3B8F6E] w-12 h-36 top-1 sm:w-28 sm:h-28 right-0 sm:top-0 rounded-lg">
                    {step.icon}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
