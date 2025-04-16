import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import SubjectCard from "./components/ProductCard";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivacyPolicy from "./components/PrivacyPolicy";
import ThemeContext from './components/contexts/theme';
import Telegram from "./components/ScrollToTop/Telegramicon";
import { LanguageProvider } from "./components/contexts/LanguageContext";
import "./App.css";
const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <LanguageProvider>
      <div className={`app ${themeName}`}  id="top">
        <Router > {/* Set base URL */}
            <Routes>
              <Route path="/" element={
                <>
                 <Navbar />
                  <Hero />
                  <WhyChooseUs />
                  <SubjectCard />
                  <FAQ />
                  <Testimonial />
                  <Contact />
                  <Footer />
                </>
              } />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
          <Telegram />
          <ScrollToTop />
        </Router>
      </div>
    </LanguageProvider>
  );
};

export default App;
