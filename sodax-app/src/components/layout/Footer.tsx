/**
 * 頁腳組件 (Footer Component)
 * - 集成 next-intl：標題、版權、政策連結等文案國際化
 * - 保留鏈接清單名稱為英文示例（可後續納入 messages）
 */

import {getTranslations} from 'next-intl/server';

interface FooterProps {
  className?: string;
}

export async function Footer({ className }: FooterProps) {
  const t = await getTranslations();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('Footer.services'),
      links: [
        { name: 'Home Cleaning', href: '/services/home' },
        { name: 'Office Cleaning', href: '/services/office' },
        { name: 'Deep Cleaning', href: '/services/deep' },
        { name: 'Post-Construction', href: '/services/construction' },
      ],
    },
    {
      title: t('Footer.company'),
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: t('Footer.contact'),
      links: [
        { name: 'Get Quote', href: '/contact' },
        { name: 'Support', href: '/support' },
        { name: 'Careers', href: '/careers' },
      ],
    },
  ];

  const contactInfo = {
    phone: '+61 2 1234 5678',
    email: 'info@sodaxclean.com.au',
    address: 'Sydney, NSW 2000, Australia',
  };

  return (
    <footer className={className}>
      <div className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-accent-yellow mb-4">
                Sodax<span className="text-white">Clean</span>
              </h3>
              <p className="text-neutral-300 mb-6 text-sm leading-relaxed">
                {t('Footer.companyDescription')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-neutral-300">{contactInfo.phone}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-neutral-300">{contactInfo.email}</span>
                </div>

                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 text-accent-yellow mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-neutral-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-neutral-300 hover:text-accent-yellow text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-neutral-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 text-sm mb-4 md:mb-0">
                {t('Footer.copyright', {year: currentYear})}
              </p>

              <div className="flex space-x-6">
                <a href="/privacy" className="text-neutral-400 hover:text-accent-yellow text-sm transition-colors duration-200">
                  {t('Footer.privacy')}
                </a>
                <a href="/terms" className="text-neutral-400 hover:text-accent-yellow text-sm transition-colors duration-200">
                  {t('Footer.terms')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
