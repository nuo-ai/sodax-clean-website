import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const promotions = [
  {
    title: 'First-Time Customer',
    discount: 'Get 20% Off',
    description: 'First-time customers get 20% off any cleaning service. Book now and experience the Qlinest difference!',
    imageUrl: 'https://images.unsplash.com/photo-1571757392687-4c13ab6b5b13?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Referral Program',
    discount: 'Get $50 Off',
    description: 'Refer a friend and you both get $50 off your next cleaning service. Sharing is caring!',
    imageUrl: 'https://images.unsplash.com/photo-1628102490334-a9aaa5b401f0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const PromoCard = ({ title, discount, description, imageUrl }: (typeof promotions)[0]) => (
  <div className="relative rounded-2xl overflow-hidden text-white flex-1 flex flex-col p-8 bg-gradient-to-br from-primary-blue-light to-primary-dark-blue min-h-[350px]">
    <Image
      src={imageUrl}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 opacity-20"
    />
    <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-4xl font-bold text-accent-yellow my-2">{discount}</p>
        <p className="flex-grow">{description}</p>
        <div className="mt-4">
            <Button variant="secondary" size="lg">Book Now</Button>
        </div>
    </div>
  </div>
);


const Promotion = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-blue-lightest text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            PROMOTION
          </span>
          <h2 className="text-4xl font-semibold text-base-black">
            Get a Sparkling Clean Home At a Special Price!
          </h2>
          <p className="mt-4 text-base-gray max-w-2xl mx-auto">
            Enjoy our limited-time offer on professional home cleaning services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {promotions.map((promo, index) => (
            <PromoCard key={index} {...promo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotion;
