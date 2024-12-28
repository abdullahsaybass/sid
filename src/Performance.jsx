import React from 'react'
import './PerformanceS.css'

const Performance = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto bg-[#142929] text-white py-10 rounded-lg shadow-lg mb-10 relative background-eclipse">
      {/* Heading for Desktop Only */}
        
        <h2 className="text-[32px] font-['gayathri'] md:text-[64px] text-center mb-8">
          Past Performance
        </h2>

      <div className="md:flex w-[90%] mx-auto gap-14">
        <div className="className">
          <div className="flex gap-2 ">
            <div className="w-[1px] h-6 bg-[#3B8F6E]"></div>
            <p className="font-['gayathri'] text-[24px]">01</p>
          </div>
          <p className="w-[100%] mt-2 font-['gayathri'] text-[24px] font-bold ">Verified Performance of 50%+ Annual Returns</p>
        </div>
        <div className="className mt-8 md:mt-0">
          <div className="flex gap-2">
            <div className="w-[1px] h-6 bg-[#3B8F6E]"></div>
            <p className="font-['gayathri'] text-[24px]">02</p>
          </div>
          <p className="w-[100%] mt-2 font-['gayathri'] text-[24px] font-bold ">Data from Over 20,000 active Traders and Algorithms</p>
        </div>
        <div className="className mt-8 md:mt-0">
          <div className="flex gap-2">
            <div className="w-[1px] h-6 bg-[#3B8F6E]"></div>
            <p className="font-['gayathri'] text-[24px]">03</p>
          </div>
          <p className="w-[100%] mt-2 font-['gayathri'] text-[24px] font-bold ">50 Years + Combined Market Experience</p>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Performance
