'use client';

import { useState } from 'react';
import { Check, Sparkles, Zap, Star } from 'lucide-react';
import Link from 'next/link';

type BillingPeriod = 'monthly' | 'yearly';

interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  icon: any;
  popular?: boolean;
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: {
        monthly: 1499,
        yearly: 14990,
      },
      description: 'Perfect for small businesses just getting started',
      features: [
        '50 AI content generations per month',
        'Social media post generator',
        'Basic email templates',
        'Standard support',
        'Access to basic features'
      ],
      icon: Sparkles
    },
    {
      name: 'Professional',
      price: {
        monthly: 2999,
        yearly: 29990,
      },
      description: 'Ideal for growing businesses',
      features: [
        '200 AI content generations per month',
        'All social media tools',
        'Advanced email campaigns',
        'Ad copy generator',
        'Priority support',
        'Advanced analytics',
        'Custom templates'
      ],
      icon: Star,
      popular: true
    },
    {
      name: 'Enterprise',
      price: {
        monthly: 5999,
        yearly: 59990,
      },
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited AI content generations',
        'All Pro features',
        'Custom AI model training',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'Enterprise analytics',
        '24/7 priority support'
      ],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Choose the perfect plan for your business
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                billingPeriod === 'monthly'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                billingPeriod === 'yearly'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Yearly billing
              <span className="ml-2 text-xs text-green-600 dark:text-green-400">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-shadow hover:shadow-lg ${
                tier.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <tier.icon className="w-6 h-6 text-blue-500" />
                </div>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {tier.description}
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ৳{billingPeriod === 'monthly' ? tier.price.monthly : tier.price.yearly}
                    </span>
                    <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                      /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/signup"
                    className={`block w-full px-6 py-3 text-center rounded-lg text-sm font-medium transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, bKash, Nagad, and bank transfers for enterprise customers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can try our service for 7 days with full access to all features before committing to a paid plan.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
