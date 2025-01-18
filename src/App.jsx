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

const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <LanguageProvider>
      <div className={`overflow-x-hidden ${themeName} app`}>
        <Router basename="/PharmacyWeb"> {/* Set base URL */}
          <main>
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
          </main>
          <Telegram />
          <ScrollToTop />
        </Router>
      </div>
    </LanguageProvider>
  );
};

export default App;
