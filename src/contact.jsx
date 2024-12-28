import React from "react";
import contactimg from './Assests/contact-img.svg'
import polygon6 from './Assests/Polygon 7.png'
const ContactForm = () => {
  return (
    <section className= "relative bg-gray-50 py-12">
       <img
              src={polygon6}
              alt="polygon-4"
              className="hidden md:block absolute right-14 top-0" // Places the image at the bottom-left corner
          />
      <div className="max-w-[85%] mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section: Form */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <h2 className="text-[32px] md:text-[64px] font-['gayathri'] text-[#142929] font-bold mb-2">
            Contact Us <span className="text-[32px] md:text-[64px] font-['gayathri'] text-[#3B8F6E] font-bold">To</span>{" "}
            <span className="text-[32px] md:text-[64px] font-['gayathri'] font-bold mb-2 text-[#3B8F6E]">Learn More</span>
          </h2>
          <form className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="E-mail"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Message */}
            <textarea
              placeholder="Message"
              rows="4"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3B8F6E] text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section: Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={contactimg}
            alt="contact-img"
            className="max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


