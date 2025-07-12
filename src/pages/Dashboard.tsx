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
  EyeOff,
  User,
  Bell,
  Shield,
  Globe,
  Book,
  FileText,
  Download,
  Upload,
  Calendar,
  Clock,
  Mail,
  Phone,
  Lock,
  Smartphone,
  CreditCard as CreditCardIcon,
  MapPin,
  Languages,
  Palette,
  Save,
  Camera
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
            to="/dashboard/billing"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Manage Billing
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
  const [isGenerating, setIsGenerating] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateNewKey = async () => {
    if (confirm('Are you sure you want to generate a new API key? This will invalidate your current key and may break existing integrations.')) {
      setIsGenerating(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      regenerateApiKey();
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">API Keys</h3>
          <button
            onClick={handleGenerateNewKey}
            disabled={isGenerating}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="animate-spin mr-2" size={16} />
                Generating...
              </>
            ) : (
              <>
                <Key className="mr-2" size={16} />
                Generate New Key
              </>
            )}
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white">Live API Key</h4>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title={showKey ? "Hide key" : "Show key"}
                >
                  {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <button
                  onClick={() => copyToClipboard(user?.apiKey || '')}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title="Copy to clipboard"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded font-mono text-sm">
              {showKey ? user?.apiKey : '••••••••••••••••••••••••••••••••'}
            </div>
            {copied && (
              <p className="text-green-600 text-sm mt-2 flex items-center">
                <CheckCircle size={16} className="mr-1" />
                API key copied to clipboard!
              </p>
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

function Documentation() {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const tabs = [
    { id: 'getting-started', name: 'Getting Started', icon: Book },
    { id: 'authentication', name: 'Authentication', icon: Shield },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'webhooks', name: 'Webhooks', icon: Globe },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700">
        <div className="border-b dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Documentation</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Complete guide to integrating PayAPI into your application
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="lg:w-64 border-r dark:border-gray-700 p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors text-left ${
                      activeTab === tab.id
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="mr-3" size={20} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === 'getting-started' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Getting Started</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>Welcome to PayAPI! This guide will help you integrate our payment processing API into your application.</p>
                  
                  <h4>1. Authentication</h4>
                  <p>All API requests require authentication using your API key in the Authorization header:</p>
                  
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <code>Authorization: Bearer your_api_key_here</code>
                    </div>
                    <button
                      onClick={() => copyToClipboard('Authorization: Bearer your_api_key_here', 'auth')}
                      className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                    >
                      {copiedCode === 'auth' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'authentication' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Authentication</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>PayAPI uses API keys to authenticate requests. Your API key carries many privileges, so be sure to keep it secure!</p>
                  
                  <h4>API Key Types</h4>
                  <ul>
                    <li><strong>Test keys:</strong> Start with <code>pk_test_</code> - Use for development</li>
                    <li><strong>Live keys:</strong> Start with <code>pk_live_</code> - Use in production</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payments API</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>Create and manage payments using our Payments API.</p>
                  
                  <h4>Create a Payment</h4>
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">{`curl -X POST https://api.payapi.com/v1/payments \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "customer": {
      "email": "customer@example.com"
    }
  }'`}</pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`curl -X POST https://api.payapi.com/v1/payments \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "customer": {
      "email": "customer@example.com"
    }
  }'`, 'payment')}
                      className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                    >
                      {copiedCode === 'payment' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'webhooks' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Webhooks</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>Webhooks allow PayAPI to notify your application when events occur.</p>
                  
                  <h4>Webhook Events</h4>
                  <ul>
                    <li><code>payment.succeeded</code> - Payment completed successfully</li>
                    <li><code>payment.failed</code> - Payment failed</li>
                    <li><code>payment.refunded</code> - Payment was refunded</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Billing() {
  const { user, updateSubscription } = useAuth();
  
  const plans = [
    {
      name: 'basic',
      displayName: 'Basic',
      price: 'Free',
      monthlyPrice: 0,
      apiLimit: '10,000',
      features: ['Basic payment methods', 'Email support', 'Standard documentation']
    },
    {
      name: 'pro',
      displayName: 'Professional',
      price: '$99/month',
      monthlyPrice: 99,
      apiLimit: '100,000',
      features: ['All payment methods', 'Priority support', 'Advanced analytics', 'Webhooks']
    },
    {
      name: 'enterprise',
      displayName: 'Enterprise',
      price: '$499/month',
      monthlyPrice: 499,
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
        
        <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white capitalize">
              {user?.subscription.plan} Plan
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user?.subscription.apiCalls.toLocaleString()} / {user?.subscription.apiLimit.toLocaleString()} API calls used
            </p>
            {user?.subscription.renewalDate && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Next billing: {new Date(user.subscription.renewalDate).toLocaleDateString()}
              </p>
            )}
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

        <div className="border-t dark:border-gray-700 pt-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Payment Method</h4>
          <div className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
            <div className="flex items-center">
              <CreditCardIcon className="text-gray-400 mr-3" size={24} />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/25</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Update
            </button>
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

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Billing History</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Date</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Description</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Amount</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="py-3 text-sm text-gray-900 dark:text-white">Jan 15, 2024</td>
                <td className="py-3 text-sm text-gray-900 dark:text-white">Professional Plan</td>
                <td className="py-3 text-sm text-gray-900 dark:text-white">$99.00</td>
                <td className="py-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Paid
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-700 flex items-center">
                    <Download size={16} className="mr-1" />
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: 'TechCorp Inc.',
    phone: '+234 123 456 7890',
    address: '123 Victoria Island, Lagos, Nigeria'
  });

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-6">
            <User className="text-blue-600" size={32} />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</h4>
            <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center mt-1">
              <Camera size={16} className="mr-1" />
              Change Photo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-600"
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Notifications() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    paymentAlerts: true,
    securityAlerts: true,
    marketingEmails: false,
    weeklyReports: true,
    monthlyReports: true,
    smsNotifications: false,
    pushNotifications: true
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Notification Preferences</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Mail className="mr-2" size={20} />
              Email Notifications
            </h4>
            <div className="space-y-3 ml-7">
              {[
                { key: 'emailNotifications', label: 'General email notifications', description: 'Receive important updates about your account' },
                { key: 'paymentAlerts', label: 'Payment alerts', description: 'Get notified when payments are processed' },
                { key: 'securityAlerts', label: 'Security alerts', description: 'Important security notifications' },
                { key: 'marketingEmails', label: 'Marketing emails', description: 'Product updates and promotional content' },
                { key: 'weeklyReports', label: 'Weekly reports', description: 'Summary of your weekly activity' },
                { key: 'monthlyReports', label: 'Monthly reports', description: 'Detailed monthly analytics' }
              ].map(({ key, label, description }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                  </div>
                  <button
                    onClick={() => handleToggle(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings[key as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t dark:border-gray-700 pt-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Smartphone className="mr-2" size={20} />
              Mobile Notifications
            </h4>
            <div className="space-y-3 ml-7">
              {[
                { key: 'smsNotifications', label: 'SMS notifications', description: 'Receive critical alerts via SMS' },
                { key: 'pushNotifications', label: 'Push notifications', description: 'Browser push notifications' }
              ].map(({ key, label, description }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                  </div>
                  <button
                    onClick={() => handleToggle(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings[key as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Save size={16} className="mr-2" />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

function Security() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change
    console.log('Password change submitted');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Security Settings</h3>

        <div className="space-y-8">
          {/* Change Password */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="mr-2" size={20} />
              Change Password
            </h4>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Update Password
              </button>
            </form>
          </div>

          {/* Two-Factor Authentication */}
          <div className="border-t dark:border-gray-700 pt-8">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="mr-2" size={20} />
              Two-Factor Authentication
            </h4>
            <div className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {twoFactorEnabled ? 'Two-factor authentication is enabled' : 'Two-factor authentication is disabled'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {twoFactorEnabled 
                    ? 'Your account is protected with 2FA' 
                    : 'Add an extra layer of security to your account'
                  }
                </p>
              </div>
              <button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  twoFactorEnabled
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
              </button>
            </div>
          </div>

          {/* Login Sessions */}
          <div className="border-t dark:border-gray-700 pt-8">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Active Sessions</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
                <div className="flex items-center">
                  <Globe className="text-gray-400 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Current Session</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Chrome on Windows • Lagos, Nigeria</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Preferences() {
  const [preferences, setPreferences] = useState({
    timezone: 'Africa/Lagos',
    language: 'en',
    currency: 'NGN',
    dateFormat: 'DD/MM/YYYY',
    theme: 'system'
  });

  const timezones = [
    { value: 'Africa/Lagos', label: 'Lagos (WAT)' },
    { value: 'Africa/Cairo', label: 'Cairo (EET)' },
    { value: 'Africa/Johannesburg', label: 'Johannesburg (SAST)' },
    { value: 'UTC', label: 'UTC' }
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'ar', label: 'العربية' }
  ];

  const currencies = [
    { value: 'NGN', label: 'Nigerian Naira (₦)' },
    { value: 'GHS', label: 'Ghanaian Cedi (₵)' },
    { value: 'KES', label: 'Kenyan Shilling (KSh)' },
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Preferences</h3>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <Clock className="mr-2" size={16} />
                Timezone
              </label>
              <select
                value={preferences.timezone}
                onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                {timezones.map(tz => (
                  <option key={tz.value} value={tz.value}>{tz.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <Languages className="mr-2" size={16} />
                Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                {languages.map(lang => (
                  <option key={lang.value} value={lang.value}>{lang.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <DollarSign className="mr-2" size={16} />
                Default Currency
              </label>
              <select
                value={preferences.currency}
                onChange={(e) => setPreferences({...preferences, currency: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                {currencies.map(curr => (
                  <option key={curr.value} value={curr.value}>{curr.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <Calendar className="mr-2" size={16} />
                Date Format
              </label>
              <select
                value={preferences.dateFormat}
                onChange={(e) => setPreferences({...preferences, dateFormat: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 pt-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Palette className="mr-2" size={20} />
              Appearance
            </h4>
            <div className="space-y-3">
              {[
                { value: 'light', label: 'Light mode' },
                { value: 'dark', label: 'Dark mode' },
                { value: 'system', label: 'System preference' }
              ].map(theme => (
                <label key={theme.value} className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value={theme.value}
                    checked={preferences.theme === theme.value}
                    onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                    className="mr-3 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-900 dark:text-white">{theme.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Save size={16} className="mr-2" />
            Save Preferences
          </button>
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
    { name: 'Documentation', href: '/dashboard/documentation', icon: Book },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings, submenu: [
      { name: 'Profile', href: '/dashboard/settings/profile', icon: User },
      { name: 'Notifications', href: '/dashboard/settings/notifications', icon: Bell },
      { name: 'Security', href: '/dashboard/settings/security', icon: Shield },
      { name: 'Preferences', href: '/dashboard/settings/preferences', icon: Globe }
    ]},
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/dashboard/';
    }
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Settings']);

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    );
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
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isExpanded = expandedMenus.includes(item.name);
                
                return (
                  <div key={item.name}>
                    {hasSubmenu ? (
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center">
                          <Icon className="mr-3" size={20} />
                          {item.name}
                        </div>
                        <span className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                          ▶
                        </span>
                      </button>
                    ) : (
                      <Link
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
                    )}
                    
                    {hasSubmenu && isExpanded && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu!.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                              }`}
                            >
                              <SubIcon className="mr-3" size={16} />
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/settings/profile" element={<Profile />} />
              <Route path="/settings/notifications" element={<Notifications />} />
              <Route path="/settings/security" element={<Security />} />
              <Route path="/settings/preferences" element={<Preferences />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}