import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-[85%] mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section: Form */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Contact Us <span className="text-green-600">To</span>{" "}
            <span className="text-green-600">Learn More</span>
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
              className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section: Illustration */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="/images/illustration.png" // Replace with your illustration path
            alt="Contact Illustration"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
