import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Key, 
  CreditCard, 
  Settings, 
  Copy, 
  RefreshCw, 
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  CheckCircle,
  AlertTriangle,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function DashboardOverview() {
  const { user } = useAuth();
  
  const mockTransactions = [
    { id: '1', amount: 150.00, currency: 'USD', status: 'completed', date: '2024-01-15', merchant: 'Online Store' },
    { id: '2', amount: 75.50, currency: 'NGN', status: 'pending', date: '2024-01-14', merchant: 'Mobile App' },
    { id: '3', amount: 200.00, currency: 'GHS', status: 'completed', date: '2024-01-13', merchant: 'E-commerce' },
    { id: '4', amount: 89.99, currency: 'KES', status: 'failed', date: '2024-01-12', merchant: 'Subscription' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">API Calls</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {user?.subscription.apiCalls.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
              <Activity className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>of {user?.subscription.apiLimit.toLocaleString()} limit</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${((user?.subscription.apiCalls || 0) / (user?.subscription.apiLimit || 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$12,450</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
              <DollarSign className="text-green-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>+12.5% from last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Transactions</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1,234</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
              <CreditCard className="text-purple-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-600">
            <span>98.5% success rate</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">856</p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
              <Users className="text-orange-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-orange-600">
            <span>+5.2% this week</span>
          </div>
        </div>
      </div>

      {/* Subscription Status */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscription Status</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                {user?.subscription.plan}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                user?.subscription.status === 'active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                {user?.subscription.status}
              </span>
            </div>
            {user?.subscription.renewalDate && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Renews on {new Date(user.subscription.renewalDate).toLocaleDateString()}
              </p>
            )}
          </div>
          <Link
            to="/pricing"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upgrade Plan
          </Link>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">ID</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Amount</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Date</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Merchant</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b dark:border-gray-700">
                  <td className="py-3 text-sm text-gray-900 dark:text-white">#{transaction.id}</td>
                  <td className="py-3 text-sm text-gray-900 dark:text-white">
                    {transaction.amount} {transaction.currency}
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : transaction.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                    {transaction.merchant}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ApiKeys() {
  const { user, regenerateApiKey } = useAuth();
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerateKey = () => {
    if (confirm('Are you sure you want to regenerate your API key? This will invalidate your current key.')) {
      regenerateApiKey();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Keys</h3>
        
        <div className="space-y-4">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white">Live API Key</h4>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <button
                  onClick={() => copyToClipboard(user?.apiKey || '')}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Copy size={16} />
                </button>
                <button
                  onClick={handleRegenerateKey}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded font-mono text-sm">
              {showKey ? user?.apiKey : '••••••••••••••••••••••••••••••••'}
            </div>
            {copied && (
              <p className="text-green-600 text-sm mt-2">API key copied to clipboard!</p>
            )}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="text-blue-600 mr-2 mt-0.5" size={16} />
              <div className="text-sm text-blue-800 dark:text-blue-400">
                <p className="font-medium">Keep your API key secure</p>
                <p className="mt-1">Never share your API key publicly or commit it to version control. Use environment variables in production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Integration</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">JavaScript</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`const payapi = require('payapi-sdk');

const client = new payapi.Client('${user?.apiKey}');

// Process a payment
const payment = await client.payments.create({
  amount: 1000, // Amount in cents
  currency: 'USD',
  customer: {
    email: 'customer@example.com'
  }
});`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">cURL</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`curl -X POST https://api.payapi.com/v1/payments \\
  -H "Authorization: Bearer ${user?.apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "customer": {
      "email": "customer@example.com"
    }
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$45,231</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Volume</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1,234</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">98.5%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
            <p className="text-gray-600 dark:text-gray-400">Analytics chart would be displayed here</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Integration with charting library needed</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Payment Methods</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Credit Cards</span>
              <span className="font-medium text-gray-900 dark:text-white">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Mobile Money</span>
              <span className="font-medium text-gray-900 dark:text-white">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Bank Transfer</span>
              <span className="font-medium text-gray-900 dark:text-white">10%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Top Countries</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Nigeria</span>
              <span className="font-medium text-gray-900 dark:text-white">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Ghana</span>
              <span className="font-medium text-gray-900 dark:text-white">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Kenya</span>
              <span className="font-medium text-gray-900 dark:text-white">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Others</span>
              <span className="font-medium text-gray-900 dark:text-white">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubscriptionSettings() {
  const { user, updateSubscription } = useAuth();
  
  const plans = [
    {
      name: 'basic',
      displayName: 'Basic',
      price: 'Free',
      apiLimit: '10,000',
      features: ['Basic payment methods', 'Email support', 'Standard documentation']
    },
    {
      name: 'pro',
      displayName: 'Professional',
      price: '$99/month',
      apiLimit: '100,000',
      features: ['All payment methods', 'Priority support', 'Advanced analytics', 'Webhooks']
    },
    {
      name: 'enterprise',
      displayName: 'Enterprise',
      price: '$499/month',
      apiLimit: '1,000,000',
      features: ['Custom integrations', 'Dedicated support', 'SLA guarantee', 'White-label']
    }
  ];

  const handleUpgrade = (planName: string) => {
    if (confirm(`Upgrade to ${planName} plan?`)) {
      updateSubscription(planName);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Subscription</h3>
        
        <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white capitalize">
              {user?.subscription.plan} Plan
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user?.subscription.apiCalls.toLocaleString()} / {user?.subscription.apiLimit.toLocaleString()} API calls used
            </p>
          </div>
          <div className="text-right">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              user?.subscription.status === 'active' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }`}>
              {user?.subscription.status}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available Plans</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`border rounded-lg p-6 ${
                user?.subscription.plan === plan.name
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {plan.displayName}
                </h4>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Up to {plan.apiLimit} API calls
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {user?.subscription.plan === plan.name ? (
                <button
                  disabled
                  className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                >
                  Current Plan
                </button>
              ) : (
                <button
                  onClick={() => handleUpgrade(plan.name)}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {plan.name === 'basic' ? 'Downgrade' : 'Upgrade'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const location = useLocation();
  const { user } = useAuth();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: BarChart3 },
    { name: 'API Keys', href: '/dashboard/api-keys', icon: Key },
    { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
    { name: 'Subscription', href: '/dashboard/subscription', icon: CreditCard },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/dashboard/';
    }
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your PayAPI integration and monitor your payments
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="mr-3" size={20} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/api-keys" element={<ApiKeys />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/subscription" element={<SubscriptionSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}