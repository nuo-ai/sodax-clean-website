import React from 'react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Book Online',
    description: 'Schedule your cleaning in just a few clicks through our easy-to-use online system.',
  },
  {
    number: '02',
    title: 'We Clean',
    description: 'Our professional team arrives on time with all the necessary eco-friendly supplies.',
  },
  {
    number: '03',
    title: 'You Relax',
    description: 'Enjoy your sparkling clean home while we take care of the hard work.',
  },
  {
    number: '04',
    title: 'Enjoy Results',
    description: 'Experience the joy and comfort of a professionally cleaned space.',
  },
];

const Step = ({ number, title, description, isActive }: (typeof steps)[0] & { isActive: boolean }) => (
  <div className={`flex items-start space-x-5 p-6 rounded-lg ${isActive ? 'border-l-4 border-primary-dark-blue' : 'border-l-4 border-base-white-stroke'}`}>
    <div className={`text-2xl font-semibold ${isActive ? 'text-primary-dark-blue' : 'text-base-gray'}`}>
      {number}
    </div>
    <div>
      <h3 className={`text-xl font-semibold ${isActive ? 'text-base-black' : 'text-base-gray'}`}>{title}</h3>
      <p className="mt-2 text-base-gray">{description}</p>
    </div>
  </div>
);


const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-blue-lightest text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl font-semibold text-base-black">
            How We Can Help
          </h2>
          <p className="mt-4 text-base-gray max-w-xl mx-auto">
            Simple, seamless, and stress-free cleaning in 4 easy steps.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <Step key={index} {...step} isActive={index === 0} />
            ))}
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1528740561666-dc2479708150?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="How it works"
              width={570}
              height={552}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
