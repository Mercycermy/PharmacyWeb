import React from "react";
import Slider from "react-slick";

// Pharmacy Testimonials Data
const TestimonialsData = [
  {
    id: 1,
    name: "Jane Doe",
    text: "The pharmacy's delivery service is outstanding! My prescriptions always arrive on time, and the staff is incredibly helpful and caring.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Michael Johnson",
    text: "I’ve never experienced such personalized attention at any pharmacy. The pharmacists take the time to answer my questions and guide me.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Emily Smith",
    text: "The online ordering system is so convenient! It saves me time, and I appreciate the reminders for refills.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "David Brown",
    text: "Exceptional service and quality products. I trust this pharmacy for all my healthcare needs.",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
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

  return (
    <div className="py-14 mb-10 bg-[#f0f7ff]">
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-[600px] mx-auto mb-8">
          <h1 className="uppercase text-4xl text-[#0066CC] font-semibold">
            Our Testimonials
          </h1>
          
          <p className="text-2xl font-bold text-gray-800">
            What Our Customers Say About Us
          </p>
        </div>

        {/* Testimonial Slider Section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-4">
                <div className="flex flex-col gap-5 p-6 shadow-md rounded-lg bg-white hover:shadow-lg transition-shadow">
                  {/* Upper Section */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-bold text-[#0066CC]">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">Satisfied Customer</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>

                  {/* Rating */}
                  <div className="text-[#FFB400] text-lg">⭐⭐⭐⭐⭐</div>
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
