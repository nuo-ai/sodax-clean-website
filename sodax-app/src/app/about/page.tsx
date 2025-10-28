import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Sodax Clean',
  description: 'Learn about Sodax Clean - your trusted professional cleaning service provider in Sydney',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Sodax Clean
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              We are dedicated to providing exceptional cleaning services that create 
              healthier, more comfortable environments for our clients.
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
                Our Story
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Founded with a simple mission: to provide Sydney residents and businesses 
                with reliable, high-quality cleaning services they can trust. 
                We understand that a clean space is more than just aesthetics – it is 
                about creating a healthy environment for you, your family, or your employees.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                From our humble beginnings as a small team of passionate cleaners, 
                we have grown to serve hundreds of satisfied customers across Sydney. 
                Our commitment to quality and customer satisfaction remains at the 
                heart of everything we do.
              </p>
              <p className="text-lg text-neutral-600">
                Every member of our team shares our core values: integrity, attention 
                to detail, and a genuine passion for creating pristine spaces.
              </p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-sm text-neutral-600">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                  <div className="text-sm text-neutral-600">Support</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                  <div className="text-sm text-neutral-600">Satisfaction</div>
                </div>
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
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from our cleaning methods 
              to how we treat our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Quality First
              </h3>
              <p className="text-neutral-600">
                We never compromise on quality. Every cleaning task is performed 
                to the highest standards with attention to every detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Customer Care
              </h3>
              <p className="text-neutral-600">
                Your satisfaction is our priority. We listen to your needs and 
                tailor our services to exceed your expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Eco-Friendly
              </h3>
              <p className="text-neutral-600">
                We use environmentally responsible cleaning products that are 
                safe for your family, pets, and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Sodax Clean Difference?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join hundreds of satisfied customers who trust us with their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}