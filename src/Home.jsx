import React from "react";
import AboutSection from "./About";
import Performance from './Performance';
import Research from './Research'
import Multiassests from './Multiassets'
import Startegy from './Strategy'
import ContactForm from './contact';
import Footer from "./Footer";
import Header from './Header';
import Risk from './Risk'

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <AboutSection />
      <Performance />
      <Startegy />
      <Multiassests />
      <Research />
      <Risk />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
