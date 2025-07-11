import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Pricing() {
  const { user, updateSubscription } = useAuth();

  const plans = [
    {
      name: 'basic',
      displayName: 'Basic',
      price: 'Free',
      monthlyPrice: 0,
      apiLimit: '10,000',
      features: [
        'Up to 10,000 API calls',
        'Basic payment methods',
        'Email support',
        'Standard documentation',
        'Basic analytics',
        'Webhook support'
      ]
    },
    {
      name: 'pro',
      displayName: 'Professional',
      price: '$99',
      monthlyPrice: 99,
      apiLimit: '100,000',
      features: [
        'Up to 100,000 API calls',
        'All payment methods',
        'Priority support',
        'Advanced analytics',
        'Webhook support',
        'Multi-currency support',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'enterprise',
      displayName: 'Enterprise',
      price: '$499',
      monthlyPrice: 499,
      apiLimit: '1,000,000',
      features: [
        'Up to 1,000,000 API calls',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'White-label options',
        'Priority phone support',
        'Custom reporting'
      ]
    }
  ];

  const handleSelectPlan = (planName: string) => {
    if (user) {
      updateSubscription(planName);
    }
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No hidden fees. No setup costs. Pay only for what you use. Choose the plan that fits your business needs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative border-2 rounded-xl p-8 transition-all hover:shadow-lg ${
                  plan.popular
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.displayName}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {plan.price}
                  </div>
                  {plan.monthlyPrice > 0 && (
                    <div className="text-gray-600 dark:text-gray-400">/month</div>
                  )}
                  <div className="text-gray-600 dark:text-gray-400 mb-6">
                    Up to {plan.apiLimit} API calls/month
                  </div>
                  
                  {user ? (
                    <button
                      onClick={() => handleSelectPlan(plan.name)}
                      disabled={user.subscription.plan === plan.name}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        user.subscription.plan === plan.name
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                          : plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600'
                      }`}
                    >
                      {user.subscription.plan === plan.name ? 'Current Plan' : 'Select Plan'}
                    </button>
                  ) : (
                    <Link
                      to="/register"
                      className={`block w-full py-3 rounded-lg font-semibold transition-colors text-center ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600'
                      }`}
                    >
                      Get Started
                    </Link>
                  )}
                </div>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What happens if I exceed my plan limits?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We'll notify you when you're approaching your limits. You can upgrade your plan anytime or pay for additional transactions at standard rates.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing accordingly.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer custom enterprise solutions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! For large enterprises with specific needs, we offer custom solutions with dedicated infrastructure and support.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What payment methods do you accept for subscriptions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, bank transfers, and mobile money payments for subscription billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of African businesses already using PayAPI to process payments securely
          </p>
          {user ? (
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Go to Dashboard
              <ArrowRight className="ml-2" size={20} />
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}