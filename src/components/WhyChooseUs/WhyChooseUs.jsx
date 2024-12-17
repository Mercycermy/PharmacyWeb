import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import Delivery from "../../assets/delivery.png";
import Health from "../../assets/healthtracking.png";
import Expert from "../../assets/expert-guidance.png";



// Pharmacy Services Data
const PharmacyServices = [
  {
    id: 1,
    title: "Prescription Delivery",
    desc: "Medications delivered to your doorstep for your convenience.",
    image: Delivery,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Health Tracking",
    desc: "Tools to monitor your progress for better health outcomes.",
    image: Health,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Expert Guidance",
    desc: "Consultations from our knowledgeable and licensed pharmacists.",
    image: Expert,
    delay: 0.9,
  },
];

// Why Choose Us Data
const WhyChooseUsServices = [
  {
    id: 1,
    title: "Convenience",
    desc: "Online orders, secure prescription uploads, and home delivery.",
    
    delay: 0.3,
  },
  {
    id: 2,
    title: "Trusted Expertise",
    desc: "Reliable care from licensed and professional pharmacists.",
    
    delay: 0.6,
  },
  {
    id: 3,
    title: "Community Focus",
    desc: "Dedicated to improving lives one step at a time.",
    
    delay: 0.9,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* About Us Section */}
      <div className="container py-12">
        <div className="text-center space-y-6 max-w-[700px] mx-auto mb-12">
          <h1 className="uppercase font-bold text-[#0066CC] text-3xl">
            About Us
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to our Pharmacy, where your health and well-being are our
            top priorities! For years, we’ve been committed to providing
            exceptional pharmaceutical care to our community. We offer a wide
            range of high-quality medications, health products, and personalized
            services to meet your unique needs.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-[#0066CC] font-medium hover:underline"
          >
            More about us →
          </a>
        </div>
      </div>

    {/* What We Do Section */}
<div className="container py-12">
  <div className="space-y-4 text-center mb-8">
    <h2 className="font-semibold text-2xl text-[#0066CC]">What We Do</h2>
  </div>
  {/* Cards */}
  <div className="flex flex-wrap gap-8">
    {PharmacyServices.map((service) => (
      <motion.div
        key={service.id}
        variants={SlideLeft(service.delay)}
        initial="hidden"
        whileInView="visible"
        className="w-full flex flex-col sm:flex-row items-center bg-[#f0f7ff] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full sm:w-1/3 h-[200px] object-contain bg-white"
        />
        <div className="p-6 sm:w-2/3 text-center sm:text-left space-y-3">
          <h3 className="font-bold text-lg text-[#0066CC]">{service.title}</h3>
          <p className="text-gray-700 text-sm">{service.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* Why Choose Us Section */}
      <div className="container py-12">
        <div className="space-y-4 text-center mb-8">
          <h2 className="font-semibold text-2xl text-[#0066CC]">
            Why Choose Us?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {WhyChooseUsServices.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="hidden"
              whileInView="visible"
              className="shadow-md rounded-lg overflow-hidden bg-[#f0f7ff] hover:shadow-lg transition-shadow"
            >
             
              <div className="p-6 text-center space-y-3">
                <h3 className="font-bold text-lg text-[#0066CC]">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
