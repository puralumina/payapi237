import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  CreditCard,
  Smartphone,
  Lock,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                PayAPI
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <button className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                    Sign In
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Secure Payment Gateway for 
              <span className="text-blue-600"> Websites Across Africa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Process payments securely with our robust API. Up to 1,000,000 API calls per month, 
              dedicated support, and custom integrations. Join 10,000+ businesses already using PayAPI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                View Documentation
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                99.9% Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Businesses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Processed Monthly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">African Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PayAPI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for African businesses with features that matter most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                PCI DSS compliant with end-to-end encryption. Your customers' data is always protected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Process payments in under 2 seconds with our optimized infrastructure across Africa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Currency</h3>
              <p className="text-gray-600">
                Accept payments in 15+ African currencies with automatic conversion and settlement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Payment Methods</h3>
              <p className="text-gray-600">
                Cards, mobile money, bank transfers, and digital wallets - all in one integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Optimized</h3>
              <p className="text-gray-600">
                Perfect mobile experience with support for all major mobile money providers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated African support team available around the clock in multiple languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No setup costs. Pay only for what you use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">Free</div>
                <div className="text-gray-600 mb-6">Up to 100 transactions/month</div>
                <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Get Started
                </button>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Up to 100 API calls</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Basic payment methods</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Standard documentation</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$99</div>
                <div className="text-gray-600 mb-6">Up to 10,000 transactions/month</div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Up to 10,000 API calls</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>All payment methods</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Webhook support</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">$499</div>
                <div className="text-gray-600 mb-6">Up to 1,000,000 transactions/month</div>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Contact Sales
                </button>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Up to 1,000,000 API calls</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>SLA guarantee</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>White-label options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by African Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers say about PayAPI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "PayAPI transformed our payment processing. Setup was incredibly easy and the support team is fantastic."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">AK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amara Kone</div>
                  <div className="text-gray-600 text-sm">CEO, TechStart Lagos</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The multi-currency support and mobile money integration made expanding across Africa seamless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">KM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Kwame Mensah</div>
                  <div className="text-gray-600 text-sm">Founder, EcoShop Ghana</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "99.9% uptime and lightning-fast transactions. PayAPI never lets us down during peak sales."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">FN</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fatima Ndovu</div>
                  <div className="text-gray-600 text-sm">CTO, MarketPlace Kenya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for Africa, by Africans
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                PayAPI was founded in 2020 with a simple mission: make online payments accessible 
                and secure for every African business, regardless of size or technical expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of African developers and payment experts understand the unique challenges 
                of the African market and have built solutions that work reliably across the continent.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-blue-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">ISO 27001</div>
                  <div className="text-gray-600">Certified</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="text-green-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">PCI DSS</div>
                  <div className="text-gray-600">Compliant</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="text-blue-600 mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-gray-900">300%</div>
                  <div className="text-gray-600">Growth YoY</div>
                </div>
                <div className="text-center">
                  <Users className="text-green-600 mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <Globe className="text-purple-600 mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <Shield className="text-orange-600 mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-600">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Processing Payments?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of African businesses already using PayAPI to grow their revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Our team is here to help you get started
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600">+234 800 PAYAPI (729274)</p>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600">support@payapi.africa</p>
                    <p className="text-gray-600">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                    <p className="text-gray-600">123 Victoria Island</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help you"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
                PayAPI
              </div>
              <p className="text-gray-400 mb-6">
                The secure payment gateway for websites across Africa. Process payments with confidence.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status Page</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 PayAPI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400">Made with ❤️ in Africa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;