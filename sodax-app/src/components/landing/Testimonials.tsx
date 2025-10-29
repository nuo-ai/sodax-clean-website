'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type TestimonialContent = {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatarUrl: string;
};

const StarRating = () => (
  <div className="flex text-accent-yellow">
    {[...Array(5)].map((_, index) => (
      <svg key={index} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, location, avatarUrl }: Omit<TestimonialContent, 'id'>) => (
  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md">
    <StarRating />
    <p className="mt-4 flex-grow text-base-gray">“{quote}”</p>
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
  const t = useTranslations('Home.testimonials');
  const testimonials = t.raw('items') as TestimonialContent[];

  return (
    <section className="bg-primary-blue-lightest px-6 py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary-dark-blue">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-semibold text-base-black">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-lg text-base-gray">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ id, ...testimonial }) => (
            <TestimonialCard key={id} {...testimonial} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex h-3 w-24 rounded-full bg-white">
            <div className="w-1/2 rounded-full bg-primary-dark-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
