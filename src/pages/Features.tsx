import React from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CreditCard,
  Smartphone,
  Lock,
  CheckCircle,
  ArrowRight,
  Code,
  BarChart3,
  Headphones
} from 'lucide-react';

export default function Features() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for African Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to process payments securely and efficiently across Africa
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600 mb-6">
                PCI DSS compliant with end-to-end encryption. Your customers' data is always protected with military-grade security.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  256-bit SSL encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  PCI DSS Level 1 compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Fraud detection & prevention
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 mb-6">
                Process payments in under 2 seconds with our optimized infrastructure across Africa.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Sub-2 second processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  99.9% uptime guarantee
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Global CDN network
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Multi-Currency</h3>
              <p className="text-gray-600 mb-6">
                Accept payments in 15+ African currencies with automatic conversion and settlement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  15+ African currencies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Real-time exchange rates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Automatic settlement
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Multiple Payment Methods</h3>
              <p className="text-gray-600 mb-6">
                Cards, mobile money, bank transfers, and digital wallets - all in one integration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Visa, Mastercard, Verve
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mobile money (MTN, Airtel)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Bank transfers & USSD
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Optimized</h3>
              <p className="text-gray-600 mb-6">
                Perfect mobile experience with support for all major mobile money providers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Responsive checkout
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mobile money integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  One-tap payments
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-6">
                Dedicated African support team available around the clock in multiple languages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  24/7 phone & chat support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Dedicated account manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features for Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scale your business with enterprise-grade features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer-Friendly API</h3>
              <p className="text-gray-600">RESTful API with comprehensive documentation and SDKs for popular languages.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BarChart3 className="text-green-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Real-time dashboards with detailed transaction analytics and reporting.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lock className="text-purple-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Webhook Support</h3>
              <p className="text-gray-600">Real-time notifications for all payment events with secure webhook delivery.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Headphones className="text-orange-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">White-label Solutions</h3>
              <p className="text-gray-600">Customize the payment experience with your brand colors and logo.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="text-red-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Management</h3>
              <p className="text-gray-600">Advanced fraud detection with machine learning and customizable rules.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Globe className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-tenant Support</h3>
              <p className="text-gray-600">Manage multiple businesses or marketplaces from a single dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why 10,000+ businesses choose PayAPI
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Start Free Trial
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}