import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroHeaderSection from './components/HeroHeaderSection/HeroHeaderSection.js';
import SocialProffSection from './components/SocialProffSection/SocialProffSection.js';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import TestimonialSection from "./components/TestimonialSection/TestimonialSection.js";
import FeaturesSection2 from './components/FeaturesSection2/FeaturesSection2';
import FAQSection from './components/FAQSection/FAQSection';
import BlogSection from './components/BlogSection/BlogSection';
import CTASection from './components/CTASection/CTASection';


import Footer from './components/Footer/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroHeaderSection />
      <SocialProffSection />
      <FeaturesSection />
      <TestimonialSection />
      <FeaturesSection2/>
      <FAQSection/>
      <BlogSection/>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default App;
