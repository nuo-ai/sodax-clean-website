'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is included in a standard cleaning service?',
    answer: 'A standard cleaning service includes dusting, vacuuming, mopping, and cleaning of all surfaces in the kitchen, bathrooms, bedrooms, and living areas. We also empty trash bins and make beds.',
  },
  {
    question: 'Are your cleaning products safe for pets and children?',
    answer: 'Yes, we use eco-friendly and non-toxic cleaning products that are safe for your entire family, including pets and children. We prioritize your health and safety.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, you do not need to be home. Many of our clients provide us with a key or a code to enter their home. Our team is fully vetted and insured for your peace of mind.',
  },
  {
    question: 'How long will the cleaning take?',
    answer: 'The duration of the cleaning depends on the size of your home and the type of service you have requested. We can provide an estimated time frame when you book your service.',
  },
  {
    question: 'What if I am not satisfied with the service?',
    answer: 'Your satisfaction is our guarantee. If you are not satisfied with our service, please contact us within 24 hours, and we will return to re-clean the specific areas at no extra cost.',
  },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-base-white-stroke">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-base-black">{question}</span>
        <span className="text-primary-dark-blue">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-base-gray">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};


const FAQ = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block bg-primary-blue-lightest text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                        FAQ
                    </span>
                    <h2 className="text-4xl font-semibold text-base-black">
                        Got Questions?
                    </h2>
                    <p className="mt-4 text-base-gray max-w-xl mx-auto">
                        We’ve got answers to your most common cleaning concerns.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FaqItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
