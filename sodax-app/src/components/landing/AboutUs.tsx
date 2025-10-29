import React from 'react';
import Image from 'next/image';

const stats = [
  { value: '1,200+', label: 'Homes Cleaned' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '5+', label: 'Years of Experience' },
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl font-semibold text-primary-dark-blue">{value}</p>
    <p className="mt-2 text-base-gray">{label}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-primary-blue-lightest text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            ABOUT US
          </span>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-4xl font-semibold text-base-black leading-tight md:w-1/2 text-left">
              Trusted by Hundreds of Happy Homes
            </h2>
            <p className="mt-4 text-base-gray md:w-1/2 text-left">
              We believe a clean home creates space for a better life. From
              standard upkeep to detailed deep cleaning, we handle every corner
              with care, precision, and eco-friendly solutions.
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="mt-12 relative">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cleaning service in action"
            width={1240}
            height={500}
            className="w-full h-auto rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3L19 12L5 21V3Z"
                  stroke="#1F75D6"
                  fill="#1F75D6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
