import React, { useContext } from "react";
import Slider from "react-slick";
import  ThemeContext  from "./contexts/theme";
import Azi from "../assets/azi.jpg";
import Mercy from "../assets/me.jpg";
import LanguageContext from "./contexts/LanguageContext";
const getImage = (imageName) => {
  switch (imageName) {
    case 'Azi':
      return Azi;
    case 'Mercy':
      return Mercy;
    default:
      return null; // Default case if no matching image is found
  }
};
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 8000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { languageData } = useContext(LanguageContext);
  const {TestimonialsData, Testimonial } = languageData;
  const { themeName } = useContext(ThemeContext);
  return (
    <div className={`py-14 mb-10 ${themeName === 'dark' ? 'bg-gray-800' : 'bg-[#f0f7ff]'}`}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-[600px] mx-auto mb-8">
          <h1 className={`uppercase text-4xl ${themeName === 'dark' ? 'text-[#00aaff]' : 'text-[#59D5E0]'}`}>
          {Testimonial.title1}
          </h1>
          <p className={`text-2xl font-bold ${themeName === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          {Testimonial.title2}
          </p>
        </div>

        {/* Testimonial Slider Section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((item, index ) => (
              <div key={item.id} className="px-4">
              <div className={`flex flex-col ${themeName === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'} rounded-lg hover:shadow-lg transition-shadow`}>
                {/* Upper Section - Image */}
                <div className="flex justify-center">
                  <img
                    src={getImage(item.img)}
                    alt={item.name}
                    className="w-32 h-32 rounded-full object-cover mt-6"
                  />
                </div>
                
                {/* Lower Section - Content */}
                <div className="p-6">
                  <p className={`text-lg font-bold ${themeName === 'dark' ? 'text-[#00aaff]' : 'text-[#0066CC]'}`}>
                    {item.name}
                  </p>
                  <p className={`text-sm ${themeName === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.text}</p>
                </div>
              </div>
            </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
