import Image from 'next/image'
import Navbar from './components/Navbar'
import ScrollAnimation from './components/ScrollAnimation'
import ProductCard from './components/ProductCard'
import CountUp from './components/CountUp'
import ProductSection from './components/ProductSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollAnimation />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80"
            alt="Spa atmosphere"
            fill
            className="object-cover animate-fade-in hover-bright"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
                Beauty Service HK
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in-up animate-delay-200">
                Experience luxury beauty treatments in the heart of Hong Kong
              </p>
              <a
                href="#services"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors animate-fade-in-up animate-delay-300 hover-glow"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">Luxury Skincare Collection</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              Experience the epitome of skincare excellence with our premium collection, featuring advanced formulations and luxurious ingredients.
            </p>
            
            <div className="space-y-32">
              {products.map((product, index) => (
                <ProductSection key={product.title} {...product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 slide-in-down">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto slide-in-up stagger-1">
              Experience the difference at our luxury beauty spa, where excellence meets tranquility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="slide-in-left stagger-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4 rotate-in">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">Expert Therapists</h3>
                <p className="text-gray-600">Our certified professionals bring years of experience and expertise to every treatment.</p>
              </div>
            </div>

            <div className="slide-in-up stagger-3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4 rotate-in">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">Luxury Experience</h3>
                <p className="text-gray-600">Immerse yourself in an atmosphere of pure luxury and relaxation in our premium facilities.</p>
              </div>
            </div>

            <div className="slide-in-right stagger-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4 rotate-in">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">Personalized Care</h3>
                <p className="text-gray-600">Every treatment is tailored to your unique needs and preferences for optimal results.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="scale-fade stagger-1">
                <div className="text-4xl font-serif text-primary mb-2">
                  <CountUp end={5000} suffix="+" />
                </div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="scale-fade stagger-2">
                <div className="text-4xl font-serif text-primary mb-2">
                  <CountUp end={15} suffix="+" />
                </div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="scale-fade stagger-3">
                <div className="text-4xl font-serif text-primary mb-2">
                  <CountUp end={20} suffix="+" />
                </div>
                <p className="text-gray-600">Expert Staff</p>
              </div>
              <div className="scale-fade stagger-4">
                <div className="text-4xl font-serif text-primary mb-2">
                  <CountUp end={50} suffix="+" />
                </div>
                <p className="text-gray-600">Luxury Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-serif mb-8 parallax-scroll">About Us</h2>
              <p className="text-gray-600 mb-8 parallax-scroll">
                Founded in 2020, Beauty Service HK has been providing premium beauty and wellness services
                in the heart of Hong Kong. Our team of experienced professionals is dedicated to helping
                you look and feel your best.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className={`text-center stagger-item stagger-delay-${index + 1}`}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 hover-rotate-icon">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center parallax-scroll">Visit Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-8 parallax-scroll">
                <p className="text-gray-600 mb-4">
                  123 Queen's Road Central, Central, Hong Kong
                </p>
                <p className="text-gray-600 mb-4">
                  Phone: +852 2345 6789
                </p>
                <p className="text-gray-600 mb-8">
                  Email: info@beautyservice.hk
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Contact Us</h3>
                    <a
                      href="mailto:info@beautyservice.hk"
                      className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors hover-glow"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg parallax-scroll h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9962673466096!2d114.15543601495994!3d22.281895985333537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007b0f81e751%3A0xa0927c1d008b2e68!2sQueen&#39;s%20Road%20Central%2C%20Central%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1647887774745!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Beauty Service HK</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

const products = [
  {
    title: 'Advanced Hydrating Serum',
    description: 'A powerful hyaluronic acid serum that deeply hydrates and plumps the skin, reducing the appearance of fine lines.',
    price: 580,
    size: '30ml',
    benefit: 'Deep hydration & Anti-aging',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80',
    isNew: true,
    bestseller: false
  },
  {
    title: 'Vitamin C Brightening Cream',
    description: 'High-potency vitamin C cream that brightens skin tone, fades dark spots, and provides powerful antioxidant protection.',
    price: 680,
    size: '50ml',
    benefit: 'Brightening & Anti-oxidant',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80',
    isNew: false,
    bestseller: true
  },
  {
    title: 'Rejuvenating Night Cream',
    description: 'Luxurious night cream with retinol and peptides that works overnight to repair and regenerate skin cells.',
    price: 880,
    size: '50ml',
    benefit: 'Repair & Regeneration',
    image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80',
    isNew: true,
    bestseller: false
  }
]

const features = [
  {
    title: 'Expert Therapists',
    description: 'Our team consists of certified and experienced beauty professionals.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: 'Premium Products',
    description: 'We use only the highest quality beauty and skincare products.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'Relaxing Environment',
    description: 'Our spa is designed to provide ultimate comfort and tranquility.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  }
] 