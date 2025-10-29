import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services - Sodax Clean',
  description: 'Professional cleaning services for home and office in Sydney. From regular cleaning to deep cleaning services.',
};

export default function ServicesPage() {
  const t = useTranslations('Services');

  const services = [
    {
      key: 'home',
      title: t('services.home.title'),
      description: t('services.home.description'),
      features: t('services.home.features'),
      price: t('services.home.price'),
      quote: t('services.home.quote'),
    },
    {
      key: 'deep',
      title: t('services.deep.title'),
      description: t('services.deep.description'),
      features: t('services.deep.features'),
      price: t('services.deep.price'),
      quote: t('services.deep.quote'),
    },
    {
      key: 'office',
      title: t('services.office.title'),
      description: t('services.office.description'),
      features: t('services.office.features'),
      price: t('services.office.price'),
      quote: t('services.office.quote'),
    },
    {
      key: 'construction',
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      features: t('services.construction.features'),
      price: t('services.construction.price'),
      quote: t('services.construction.quote'),
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: t('process.steps.1.title'),
      description: t('process.steps.1.description')
    },
    {
      number: '2',
      title: t('process.steps.2.title'),
      description: t('process.steps.2.description')
    },
    {
      number: '3',
      title: t('process.steps.3.title'),
      description: t('process.steps.3.description')
    },
    {
      number: '4',
      title: t('process.steps.4.title'),
      description: t('process.steps.4.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark-blue text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-primary-blue-light max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.key}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                    <div className="bg-primary-blue-lightest text-primary-dark-blue px-3 py-1 rounded-full text-sm font-medium">
                      {service.price}
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">
                      {t('services.home.features[0]')}:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-neutral-600">
                          <svg className="w-5 h-5 text-primary-dark-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('process.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-dark-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-primary-blue-light mb-8">
            {t('cta.subtitle')}
          </p>
          <Link href="/contact">
            <Button variant="secondary">
              {t('cta.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
