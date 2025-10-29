import { Button } from '@/components/ui/Button';
import AboutUs from '@/components/landing/AboutUs';
import Blog from '@/components/landing/Blog';
import Image from 'next/image';
import FAQ from '@/components/landing/FAQ';
import HowItWorks from '@/components/landing/HowItWorks';
import Promotion from '@/components/landing/Promotion';
import ServicesCards from '@/components/landing/ServicesCards';
import Testimonials from '@/components/landing/Testimonials';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

/**
 * Sodax Clean 首頁
 *
 * 1:1 複刻 Figma "Home" 頁面設計
 * 包含專業清潔服務介紹和醒目 CTA 按鈕
 *
 * @returns React Component
 */
export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark-blue text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('Home.hero.titleLine1')}
                <br />
                <span className="text-primary-blue-light">{t('Home.hero.titleEmphasis')}</span>
                {t('Home.hero.titleLine2')}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                {t('Home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/calculator">
                  <Button variant="secondary" size="lg">
                    {t('Home.hero.book')}
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                    {t('Home.hero.viewServices')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Happy family in a clean home"
                width={562}
                height={520}
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesCards />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Promotion Section */}
      <Promotion />

      {/* FAQ Section */}
      <FAQ />

      {/* Blog Section */}
      <Blog />

      {/* CTA Section */}
      <section className="bg-primary-dark-blue text-white py-20 px-6">
        <div className="container mx-auto text-center relative overflow-hidden rounded-2xl p-12">
          <Image
            src="https://images.unsplash.com/photo-1571757392687-4c13ab6b5b13?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-10"
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('Home.cta.headingLine1')}
              <br />
              <span className="text-primary-blue-light">{t('Home.cta.headingEmphasis')}</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {t('Home.cta.body')}
            </p>
            <Link href="/calculator">
              <Button variant="secondary" size="lg">
                {t('Home.cta.bookFirst')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
