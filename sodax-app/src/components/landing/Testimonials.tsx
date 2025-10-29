import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Qlinest transformed my home! Their attention to detail was impeccable. I've never seen my place so clean. Highly recommend their service!",
    name: 'Sarah L.',
    location: 'Sydney, NSW',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: "The deep cleaning service was worth every penny. The team was professional, punctual, and incredibly thorough. My apartment feels brand new.",
    name: 'Michael B.',
    location: 'Melbourne, VIC',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: "I was stressed about my end-of-lease clean, but Qlinest handled everything perfectly. I got my full bond back without any issues. Thank you!",
    name: 'Jessica P.',
    location: 'Brisbane, QLD',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const StarRating = () => (
  <div className="flex text-accent-yellow">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, location, avatarUrl }: (typeof testimonials)[0]) => (
  <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col h-full">
    <StarRating />
    <p className="mt-4 text-base-gray flex-grow">"{quote}"</p>
    <div className="mt-6 flex items-center">
      <Image src={avatarUrl} alt={name} width={48} height={48} className="rounded-full" />
      <div className="ml-4">
        <p className="font-semibold text-base-black">{name}</p>
        <p className="text-sm text-base-gray">{location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-primary-blue-lightest py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-semibold text-base-black">
            What Our Clients Are Saying
          </h2>
          <p className="mt-4 text-base-gray max-w-lg mx-auto">
            Real words from real happy homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
            <div className="w-24 h-3 bg-white rounded-full flex">
                <div className="w-1/2 bg-primary-dark-blue rounded-full"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
