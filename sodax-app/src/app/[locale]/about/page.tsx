import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us - Sodax Clean',
  description: 'Learn about Sodax Clean - your trusted professional cleaning service provider in Sydney',
};

export default function AboutPage() {
  const t = useTranslations('About');
  
  const stats = [
    { value: '500+', label: t('stats.clients') },
    { value: '5+', label: t('stats.experience') },
    { value: '24/7', label: t('stats.support') },
    { value: '100%', label: t('stats.satisfaction') },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('values.quality.title'),
      description: t('values.quality.description')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('values.care.title'),
      description: t('values.care.description')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t('values.eco.title'),
      description: t('values.eco.description')
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

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                {t('story.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('story.content1')}
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                {t('story.content2')}
              </p>
              <p className="text-lg text-neutral-600">
                {t('story.content3')}
              </p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-dark-blue mb-2">{stat.value}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('values.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary-blue-lightest rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary">
                {t('cta.getQuote')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark-blue">
                {t('cta.contact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
