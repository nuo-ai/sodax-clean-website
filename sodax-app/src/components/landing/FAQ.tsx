'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type FaqItemContent = {
  id: string;
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: Omit<FaqItemContent, 'id'>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white-stroke">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <span className="text-lg font-semibold text-base-black">{question}</span>
        <span className="text-primary-dark-blue">
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen ? (
        <div className="pb-5 text-base-gray">
          <p>{answer}</p>
        </div>
      ) : null}
    </div>
  );
};

const FAQ = () => {
  const t = useTranslations('Home.faq');
  const faqData = t.raw('items') as FaqItemContent[];

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
        <div className="mx-auto max-w-4xl">
          {faqData.map(({ id, ...faq }) => (
            <FaqItem key={id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
