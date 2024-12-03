import React from "react";
import map from "./Assests/map.png";
import AboutSection from "./About";
import ContactForm from './contact';
import Footer from "./Footer";
import performance from './Assests/performace.png';
import balance from './Assests/balance.png';
import greenicon from './Assests/icon-green.png'
import blackicon from './Assests/logo-black.png'
import rectangle1 from './Assests/Rectangle-1.png'
import rectangle2 from './Assests/Rectangle-2.png'
import layer1 from './Assests/Layer_1.png'
import layer2 from './Assests/Layer-2.png'
import card1 from './Assests/card (1).png'
import card2 from './Assests/card (2).png'
import card3 from './Assests/card (3).png'

const HomePage = () => {

  const steps = [
    {
      number: "01",
      title: "Research",
      description: "Analyze market trends and asset classes to identify trading opportunities.",
      icon: "🔍", // Replace with an actual icon if needed
    },
    { number: "02", title: "Whitepaper Development" },
    { number: "03", title: "Backtesting" },
    { number: "04", title: "Refinement" },
    { number: "05", title: "Live Trading" },
    { number: "06", title: "Continual Refinement" },
  ];

  const features = [
    {
      title: "Multi-Level Risk Control",
      description:
        "Rigorous risk controls at both the strategy and portfolio levels.",
      icon: "📊", // Replace with an actual icon if needed
    },
    {
      title: "VaR Monitoring & Drawdown Limits",
      description:
        "Portfolio VaR never exceeds 2%, and drawdowns are capped at 10%.",
      icon: "📈",
    },
    {
      title: "Fault Tolerance",
      description:
        "Multiple layers of fault tolerance ensure continuous uptime.",
      icon: "🛠️",
    },
    {
      title: "Stress-Tested Strategies",
      description:
        "Strategies are tested against market anomalies, including black swan events.",
      icon: "📉",
    },
    {
      title: "Strategy Approval Process",
      description:
        "Multiple layers of fault tolerance ensure continuous uptime.",
      icon: "✅",
    },
  ]
  
  return (
    <div className="bg-gray-50 min-h-screen">
     

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        {/* Content */}
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-['Gayathri'] font-medium text-[60px] leading-[50.33px] text-gray-700">
            Quantitative Trading{" "}
            <span className="text-[#3B8F6E] text-5xl font-['Gayathri'] font-medium text-[60px] leading-[50.33px]">
              Research
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 px-40 text-[#142929]">
            With the world's brightest quantitative talent, we deliver advanced
            quantitative solutions that optimize trading, risk management, and
            portfolio performance.
          </p>
          <button className="mt-8 bg-[#3B8F6E] text-white py-3 px-6 rounded-full text-lg hover:bg-green-700 transition duration-300">
            Contact us
          </button>
        </div>

        {/* Map Section */}
        <div
          className="relative mt-16 mx-auto w-[80%] h-[450px] bg-[#142929] bg-cover bg-center rounded-xl shadow-md flex items-center justify-center"
        >
          {/* Map Content */}
          <img
            src={map}
            alt="Map"
            className="w-auto max-w-full object-cover rounded-xl"
            style={{ marginLeft: "-180px" }}
          />

          {/* Card Component */}
          <div
            className="absolute  p-4 rounded-lg "
            style={{
             
              top: "16px",
              left: "900px", // Centered horizontally (176px width / 2)
            }}
          >

          <img
            src={balance}
            alt="Map"
            className="w-auto max-w-full object-cover rounded-xl"
            
          />
            
          </div>
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
      </section>
      
      <AboutSection />

      {/* performace section start */}

      <div className="w-[81%] mx-auto bg-[#142929] text-white py-10 rounded-lg shadow-lg mb-10">
      {/* Title */}
        <h2 className=" font-['gayathri'] text-[64px] text-center mb-8">Past Performance</h2>
        <div className="ml-24">
          <img src={performance} alt="performance" className="performace" />
        </div>
      </div>

      {/* performace section end */}
      {/* trading strategy section start */}

      <div className="w-[81%]  bg-[#F4FFFB] mx-auto py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F4FFFB]">
        <div className="w-[4px] ml-4 h-80 bg-[#3B8F6E]"></div>
        {/* Text Section */}
        <div className="w-full mb-8 md:mb-0">
          <h1 className="text-[50px] font-['gayathri'] ml-10 font-bold leading-[80px] text-left">
            Access AlgoEdge's <br />
            High-Performing &<br />
            <span className="font-['gayathri'] text-green-600">
              Verified Market-Neutral
              <br />
              Trading Strategies
            </span>
          </h1>
        </div>

        {/* Logo */}
        <div className="w-full md:w-1/2 flex ">
          {/* Replace with your image */}
          
            <img src = {greenicon} alt="green-icon" className="green-icon" />
          
        </div>
      </div>

       

      {/* Divider */}
      <div className="text-center my-8  bg-[#F4FFFB]">
        <span className="text-[50px] font-bold font-['gayathri'] ">For Investment Managers And <span className="font-['gayathri'] text-green-600">HNIs</span></span>
        <p className="text-[20px] font-['gayathri'] font-bold text-[#3B8F6E] mt-2">
          Access AlgoEdge's High-Performing Strategies.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-around mt-10">
        {/* Left Section */}
        <div className="md:text-right w-full md:w-1/3 px-4 ml-18">
          <div>
            <img src={layer1} alt="layer-1" className="layer-1 ml-auto" />
          </div>
          <h3 className="text-[20px] font-['gayathri'] text-[#142929] font-bold mt-4">
            Invest Through Our <br /> Global Partners
          </h3>
          <p className="text-[16px] font-['Radio Canada Big'] text-[#142929] font-400 mt-2">
            For clients without infrastructure who prefer a fully managed solution.
          </p>
        </div>


        {/* Center Logo */}
        <div className="flex justify-center my-8 md:my-0">
          <div className="">
          <img src = {blackicon} alt="black-icon" className="black-icon" />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left w-full md:w-1/3 px-4">
          <div className=" flex items-center justify-center mx-auto md:mx-0">
          <img src={layer2} alt="layer-2" className="layer-2 mr-auto"/>
          </div>
          <h3 className="text-[20px] font-['gayathri'] text-[#142929] font-bold mt-4">
            License Our Strategies <br /> Via APIs
          </h3>
          <p className="text-[16px] font-['Radio Canada Big'] text-[#142929] font-400 mt-2">
            For clients with their own infrastructure, receive real-time trading
            signals via APIs, and execute yourself.
          </p>
         </div>
        </div>
      </div>

      {/* trading strategy section end */}

      {/* Covering Multi-Asset section start  */}
      
      <section className=" min-h-screen flex items-center justify-center">
      <div className=" w-[81%] bg-[#142929] rounded-lg shadow-lg p-8">
        <h1 className="text-[60px] font-['gayathri'] text-center text-[#FFFFFF] font-bold ">
          Covering Multi-Asset Classes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Commodities */}
          <div className="">
            <img src={card1} alt="card-1" className="card-1 py-4"/>
            <ul className="text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-6 rounded-lg shadow-md space-y-2">
              <li>✔ Futures</li>
              <li>✔ Options</li>
              <li>✔ CFDs</li>
            </ul>
          </div>

          {/* Digital Assets */}
          <div className="">
          <img src={card2} alt="card-1" className="card-1 py-4"/>
            <ul className=" text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-6 rounded-lg shadow-md space-y-2">
              <li>✔ Spot</li>
              <li>✔ Futures</li>
              <li>✔ Options</li>
            </ul>
          </div>

          {/* Derivatives */}
          <div className="">
          <img src={card3} alt="card-1" className="card-1 py-4"/>
            <ul className="text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-6 rounded-lg shadow-md space-y-2">
              <li>✔ Index Options</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* Covering Multi-Asset section end  */}

      {/* Research section start */}

      <section className="">
     
        <div className="max-w-[81%] mx-auto bg-green-50 py-10">
          <h2 className="text-[50px] font-['gayathri'] ml-16 font-bold  ">Our Proprietary Strategy</h2>
          <h3 className="text-[50px] font-['gayathri'] ml-16 font-bold text-[#3B8F6E] ">
            Research & Launch Methodology
          </h3>
          <div className="px-16 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center p-5 rounded-lg shadow-sm ${
                  step.description ? "bg-white" : "bg-green-100"
                }`}
              >
                <div className="w-[1px] h-6 bg-[#3B8F6E] "></div>
                <div className="flex items-center ml-2">
                  {step.number}
                </div>
                <div className="flex-1 ml-12">
                  <h4 className="text-[20px] font-['gayathri']  font-bold text-[#142929] ">{step.title}</h4>
                  {step.description && (
                    <p className="text-[16px] font-['Radio Canada Big']  font-semi-bold text-[#142929]">{step.description}</p>
                  )}
                </div>
                {step.icon && step.description && (
                  <div className="flex items-center justify-center w-12 h-12 bg-green-200 rounded-lg">
                    <span className="text-green-600 text-2xl">{step.icon}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </section>
            {/* Research section start */}

            {/* Risk Management System section start */}
    <section className="bg-gray-50 py-10">
      <div className="max-w-[81%] mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">
          Our Proprietary <span className="text-green-600">Risk</span>{" "}
          <span className="text-green-600">Management</span> System
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Deploying advanced risk management techniques to protect investments
          at both strategy and portfolio levels.
        </p>

        {/* RMS Box */}
        <div className="flex justify-center mb-10">
          <div className="bg-green-100 text-green-600 font-bold text-2xl p-6 rounded-lg shadow-lg">
            RMS
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-4xl text-green-600 mb-4">{feature.icon}</div>
              {/* Title */}
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     {/* Risk Management System section end */}

      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
