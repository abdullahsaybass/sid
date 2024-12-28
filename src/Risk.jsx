import React from 'react'
import { useMediaQuery } from 'react-responsive';
import l1 from './Assests/l1.png'
import l2 from './Assests/l2.png'
import s1 from './Assests/s1.png'
import s2 from './Assests/s2.png'
import dl1 from './Assests/dl1.png'
import dl2 from './Assests/dl2.png'
import ds1 from './Assests/ds1.png'
import ds2 from './Assests/ds2.png'
import Line14 from './Assests/Line 14.svg'
import riskicon from './Assests/Vector.svg'
import riskicon1 from './Assests/vector-1.svg'
import rmsicon2 from './Assests/vector-2.svg'
import rmsicon3 from './Assests/vector-3.svg'
import rmsicon4 from './Assests/vector-4.svg'
import Riskslider from './Riskslider'

const Risk = () => {

    const features = [
        {
          title: "Multi-Level Risk Control",
          description: "Implementing rigorous risk controls at both the strategy and portfolio levels.",
          icon: <img src={riskicon} alt="Risk Control Icon" />
        },
        {
          title: "VaR Monitoring & Drawdown Limits",
          description: "Ensuring portfolio VaR never exceeds 2%, with drawdowns capped at 10%.",
          icon: <img src={riskicon1} alt="VaR Monitoring Icon" />
        },
        {
          title: "Fault Tolerance",
          description: "Multiple layers of fault tolerance are in place to ensure continuous uptime.",
          icon: <img src={rmsicon2} alt="Fault Tolerance Icon" />
        },
        {
          title: "Stress-Tested Strategies",
          description: "Strategies undergo rigorous testing against market anomalies, including black swan events.",
          icon: <img src={rmsicon3} alt="Stress Test Icon" />
        }    
      ]
      const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
     {isMobile ? (
        <Riskslider /> // Show Riskslider for mobile screens
      ) : (
      <section className="bg-gray-50 py-10">
            <div className="max-w-[85%] mx-auto">
                  {/* Heading and Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="flex justify-center md:justify-start">
                      <h1 className="font-['Gayathri'] font-medium text-[50px] text-gray-700 hidden md:block">
                        Our Proprietary
                        <span className="font-['Gayathri'] font-medium text-[50px] font-bold">
                          <span className="font-['Gayathri'] text-[#3B8F6E] font-medium text-[50px] font-bold"> Risk Management</span> System
                        </span>
                      </h1>
                    </div>
                    <div className="flex items-center">
                      <img src = {Line14} alt = "line14" className="hidden md:block" />
                      <p className="text-lg font-['Radio Canada Big'] text-[#142929] ml-4 font-medium text-[16px] leading-relaxed hidden md:block">
                        Deploying advanced risk management techniques to protect investments at both strategy and portfolio levels.
                      </p>
                    </div>
                </div>
      
                  {/* Center Box (RMS) */}
                  <div className="flex justify-center items-center mb-40  sm:mb-0"> {/* Adjusted spacing */}
                    <div className="bg-[#F4FFFB] flex justify-center items-center h-[50px] w-[125px] sm:h-[100px] sm:w-[250px]"> {/* Unified responsive sizing */}
                      <h1 className="font-['Gayathri'] text-[#3B8F6E] font-medium text-[36px] mt-4 sm:mt-10 sm:text-[96px] font-bold leading-none">
                        RMS
                      </h1>
                    </div>
                  </div>

      
      
                <div className="flex flex-wrap justify-center items-center ">
                    <img src={l1} alt="l1" className="w-full sm:w-auto hidden md:block" />
                    <img src={l2} alt="l2" className="w-full sm:w-auto hidden md:block" />
                </div>
      
                <div className="flex flex-wrap justify-center items-center -mt-28 ">
                    <img src={s1} alt="s1" className="w-full sm:w-auto hidden md:block" />
                    <img src={s2} alt="s2" className="w-full sm:w-auto hidden md:block" />
                </div>
                  
                  {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`bg-white p-6 rounded-lg shadow-md ${
                          index === 0 ? '' : '' /* Adds margin-top for the first box */
                        } ${index /* Adds margin-bottom for the last box */}
                        }`}
                      >
                        <div className="flex justify-center items-center w-16 h-16 bg-[#3B8F6E] text-white text-4xl rounded-full mb-4">
                          {feature.icon}
                        </div>
      
                        <h4 className="text-[16px] font-['gayathri'] font-bold mb-2">{feature.title}</h4>
      
                        <p className="text-[12px] font-['radio big canada'] text-[#142929]">{feature.description}</p>
                        </div>
                    ))}
                </div>
      
                <div className="flex flex-wrap justify-center items-center ">
                    <img src={dl1} alt="dl1" className="w-full sm:w-auto hidden md:block" />
                    <img src={dl2} alt="dl2" className="w-full sm:w-auto hidden md:block" />
                </div>
      
                <div className="flex flex-wrap justify-center items-center -mt-28 ">
                    <img src={ds1} alt="ds1" className="w-full sm:w-auto hidden md:block" />
                    <img src={ds2} alt="ds2" className="w-full sm:w-auto hidden md:block" />
                </div>
      
                  {/* Last Box Adjustment */}
                  {/* Last Box Adjustment */}
                {/* Last Box Adjustment */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-[250px] sm:w-[250px] mx-auto mt-0 sm:mb-20">
                    <div>
                      <div className="flex justify-center items-center w-16 h-16 bg-[#3B8F6E] text-white text-4xl rounded-full mb-4">
                        <img src={rmsicon4} alt="rmsicon-5" className="rmsicon5" />
                      </div>
                      <h3 className="text-[16px] font-['gayathri'] font-bold mb-2">Strategy Approval Process</h3>
                      <p className="text-[12px] font-['radio big canada'] text-[#142929]">
                        Multiple layers of fault tolerance ensure continuous uptime.
                      </p>
                    </div>
                </div>
            </div>
        </section>
      )}
    </div>
  )
}

export default Risk

