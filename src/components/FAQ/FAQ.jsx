import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const FAQData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer prescription delivery, health tracking, and expert guidance.",
  },
  {
    id: 2,
    question: "How do I track my order?",
    answer: "You can track your order status via the tracking link sent to your email after purchase.",
  },
  {
    id: 3,
    question: "Can I return medications?",
    answer: "Yes, we accept returns within 30 days for unopened and unused medications.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-blue text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
        <h1 className="uppercase text-4xl text-[#0066CC] font-semibold">
        Frequently Asked Questions
          </h1>
          
        </div>
        <div className="space-y-4">
          {FAQData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 pb-4"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpanded(item.id)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <FaQuestionCircle className={`text-2xl ${expanded === item.id ? 'text-primary' : 'text-gray-500'}`} />
              </div>
              {expanded === item.id && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;