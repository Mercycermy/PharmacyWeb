import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

import SubjectCard from "./components/ProductCard/ProductCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";



const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
     
      <Hero />
     
      <WhyChooseUs />
      
      <SubjectCard />
      <FAQ/>
      <Testimonial />
      <Contact />
      < Footer/>
    </main>
  );
};

export default App;
