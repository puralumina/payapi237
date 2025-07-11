import React from 'react';
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
  MapPin
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
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
    </div>
  );
}