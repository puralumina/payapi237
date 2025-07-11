import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  CreditCard,
  Smartphone,
  Lock,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Code,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              The Secure Payment Gateway for 
              <span className="text-blue-600"> African Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Process payments securely with our robust API. Up to 1,000,000 API calls per month, 
              dedicated support, and custom integrations. Join 10,000+ businesses already using PayAPI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              )}
              <Link
                to="/documentation"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                View Documentation
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Businesses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600 dark:text-gray-400">Processed Monthly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400">African Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose PayAPI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built specifically for African businesses with features that matter most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Bank-Level Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                PCI DSS compliant with end-to-end encryption. Your customers' data is always protected.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Process payments in under 2 seconds with our optimized infrastructure across Africa.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Multi-Currency</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Accept payments in 15+ African currencies with automatic conversion and settlement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Developer-Friendly API</h3>
              <p className="text-gray-600 dark:text-gray-400">
                RESTful API with comprehensive documentation and SDKs for popular programming languages.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your payments with detailed analytics and reporting dashboard.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 dark:bg-indigo-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dedicated African support team available around the clock in multiple languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by African Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See what our customers say about PayAPI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "PayAPI transformed our payment processing. Setup was incredibly easy and the support team is fantastic."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">AK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Amara Kone</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">CEO, TechStart Lagos</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "The multi-currency support and mobile money integration made expanding across Africa seamless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">KM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Kwame Mensah</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Founder, EcoShop Ghana</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "99.9% uptime and lightning-fast transactions. PayAPI never lets us down during peak sales."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">FN</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Fatima Ndovu</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">CTO, MarketPlace Kenya</div>
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
            {user ? (
              <Link
                to="/dashboard"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </Link>
            )}
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}