// Accordion.jsx
import React, {  useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How do I apply to rent a house?",
    answer: "You can apply online by clicking the 'Apply Now' button on the listing page. We'll guide you through the process."
  },
  {
    question: "Are pets allowed in the rental properties?",
    answer: "Most properties allow pets with a small fee. Check the listing details or contact us for confirmation."
  },
  {
    question: "What is included in the rent?",
    answer: "Rent typically includes water and trash services. Electricity, internet, and gas are usually separate."
  },
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full text-left py-4 px-4 flex justify-between items-center"
    >
      <span className="font-medium text-gray-800">{faq.question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        ▼
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 pb-4 text-gray-600 text-sm overflow-hidden"
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>


  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow rounded-md">
      {faqData.map((faq, index) => (
        <AccordionItem
          key={index}
       
        />
      ))}
    </div>
  );
};

export default Accordion;


