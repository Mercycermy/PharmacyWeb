import React, { useContext } from "react"; // Import useContext
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import SubjectCard from "./components/ProductCard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import  ThemeContext  from './components/contexts/theme'; // Import ThemeContext

const App = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext); // Destructure themeName from ThemeContext

  return (
    <div className={`overflow-x-hidden ${themeName} app`}>
      <Navbar className="navbar" />
      <main>
        <Hero />
        <WhyChooseUs />
        <SubjectCard />
        <FAQ />
        <Testimonial />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
