import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-white min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Professional
            <span className="text-teal-600"> Cleaning Services</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Transform your space with our trusted cleaning services. 
            Residential and commercial cleaning solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}