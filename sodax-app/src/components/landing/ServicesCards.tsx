'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

type ServiceCardContent = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const CARD_IMAGE_SIZES = '(min-width: 1024px) 20vw, 100vw';

const ServiceCard = ({ title, description, imageUrl }: ServiceCardContent) => (
  <div className="group relative h-[450px] overflow-hidden rounded-2xl">
    <Image
      src={imageUrl}
      alt={title}
      fill
      sizes={CARD_IMAGE_SIZES}
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-lg font-semibold text-base-black">{title}</h3>
      <p className="mt-1 text-sm text-base-gray">{description}</p>
    </div>
  </div>
);

const ServicesCards = () => {
  const t = useTranslations('Home.servicesSection');
  const services = t.raw('cards') as ServiceCardContent[];

  return (
    <section className="bg-white px-6 py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-blue-lightest px-4 py-1.5 text-sm font-medium text-primary-dark-blue">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-semibold text-base-black">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base-gray">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button variant="secondary">{t('ctaLabel')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
