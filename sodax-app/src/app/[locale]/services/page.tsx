import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';

const SERVICE_KEYS = ['home', 'deep', 'office', 'construction'] as const;
const PROCESS_STEPS = ['1', '2', '3', '4'] as const;

type ServiceKey = (typeof SERVICE_KEYS)[number];

type ServiceContent = {
  key: ServiceKey;
  title: string;
  description: string;
  features: string[];
  price: string;
  quote: string;
};

type ProcessStepContent = {
  number: string;
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: 'Our Services - Sodax Clean',
  description:
    'Professional cleaning services for home and office in Sydney. From regular cleaning to deep cleaning services.',
};

export default async function ServicesPage() {
  const t = await getTranslations('Services');

  const services: ServiceContent[] = SERVICE_KEYS.map((key) => {
    const features = t.raw(`services.${key}.features`) as string[];

    return {
      key,
      title: t(`services.${key}.title`),
      description: t(`services.${key}.description`),
      features,
      price: t(`services.${key}.price`),
      quote: t(`services.${key}.quote`),
    };
  });

  const processSteps: ProcessStepContent[] = PROCESS_STEPS.map((step) => ({
    number: step,
    title: t(`process.steps.${step}.title`),
    description: t(`process.steps.${step}.description`),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark-blue py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{t('hero.title')}</h1>
            <p className="mx-auto max-w-3xl text-xl text-primary-blue-light">{t('hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.key}
                className="overflow-hidden rounded-lg border border-white-stroke bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-base-black">{service.title}</h3>
                    <div className="rounded-full bg-primary-blue-lightest px-3 py-1 text-sm font-medium text-primary-dark-blue">
                      {service.price}
                    </div>
                  </div>

                  <p className="mb-6 text-base-gray">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-base-black">{t('services.featuresHeading')}</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-base-gray">
                          <svg className="mr-2 h-5 w-5 flex-shrink-0 text-primary-dark-blue" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button variant="primary" className="w-full">
                      {service.quote}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-base-black">{t('process.title')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-base-gray">{t('process.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-dark-blue text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-base-black">{step.title}</h3>
                <p className="text-sm text-base-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">{t('cta.title')}</h2>
          <p className="mb-8 text-xl text-primary-blue-light">{t('cta.subtitle')}</p>
          <Link href="/contact">
            <Button variant="secondary">{t('cta.contact')}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
