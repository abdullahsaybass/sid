import React from 'react'
import polygon6 from './Assests/Polygon 6.svg'
import './PerformanceS.css'
const Multiassets = () => {
  return (
    <div>
       <section className="mx-auto mt-12 relative">
            <img
                src={polygon6}
                alt="polygon-5"
                className="hidden md:block absolute  left-10 top-16" // Places the image at the bottom-left corner
            />
            <div className="w-[85%] bg-[#142929] rounded-lg shadow-lg p-8 mx-auto background-eclipse">
              <h1 className="text-[32px] md:text-[64px] font-['gayathri'] text-center text-[#FFFFFF] font-bold ">
                Covering Multi-Asset Classes
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-dashed border-[#3B8F6E] text-white shadow-md w-[250px] h-[56px] mx-auto flex justify-center items-center text-center md:w-[300px] md:h-[89px]">
                  <h2 className="text-[16px] md:text-[24px] font-['gayathri'] font-bold">Commodities</h2>
                </div>
                <div className="border-2 border-dashed border-[#3B8F6E] text-white shadow-md w-[250px] h-[56px] mx-auto flex justify-center items-center text-center md:w-[300px] md:h-[89px]">
                  <h2 className="text-[16px] md:text-[24px] font-['gayathri'] font-bold">Digital Assets</h2>
                </div>
                <div className="border-2 border-dashed border-[#3B8F6E] text-white shadow-md w-[250px] h-[56px] mx-auto flex justify-center items-center text-center md:w-[300px] md:h-[89px]">
                  <h2 className="text-[16px] md:text-[24px] font-['gayathri'] font-bold">Derivatives</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <ul className="flex flex-row items-center justify-center text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-4 shadow-md w-[250px] h-[56px] mx-auto md:w-[300px] md:h-[150px] md:flex-col md:space-x-0 md:space-y-4">
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Spot</span>
                  </li>
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Futures</span>
                  </li>
                  <li className="flex items-center space-x-1 ">
                    <span>✔</span>
                    <span>Options</span>
                  </li>
                </ul>
                <ul className="flex flex-row items-center justify-center text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-4 shadow-md w-[250px] h-[56px] mx-auto md:w-[300px] md:h-[150px] md:flex-col md:space-x-0 md:space-y-4">
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Spot</span>
                  </li>
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Futures</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span>✔</span>
                    <span>Options</span>
                  </li>
                </ul>
                <ul className="flex flex-row items-center justify-center text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-4 shadow-md w-[250px] h-[56px] mx-auto md:w-[300px] md:h-[150px] md:flex-col md:space-x-0 md:space-y-4">
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Spot</span>
                  </li>
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Futures</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span>✔</span>
                    <span>Options</span>
                  </li>
                </ul>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Multiassets
