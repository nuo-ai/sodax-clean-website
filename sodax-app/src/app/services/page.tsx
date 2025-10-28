import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Sodax Clean',
  description: 'Professional cleaning services for home and office in Sydney. From regular cleaning to deep cleaning services.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Regular residential cleaning services to keep your home pristine and comfortable.',
      features: [
        'Living areas and bedrooms',
        'Kitchen cleaning and sanitization',
        'Bathroom deep cleaning',
        'Dusting and vacuuming',
        'Trash removal',
      ],
      price: 'From $120/session',
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning service for every corner of your home.',
      features: [
        'Detailed baseboard cleaning',
        'Inside window cleaning',
        'Behind and under furniture',
        'Light fixture cleaning',
        'Cabinet and drawer cleaning',
      ],
      price: 'From $250/session',
    },
    {
      title: 'Office Cleaning',
      description: 'Professional commercial cleaning services for productive work environments.',
      features: [
        'Workspace sanitization',
        'Common area cleaning',
        'Restroom maintenance',
        'Floor care and polishing',
        'Waste management',
      ],
      price: 'From $200/session',
    },
    {
      title: 'Post-Construction',
      description: 'Thorough cleaning after renovations or construction projects.',
      features: [
        'Dust and debris removal',
        'Surface cleaning and polishing',
        'Window and frame cleaning',
        'Floor cleaning and waxing',
        'Final inspection ready',
      ],
      price: 'From $400/session',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Cleaning Services
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Professional cleaning solutions tailored to your specific needs. 
              From regular maintenance to specialized deep cleaning services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.price}
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">
                      What is Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-neutral-600">
                          <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
                    Get Quote for {service.title}
                  </button>
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
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Getting your space professionally cleaned is simple and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Request Quote
              </h3>
              <p className="text-neutral-600 text-sm">
                Tell us about your space and cleaning needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Get Estimate
              </h3>
              <p className="text-neutral-600 text-sm">
                Receive a detailed quote within 24 hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Schedule Service
              </h3>
              <p className="text-neutral-600 text-sm">
                Choose a convenient time for your cleaning
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Enjoy Clean Space
              </h3>
              <p className="text-neutral-600 text-sm">
                Relax in your professionally cleaned environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Cleaning Solution?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            We offer flexible cleaning plans tailored to your unique requirements.
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200">
            Contact Us for Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
}