import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rmsicon1 from './Assests/rms-icon-1.png';
import rmsicon2 from './Assests/rms-icon-2.png';
import rmsicon3 from './Assests/rms-icon-3.png';
import rmsicon4 from './Assests/rms-icon-4.png';
import rmsicon5 from './Assests/rms-icon-5.png';

const Riskslider = () => {
  const features = [
    {
      title: "Multi-Level Risk Control",
      description: "Implementing rigorous risk controls at both the strategy and portfolio levels.",
      icon: <img src={rmsicon1} alt="Risk Control Icon" className="w-10 h-10" />,
    },
    {
      title: "VaR Monitoring & Drawdown Limits",
      description: "Ensuring portfolio VaR never exceeds 2%, with drawdowns capped at 10%.",
      icon: <img src={rmsicon2} alt="VaR Monitoring Icon" className="w-10 h-10" />,
    },
    {
      title: "Fault Tolerance",
      description: "Multiple layers of fault tolerance are in place to ensure continuous uptime.",
      icon: <img src={rmsicon3} alt="Fault Tolerance Icon" className="w-10 h-10" />,
    },
    {
      title: "Stress-Tested Strategies",
      description: "Strategies undergo rigorous testing against market anomalies, including black swan events.",
      icon: <img src={rmsicon4} alt="Stress Test Icon" className="w-10 h-10" />,
    },
    {
      title: "Strategy Approval Process",
      description: "Multiple layers of fault tolerance ensure continuous uptime.",
      icon: <img src={rmsicon5} alt="Stress Test Icon" className="w-10 h-10" />,
    },
  ];

  const settings = {
    dots: true, // Enable dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 cards at a time (adjust as needed)
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // Auto-scroll delay
    pauseOnHover: true, // Pause autoplay on hover
    centerMode: false, // Don't center the slider items
    focusOnSelect: true, // Enable focus on each slide
    customPaging: function (i) {
      return (
        <div className="custom-dot">
          <span></span>
        </div>
      );
    }, // Custom dot rendering
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-[90%] mx-auto">
        {/* Title Section */}
        <div className="flex justify-center items-center mb-10">
          <div className="bg-[#F4FFFB] flex justify-center items-center h-[50px] w-[125px] sm:h-[100px] sm:w-[250px]">
            <h1 className="font-['Gayathri'] text-[#3B8F6E] font-medium text-[36px] mt-4 sm:mt-10 sm:text-[96px] font-bold leading-none">
              RMS
            </h1>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div className="px-2 py-4">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-2">
                <div className="bg-white border border-[#E4E4E4] rounded lg p-6 shadow-md h-[250px] flex flex-col justify-between">
                  <div className="flex justify-center items-center w-16 h-16 bg-[#3B8F6E] text-white rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-[20px] font-['Gayathri'] font-bold mb-2 ">{feature.title}</h4>
                  <p className="text-[16px] font-['Radio Canada Big'] text-[#142929]">{feature.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Styles for Dots, Border, and Spacing */}
      <style jsx>{`
        .slick-slider {
          height: 300px; /* Ensure the slider has a fixed height */
        }

        .slick-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100% !important; /* Ensure slides take full height */
        }

        .slick-dots {
          margin-top: 20px; /* Add space between carousel and dots */
        }

        .slick-dots li {
          margin: 0 5px; /* Add space between dots */
        }

        .custom-dot span {
          display: block;
          width: 14px;
          height: 14px;
          background-color: #D9D9D9; /* Set the color for inactive dots */
          border-radius: 50%; /* Make dots round */
        }

        .slick-dots li.slick-active .custom-dot span {
          background-color: #3B8F6E; /* Green for active dot */
        }

        /* Ensure the items inside the slides have the same height and width */
        
      `}</style>
    </section>
  );
};

export default Riskslider;
