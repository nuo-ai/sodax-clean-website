import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Standard Cleaning',
    description: 'Perfect for regular maintenance to keep your home fresh and tidy.',
    imageUrl: 'https://images.unsplash.com/photo-1585421793393-363695d75249?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Deep Cleaning',
    description: 'A comprehensive service that tackles dirt and grime in every corner.',
    imageUrl: 'https://images.unsplash.com/photo-1600724836930-6c689f923293?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Bond Cleaning',
    description: 'Ensure you get your bond back with our meticulous end-of-lease cleaning.',
    imageUrl: 'https://images.unsplash.com/photo-1541123437800-913357539426?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ServiceCard = ({ title, description, imageUrl }: (typeof services)[0]) => (
  <div className="relative rounded-2xl overflow-hidden h-[450px] group">
    <Image
      src={imageUrl}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg text-base-black">{title}</h3>
      <p className="text-sm text-base-gray mt-1">{description}</p>
    </div>
  </div>
);

const ServicesCards = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-blue-lightest text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            SERVICES
          </span>
          <h2 className="text-4xl font-semibold text-base-black">
            Our Cleaning Services
          </h2>
          <p className="mt-4 text-base-gray max-w-2xl mx-auto">
            Discover a range of services designed to bring comfort and
            cleanliness into every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="secondary">Browse All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
