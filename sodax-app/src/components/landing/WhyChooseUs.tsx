import React from 'react';

const featureItems = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L1 9L12 16L23 9L12 2Z"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 9V17L12 22L23 17V9"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Eco-Friendly Products',
    description: 'We use non-toxic, biodegradable cleaning products that are safe for your family, pets, and the planet.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V12L16 14"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'On-Time Service',
    description: 'We respect your time. Our team arrives promptly and works efficiently to deliver a spotless home on schedule.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1L3 5V11C3 16.523 7.029 21.393 12 23C16.971 21.393 21 16.523 21 11V5L12 1Z"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Trained Professionals',
    description: 'Our team is fully trained, vetted, and insured, ensuring you receive a professional and trustworthy service.',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 12V22H4V12"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 7H2V7C2.00168 5.76014 2.65997 4.6219 3.75432 3.8968C4.84867 3.1717 6.24164 2.94639 7.55 3.29C10.5 4.09 13.5 4.09 16.45 3.29C17.7584 2.94639 19.1513 3.1717 20.2457 3.8968C21.34 4.6219 21.9983 5.76014 22 7V7Z"
          stroke="#1F75D6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Satisfaction Guarantee',
    description: 'Your satisfaction is our priority. If you\'re not happy, we\'ll come back and make it right.',
  },
];

const FeatureCard = ({ icon, title, description }: (typeof featureItems)[0]) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-base-black">{title}</h3>
      <p className="mt-1 text-base-gray">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="bg-primary-blue-lightest py-20 px-6">
      <div className="container mx-auto bg-primary-blue-lightest p-20 rounded-2xl flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Heading */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <span className="inline-block bg-white text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-semibold text-base-black leading-tight">
            Why Qlinest Is the Right Choice for Quality
          </h2>
          <p className="mt-4 text-base-black">
            Discover a range of services designed to bring comfort
          </p>
        </div>

        {/* Right Side: Features Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {featureItems.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
