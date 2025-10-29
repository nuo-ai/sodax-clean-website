import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const mainBlog = {
  category: 'TIPS & TRICKS',
  title: 'The Ultimate Guide to a Spotless Kitchen',
  description: 'Learn the secrets to maintaining a sparkling clean kitchen with our expert tips and tricks.',
  imageUrl: 'https://images.unsplash.com/photo-1600585152220-029e84b1ae4d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const otherBlogs = [
  {
    title: '5 Must-Have Eco-Friendly Cleaning Products',
    category: 'PRODUCTS',
    imageUrl: 'https://images.unsplash.com/photo-1593138985396-9d3a2a6c8e3a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'How to Prepare for a Professional Cleaning Service',
    category: 'GUIDES',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The Benefits of a Regular Cleaning Schedule',
    category: 'LIFESTYLE',
    imageUrl: 'https://images.unsplash.com/photo-1516542076529-1ea08553386f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const MainBlogCard = () => (
  <div className="bg-base-white-bg p-5 rounded-2xl flex flex-col h-full">
    <div className="relative h-[300px] w-full rounded-2xl overflow-hidden">
        <Image
          src={mainBlog.imageUrl}
          alt={mainBlog.title}
          layout="fill"
          objectFit="cover"
        />
    </div>
    <div className="mt-4">
      <span className="text-primary-dark-blue text-sm font-semibold">{mainBlog.category}</span>
      <h3 className="text-xl font-semibold text-base-black mt-2">{mainBlog.title}</h3>
      <p className="text-base-gray mt-2 flex-grow">{mainBlog.description}</p>
    </div>
  </div>
);

const OtherBlogCard = ({ title, category, imageUrl }: (typeof otherBlogs)[0]) => (
    <div className="bg-base-white-bg p-5 rounded-2xl flex items-center gap-6">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
        </div>
        <div>
            <span className="text-primary-dark-blue text-sm font-semibold">{category}</span>
            <h4 className="text-lg font-semibold text-base-black mt-1 leading-tight">{title}</h4>
        </div>
    </div>
);


const Blog = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-block bg-primary-blue-lightest text-primary-dark-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                        BLOG
                    </span>
                    <h2 className="text-4xl font-semibold text-base-black">
                        From Our Cleaning Experts
                    </h2>
                    <p className="mt-4 text-base-gray max-w-xl mx-auto">
                        Tips, tricks, and insights to maintain a fresher home.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/2">
                        <MainBlogCard />
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        {otherBlogs.map((blog, index) => (
                            <OtherBlogCard key={index} {...blog} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
