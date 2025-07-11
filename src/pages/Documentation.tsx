import React, { useState } from 'react';
import { Code, Copy, CheckCircle, Book, Zap, Shield, Globe } from 'lucide-react';

export default function Documentation() {
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
    { id: 'payments', name: 'Payments', icon: Zap },
    { id: 'webhooks', name: 'Webhooks', icon: Globe },
  ];

  const codeExamples = {
    javascript: `const payapi = require('payapi-sdk');

const client = new payapi.Client('your_api_key_here');

// Create a payment
const payment = await client.payments.create({
  amount: 1000, // Amount in cents
  currency: 'USD',
  customer: {
    email: 'customer@example.com',
    name: 'John Doe'
  },
  description: 'Payment for order #123'
});

console.log('Payment created:', payment.id);`,

    python: `import payapi

client = payapi.Client('your_api_key_here')

# Create a payment
payment = client.payments.create(
    amount=1000,  # Amount in cents
    currency='USD',
    customer={
        'email': 'customer@example.com',
        'name': 'John Doe'
    },
    description='Payment for order #123'
)

print(f'Payment created: {payment.id}')`,

    php: `<?php
require_once 'vendor/autoload.php';

$client = new PayAPI\\Client('your_api_key_here');

// Create a payment
$payment = $client->payments->create([
    'amount' => 1000, // Amount in cents
    'currency' => 'USD',
    'customer' => [
        'email' => 'customer@example.com',
        'name' => 'John Doe'
    ],
    'description' => 'Payment for order #123'
]);

echo 'Payment created: ' . $payment->id;`,

    curl: `curl -X POST https://api.payapi.com/v1/payments \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "customer": {
      "email": "customer@example.com",
      "name": "John Doe"
    },
    "description": "Payment for order #123"
  }'`
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Complete guide to integrating PayAPI into your application. Process payments securely across Africa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2 sticky top-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors text-left ${
                      activeTab === tab.id
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="mr-3" size={20} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700">
              {activeTab === 'getting-started' && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Getting Started</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Get Your API Key</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Sign up for a PayAPI account and get your API key from the dashboard.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <div className="flex items-start">
                          <Shield className="text-blue-600 mr-2 mt-0.5" size={16} />
                          <div className="text-sm text-blue-800 dark:text-blue-400">
                            <p className="font-medium">Keep your API key secure</p>
                            <p className="mt-1">Never expose your API key in client-side code or public repositories.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Install SDK</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Install the PayAPI SDK for your preferred programming language:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Node.js</h4>
                          <div className="relative">
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                              <code>npm install payapi-sdk</code>
                            </div>
                            <button
                              onClick={() => copyToClipboard('npm install payapi-sdk', 'npm')}
                              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                            >
                              {copiedCode === 'npm' ? <CheckCircle size={16} /> : <Copy size={16} />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Python</h4>
                          <div className="relative">
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                              <code>pip install payapi-python</code>
                            </div>
                            <button
                              onClick={() => copyToClipboard('pip install payapi-python', 'pip')}
                              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                            >
                              {copiedCode === 'pip' ? <CheckCircle size={16} /> : <Copy size={16} />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">PHP</h4>
                          <div className="relative">
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                              <code>composer require payapi/payapi-php</code>
                            </div>
                            <button
                              onClick={() => copyToClipboard('composer require payapi/payapi-php', 'composer')}
                              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                            >
                              {copiedCode === 'composer' ? <CheckCircle size={16} /> : <Copy size={16} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Make Your First Payment</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Here's a simple example to create your first payment:
                      </p>
                      
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">{codeExamples.javascript}</pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(codeExamples.javascript, 'first-payment')}
                          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                        >
                          {copiedCode === 'first-payment' ? <CheckCircle size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'authentication' && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">API Key Authentication</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        PayAPI uses API keys to authenticate requests. Include your API key in the Authorization header:
                      </p>
                      
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                          <code>Authorization: Bearer your_api_key_here</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard('Authorization: Bearer your_api_key_here', 'auth-header')}
                          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                        >
                          {copiedCode === 'auth-header' ? <CheckCircle size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Test vs Live Keys</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Test Keys</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Start with <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">pk_test_</code>
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Use for development and testing. No real money is processed.
                          </p>
                        </div>
                        <div className="border dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Live Keys</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Start with <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">pk_live_</code>
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Use in production. Real money is processed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'payments' && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payments API</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Create Payment</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Create a new payment with the following endpoint:
                      </p>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                        <code className="text-green-800 dark:text-green-400 font-medium">
                          POST https://api.payapi.com/v1/payments
                        </code>
                      </div>

                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Request Parameters</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border dark:border-gray-700 rounded-lg">
                          <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                              <th className="text-left p-3 font-medium text-gray-900 dark:text-white">Parameter</th>
                              <th className="text-left p-3 font-medium text-gray-900 dark:text-white">Type</th>
                              <th className="text-left p-3 font-medium text-gray-900 dark:text-white">Required</th>
                              <th className="text-left p-3 font-medium text-gray-900 dark:text-white">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t dark:border-gray-700">
                              <td className="p-3 font-mono text-sm">amount</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">integer</td>
                              <td className="p-3 text-sm text-red-600">required</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">Amount in cents</td>
                            </tr>
                            <tr className="border-t dark:border-gray-700">
                              <td className="p-3 font-mono text-sm">currency</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">string</td>
                              <td className="p-3 text-sm text-red-600">required</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">3-letter currency code</td>
                            </tr>
                            <tr className="border-t dark:border-gray-700">
                              <td className="p-3 font-mono text-sm">customer</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">object</td>
                              <td className="p-3 text-sm text-red-600">required</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">Customer information</td>
                            </tr>
                            <tr className="border-t dark:border-gray-700">
                              <td className="p-3 font-mono text-sm">description</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">string</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">optional</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">Payment description</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Code Examples</h4>
                      <div className="space-y-4">
                        {Object.entries(codeExamples).map(([language, code]) => (
                          <div key={language}>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2 capitalize">
                              {language === 'curl' ? 'cURL' : language}
                            </h5>
                            <div className="relative">
                              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                <pre className="text-sm">{code}</pre>
                              </div>
                              <button
                                onClick={() => copyToClipboard(code, `payment-${language}`)}
                                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                              >
                                {copiedCode === `payment-${language}` ? <CheckCircle size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'webhooks' && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Webhooks</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What are Webhooks?</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Webhooks allow PayAPI to notify your application when events occur, such as successful payments or failed transactions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Setting up Webhooks</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Create an endpoint in your application to receive webhook events</li>
                        <li>Add your webhook URL in the PayAPI dashboard</li>
                        <li>Verify webhook signatures for security</li>
                        <li>Handle events in your application</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Webhook Events</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">payment.succeeded</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sent when a payment is successfully processed
                          </p>
                        </div>
                        <div className="border dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">payment.failed</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sent when a payment fails to process
                          </p>
                        </div>
                        <div className="border dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">payment.refunded</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sent when a payment is refunded
                          </p>
                        </div>
                        <div className="border dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">customer.created</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sent when a new customer is created
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Example Webhook Handler</h3>
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm">{`const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.raw({ type: 'application/json' }));

app.post('/webhook', (req, res) => {
  const signature = req.headers['payapi-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(400).send('Invalid signature');
  }
  
  const event = JSON.parse(payload);
  
  // Handle the event
  switch (event.type) {
    case 'payment.succeeded':
      console.log('Payment succeeded:', event.data);
      // Update your database, send confirmation email, etc.
      break;
    case 'payment.failed':
      console.log('Payment failed:', event.data);
      // Handle failed payment
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }
  
  res.status(200).send('OK');
});

app.listen(3000);`}</pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(`const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.raw({ type: 'application/json' }));

app.post('/webhook', (req, res) => {
  const signature = req.headers['payapi-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(400).send('Invalid signature');
  }
  
  const event = JSON.parse(payload);
  
  // Handle the event
  switch (event.type) {
    case 'payment.succeeded':
      console.log('Payment succeeded:', event.data);
      // Update your database, send confirmation email, etc.
      break;
    case 'payment.failed':
      console.log('Payment failed:', event.data);
      // Handle failed payment
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }
  
  res.status(200).send('OK');
});

app.listen(3000);`, 'webhook-handler')}
                          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                        >
                          {copiedCode === 'webhook-handler' ? <CheckCircle size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}