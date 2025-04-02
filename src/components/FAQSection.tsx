"use client";

import type React from "react";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <CaretDown
          size={20}
          className={`text-nyron-primary transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-nyron-text">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How does it work?",
      answer: "Nyron AI uses performance-optimized screen capture to ensure smooth operation without slowing down your PC. The AI analyzes the screen in real-time using a highly trained AI model to identify player objects and calculates precise mouse movements to help you tracking your nearest identified target. Everything operates 100% externally, without accessing or modifying any game files, ensuring a safe and reliable experience."
    },
    {
      id: 2,
      question: "Will I get banned?",
      answer: "While there's always a risk of being banned when using any cheat, Nyron AI stands out with its advanced AI Object Detection technology. Nyron identifies enemies in real-time without reading or writing any game data, making it exceptionally safe and almost impossible to detect. For added security, we recommend using additional physical hardware. Details can be found on the Nyron AI Product page. Security is our top priority, and in addition to existing security measures, we provide every user with a private software build to prevent signature scans. To put your mind at ease, we are proud to confirm that none of our 850+ users have ever been banned yet."
    },
    {
      id: 3,
      question: "How can I get support?",
      answer: "Simply open a ticket in our Public Discord Server. If you are already a customer, please open a discord in our Private Customer Server, since we prioritize Customer Support Tickets."
    },
    {
      id: 4,
      question: "Can I pay securely?",
      answer: "Yes, we take security very seriously. We use advanced fraud prevention measures to protect against fraudulent transactions and we securely store all payment information."
    }
  ];

  return (
    <section id="faq" className="w-full py-16 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-nyron-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
