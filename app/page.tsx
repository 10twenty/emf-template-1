import Image from 'next/image'
import Navbar from './components/Navbar'
import ScrollAnimation from './components/ScrollAnimation'
import ProductCard from './components/ProductCard'
import CountUp from './components/CountUp'
import ProductSection from './components/ProductSection'
import ScrollButton from './components/ScrollButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollAnimation />
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Main Image Layer */}
        <div className="hero-slide">
          <Image
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80"
            alt="Spa atmosphere"
            fill
            className="hero-image object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>

        {/* Particle Effect Layer */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* Light Rays Layer */}
        <div className="light-rays" />

        {/* Content Layer */}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container">
            <div className="max-w-4xl mx-auto hero-content">
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-serif text-white mb-8">
                Beauty Service HK
              </h1>
              <p className="hero-description text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Experience luxury beauty treatments in the heart of Hong Kong
              </p>
              <ScrollButton
                targetId="services"
                className="hero-button relative inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-medium group overflow-hidden hover-glow-intense"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Learn More</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </ScrollButton>
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

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary),0.05),transparent_50%)]"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(var(--color-primary),0.05),transparent_50%)]"></div>
        </div>

        <div className="container relative">
          <div className="max-w-7xl mx-auto">
            {/* Main content */}
            <div className="relative">
              {/* Heading with animated line */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">About Us</h2>
                <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
                  Founded in 2020, Beauty Service HK has been providing premium beauty and wellness services
                  in the heart of Hong Kong. Our team of experienced professionals is dedicated to helping
                  you look and feel your best.
                </p>
              </div>

              {/* Features in magazine layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Left column */}
                <div className="space-y-16 md:space-y-24">
                  <div className="relative slide-in-left group">
                    <div className="flex items-start gap-8">
                      {/* Icon container with enhanced animation */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <div className="text-primary transform group-hover:scale-125 transition-all duration-500">
                            {features[0].icon}
                          </div>
                        </div>
                        <div className="absolute -inset-2 border border-primary/10 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                      </div>
                      
                      {/* Content with enhanced typography */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {features[0].title}
                          <div className="h-px w-12 bg-primary/30 mt-2 group-hover:w-full transition-all duration-700"></div>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{features[0].description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative slide-in-left delay-300 group">
                    <div className="flex items-start gap-8">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <div className="text-primary transform group-hover:scale-125 transition-all duration-500">
                            {features[1].icon}
                          </div>
                        </div>
                        <div className="absolute -inset-2 border border-primary/10 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {features[1].title}
                          <div className="h-px w-12 bg-primary/30 mt-2 group-hover:w-full transition-all duration-700"></div>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{features[1].description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column with offset */}
                <div className="space-y-16 md:space-y-24 md:mt-32">
                  <div className="relative slide-in-right group">
                    <div className="flex items-start gap-8">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <div className="text-primary transform group-hover:scale-125 transition-all duration-500">
                            {features[2].icon}
                          </div>
                        </div>
                        <div className="absolute -inset-2 border border-primary/10 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {features[2].title}
                          <div className="h-px w-12 bg-primary/30 mt-2 group-hover:w-full transition-all duration-700"></div>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{features[2].description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative quote with enhanced styling */}
                  <div className="relative pl-8 slide-in-right delay-300 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500"></div>
                    <blockquote className="text-2xl font-serif text-primary/80 italic group-hover:text-primary transition-colors duration-500">
                      "Experience the epitome of luxury and wellness"
                      <div className="h-px w-24 bg-primary/20 mt-4 group-hover:w-full transition-all duration-700"></div>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-12 w-24 h-24 border border-primary/10 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/4 -right-12 w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">Why Choose Us</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
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
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Expert Therapists</h3>
                <p className="text-gray-600 leading-relaxed">Our certified professionals bring years of experience and expertise to every treatment.</p>
              </div>
            </div>

            <div className="slide-in-up stagger-3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4 rotate-in">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Luxury Experience</h3>
                <p className="text-gray-600 leading-relaxed">Immerse yourself in an atmosphere of pure luxury and relaxation in our premium facilities.</p>
              </div>
            </div>

            <div className="slide-in-right stagger-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4 rotate-in">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed">Every treatment is tailored to your unique needs and preferences for optimal results.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 transform -skew-y-6"></div>
            <div className="container relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mt-16">
                {/* Happy Clients */}
                <div className="scale-fade stagger-2 group flex flex-col items-center">
                  <div className="text-5xl font-serif text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                    <CountUp end={1000} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium text-lg">Happy Clients</p>
                  <div className="w-16 h-1 bg-primary/30 mt-3 rounded-full transition-all duration-300 group-hover:w-24 group-hover:bg-primary"></div>
                </div>

                {/* Years Experience */}
                <div className="scale-fade stagger-3 group flex flex-col items-center">
                  <div className="text-5xl font-serif text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                    <CountUp end={10} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium text-lg">Years Experience</p>
                  <div className="w-16 h-1 bg-primary/30 mt-3 rounded-full transition-all duration-300 group-hover:w-24 group-hover:bg-primary"></div>
                </div>

                {/* Products */}
                <div className="scale-fade stagger-4 group flex flex-col items-center">
                  <div className="text-5xl font-serif text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                    <CountUp end={50} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium text-lg">Products</p>
                  <div className="w-16 h-1 bg-primary/30 mt-3 rounded-full transition-all duration-300 group-hover:w-24 group-hover:bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">Words from Our Clients</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              The trust and satisfaction of our clients is our greatest achievement
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Review 1 */}
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="bg-white rounded-xl p-8 shadow-sm relative transform transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="flex flex-col">
                        <h3 className="font-serif text-xl mb-1">Sarah Chen</h3>
                        <p className="text-primary/80 text-sm font-medium">Regular Client</p>
                        <p className="text-gray-400 text-sm">Since 2021</p>
                      </div>
                    </div>
                    <svg className="text-primary/10 w-16 h-16 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                      The Advanced Hydrating Serum has completely transformed my skincare routine. My skin feels incredibly moisturized and looks visibly younger. The spa experience was absolutely luxurious.
                    </blockquote>
                    <div className="flex text-primary space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="bg-white rounded-xl p-8 shadow-sm relative transform transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="flex flex-col">
                        <h3 className="font-serif text-xl mb-1">Michelle Wong</h3>
                        <p className="text-primary/80 text-sm font-medium">VIP Member</p>
                        <p className="text-gray-400 text-sm">Since 2022</p>
                      </div>
                    </div>
                    <svg className="text-primary/10 w-16 h-16 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                      I've tried many luxury spas in Hong Kong, but Beauty Service HK stands out. The Vitamin C Brightening Cream has given my skin a natural glow, and their facial treatments are pure bliss.
                    </blockquote>
                    <div className="flex text-primary space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">Connect With Us</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              We'd love to hear from you. Visit our spa or get in touch for inquiries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-6">
                {/* Location Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">123 Beauty Street, Central</p>
                      <p className="text-gray-600">Hong Kong</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-gray-900">Email Us</h3>
                      <a 
                        href="mailto:info@beautyservice.hk" 
                        className="text-gray-600 hover:text-primary transition-colors group inline-flex items-center"
                      >
                        info@beautyservice.hk
                        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-gray-900">Call Us</h3>
                      <p className="text-gray-600">+852 1234 5678</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-center md:text-left">
                  <a
                    href="mailto:info@beautyservice.hk"
                    className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg group"
                  >
                    <span>Contact Now</span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
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
            <span className="ml-2 text-gray-600">TLS_1.4</span>
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