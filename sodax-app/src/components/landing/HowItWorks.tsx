'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type StepContent = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const Step = ({ number, title, description, isActive }: Omit<StepContent, 'id'> & { isActive: boolean }) => (
  <div
    className={`flex items-start space-x-5 rounded-lg p-6 ${isActive ? 'border-l-4 border-primary-dark-blue' : 'border-l-4 border-white-stroke'}`}
  >
    <div className={`text-2xl font-semibold ${isActive ? 'text-primary-dark-blue' : 'text-base-gray'}`}>{number}</div>
    <div>
      <h3 className={`text-xl font-semibold ${isActive ? 'text-base-black' : 'text-base-gray'}`}>{title}</h3>
      <p className="mt-2 text-base-gray">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const t = useTranslations('Home.howItWorks');
  const steps = t.raw('steps') as StepContent[];

  return (
    <section className="bg-white px-6 py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-blue-lightest px-4 py-1.5 text-sm font-medium text-primary-dark-blue">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-semibold text-base-black">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base-gray">{t('subtitle')}</p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <Step key={step.id} {...step} isActive={index === 0} />
            ))}
          </div>
          <div className="lg:w-1/2">
            <Image
              src={t('image.url')}
              alt={t('image.alt')}
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
