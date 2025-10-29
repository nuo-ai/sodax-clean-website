'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {useTranslations, useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';

/**
 * 導航頭組件 (Header Component)
 * - 接入 next-intl：導航、CTA、語言切換文案來源於 messages
 * - 語言切換：調用 /api/locale 寫 Cookie，然後刷新當前路由
 */

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'contact', href: '/contact' },
  ] as const;

  const handleToggleLocale = async () => {
    const next = locale === 'en' ? 'zh' : 'en';
    try {
      await fetch(`/api/locale?locale=${next}`, { method: 'POST' });
      router.refresh();
    } catch (e) {
      // 回退刷新
      window.location.reload();
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60',
        className
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary-dark-blue">
                Sodax<span className="text-neutral-900">Clean</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-dark-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t(`Nav.${item.key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleLocale}
              className="flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="text-xs font-medium uppercase">
                {locale === 'en' ? t('Actions.switchToZh') : t('Actions.switchToEn')}
              </span>
            </Button>

            {/* CTA Button */}
            <Button variant="primary" size="sm">
              {t('Actions.getQuote')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-dark-blue hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-200 mt-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-dark-blue hover:bg-neutral-50 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`Nav.${item.key}`)}
                </a>
              ))}

              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    await handleToggleLocale();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase">
                    {locale === 'en' ? t('Actions.switchToZh') : t('Actions.switchToEn')}
                  </span>
                </Button>

                <Button variant="primary" size="sm" onClick={() => setIsMenuOpen(false)}>
                  {t('Actions.getQuote')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
