'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type BlogCard = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
};

const MAIN_CARD_SIZES = '(min-width: 1024px) 50vw, 100vw';
const LIST_CARD_SIZES = '96px';

const MainBlogCard = ({ category, title, description, imageUrl }: BlogCard) => (
  <div className="flex h-full flex-col rounded-2xl bg-white p-5">
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
      <Image src={imageUrl} alt={title} fill sizes={MAIN_CARD_SIZES} className="object-cover" />
    </div>
    <div className="mt-4">
      <span className="text-sm font-semibold text-primary-dark-blue">{category}</span>
      <h3 className="mt-2 text-xl font-semibold text-base-black">{title}</h3>
      {description ? <p className="mt-2 flex-grow text-base-gray">{description}</p> : null}
    </div>
  </div>
);

const OtherBlogCard = ({ title, category, imageUrl }: BlogCard) => (
  <div className="flex items-center gap-6 rounded-2xl bg-white p-5">
    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
      <Image src={imageUrl} alt={title} fill sizes={LIST_CARD_SIZES} className="object-cover" />
    </div>
    <div>
      <span className="text-sm font-semibold text-primary-dark-blue">{category}</span>
      <h4 className="mt-1 text-lg font-semibold leading-tight text-base-black">{title}</h4>
    </div>
  </div>
);

const Blog = () => {
  const t = useTranslations('Home.blog');
  const main = t.raw('main') as BlogCard;
  const posts = t.raw('posts') as BlogCard[];

  return (
    <section className="bg-white px-6 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-blue-lightest px-4 py-1.5 text-sm font-medium text-primary-dark-blue">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-semibold text-base-black">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base-gray">{t('subtitle')}</p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="lg:w-1/2">
            <MainBlogCard {...main} />
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2">
            {posts.map((blog) => (
              <OtherBlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
