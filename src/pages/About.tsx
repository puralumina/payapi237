import React from 'react';
import { 
  Award, 
  Lock, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function About() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Payment Orchestration Platform for Africa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PayAPI aggregates multiple African payment providers into one powerful API. We handle the complexity 
            of Flutterwave, Paystack, and other providers so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Problem We Solve
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                African businesses face a fragmented payment landscape. To accept payments across the continent, 
                you need separate integrations with Flutterwave, Paystack, Chipper Cash, and dozens of other providers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                PayAPI solves this by aggregating all major African payment providers behind a single, intelligent API. 
                We handle routing, optimization, failover, and compliance so you can accept payments anywhere in Africa 
                with one simple integration.
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Payment Network</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg mb-2">
                    <div className="text-lg font-bold text-blue-600">Flutterwave</div>
                  </div>
                  <div className="text-sm text-gray-600">East Africa</div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg mb-2">
                    <div className="text-lg font-bold text-green-600">Paystack</div>
                  </div>
                  <div className="text-sm text-gray-600">West Africa</div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg mb-2">
                    <div className="text-lg font-bold text-purple-600">Chipper Cash</div>
                  </div>
                  <div className="text-sm text-gray-600">Pan-African</div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg mb-2">
                    <div className="text-lg font-bold text-orange-600">+5 More</div>
                  </div>
                  <div className="text-sm text-gray-600">Growing Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To unify Africa's fragmented payment landscape through intelligent orchestration, enabling any business 
                to accept payments across the continent with a single, powerful API integration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Unified payment orchestration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Intelligent provider routing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Simplified integration complexity</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become the backbone of African digital commerce by providing the most intelligent, reliable, 
                and comprehensive payment orchestration platform that connects every business to every customer across the continent.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Leading payment orchestration platform</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">AI-powered payment optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Pan-African commerce enablement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders from across Africa driving innovation in payments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-2xl">AO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adebayo Ogundimu</h3>
              <p className="text-blue-600 mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600">
                Former VP of Engineering at Flutterwave with 15+ years in fintech across Africa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 font-bold text-2xl">KA</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kemi Adebisi</h3>
              <p className="text-blue-600 mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600">
                Former Lead Engineer at Paystack, expert in payment infrastructure and security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 font-bold text-2xl">JM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Mwangi</h3>
              <p className="text-blue-600 mb-4">Head of Operations</p>
              <p className="text-gray-600">
                Former Operations Director at M-Pesa, specializing in mobile money and cross-border payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">
                We prioritize the security of every transaction and protect our customers' data with the highest standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Obsession</h3>
              <p className="text-gray-600">
                Our customers' success is our success. We're committed to providing exceptional service and support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to solve the unique payment challenges facing African businesses.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-orange-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pan-African</h3>
              <p className="text-gray-600">
                We're building solutions that work across all African markets, fostering continental integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the payment revolution across Africa. Start processing payments with PayAPI today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}