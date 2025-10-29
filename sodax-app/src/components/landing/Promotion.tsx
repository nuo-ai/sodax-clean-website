'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

type PromotionCardContent = {
  id: string;
  title: string;
  discount: string;
  description: string;
  imageUrl: string;
};

const CARD_IMAGE_SIZES = '(min-width: 1024px) 33vw, 100vw';

const PromoCard = ({ title, discount, description, imageUrl, ctaLabel }: PromotionCardContent & { ctaLabel: string }) => (
  <div className="relative flex flex-1 min-h-[350px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-primary-blue-light to-primary-dark-blue p-8 text-white">
    <Image
      src={imageUrl}
      alt={title}
      fill
      sizes={CARD_IMAGE_SIZES}
      className="absolute inset-0 object-cover opacity-20"
    />
    <div className="relative z-10 flex h-full flex-col">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="my-2 text-4xl font-bold text-accent-yellow">{discount}</p>
      <p className="flex-grow">{description}</p>
      <div className="mt-4">
        <Button variant="secondary" size="lg">
          {ctaLabel}
        </Button>
      </div>
    </div>
  </div>
);

const Promotion = () => {
  const t = useTranslations('Home.promotion');
  const buttonLabel = t('buttonLabel');
  const promotions = t.raw('cards') as PromotionCardContent[];

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

        <div className="flex flex-col gap-8 lg:flex-row">
          {promotions.map((promo) => (
            <PromoCard key={promo.id} {...promo} ctaLabel={buttonLabel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotion;
