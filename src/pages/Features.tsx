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
            Payment Orchestration Features for African Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced features that aggregate multiple payment providers into one intelligent gateway
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intelligent Payment Routing</h3>
              <p className="text-gray-600 mb-6">
                Our AI automatically routes payments to the optimal provider based on currency, country, success rates, 
                and fees. Flutterwave for KES, Paystack for NGN, optimized for each transaction.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Real-time provider selection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Success rate optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Automatic failover protection
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Single API Integration</h3>
              <p className="text-gray-600 mb-6">
                Replace complex integrations with multiple providers with one simple API. Reduce development 
                time from months to days while accessing the entire African payment ecosystem.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  RESTful API design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Comprehensive SDKs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Detailed documentation
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Bank-level security with comprehensive KYC/AML compliance. We handle regulatory requirements 
                across all African markets so you can focus on your business growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  PCI DSS Level 1 compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Automated KYC/AML checks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Multi-jurisdiction compliance
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Smart Optimization & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Machine learning algorithms continuously optimize routing decisions. Get detailed analytics 
                across all providers with unified reporting and performance insights.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  ML-powered optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Unified analytics dashboard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Performance benchmarking
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Universal Payment Methods</h3>
              <p className="text-gray-600 mb-6">
                Access all payment methods across Africa through one integration. Cards, mobile money, 
                bank transfers, and digital wallets from every major provider.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Cards (Visa, Mastercard, Verve)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mobile money (MTN, Airtel, Safaricom)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Bank transfers & USSD
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unified Settlement & Reconciliation</h3>
              <p className="text-gray-600 mb-6">
                Consolidated payouts from all providers with simplified reconciliation. Reduce operational 
                complexity and improve cash flow management across your entire payment ecosystem.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Consolidated settlements
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Automated reconciliation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Real-time balance tracking
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
              Enterprise Payment Orchestration Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities for businesses scaling across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TrendingUp className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Provider Switching</h3>
              <p className="text-gray-600">Automatically switch providers based on real-time performance, downtime, or cost optimization.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Globe className="text-green-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Border Optimization</h3>
              <p className="text-gray-600">Intelligent routing for cross-border payments with automatic currency conversion and compliance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BarChart3 className="text-purple-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Provider Performance Analytics</h3>
              <p className="text-gray-600">Detailed insights into each provider's performance, success rates, and cost analysis.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lock className="text-orange-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Fraud Detection</h3>
              <p className="text-gray-600">Multi-layer fraud detection combining signals from all providers for enhanced security.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Smartphone className="text-red-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unified Webhook Management</h3>
              <p className="text-gray-600">Consolidated webhooks from all providers with intelligent retry logic and delivery guarantees.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Merchant Management</h3>
              <p className="text-gray-600">Manage multiple sub-merchants with individual KYC, settlement, and reporting capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Payment Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our payment orchestration platform to scale across Africa
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Start Integration Today
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}