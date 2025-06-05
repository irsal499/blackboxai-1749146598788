'use client';

import { ArrowRight, Sparkles, Globe, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
          AI-Powered Marketing Solutions for{' '}
          <span className="text-blue-600 dark:text-blue-500">Bangladesh</span>
        </h1>
        <p className="max-w-2xl mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Transform your digital marketing with AI. Create engaging content, email campaigns, and ad copy in seconds - optimized for the Bangladeshi market.
        </p>
        <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:gap-6">
          <Link
            href="/signup"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-colors rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold transition-colors border rounded-lg text-gray-900 dark:text-white border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Everything you need for digital marketing
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Comprehensive AI tools designed specifically for the Bangladeshi market
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 mx-auto mt-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Social Media Feature */}
            <div className="flex flex-col p-6 transition-shadow border rounded-2xl border-gray-200 dark:border-gray-800 hover:shadow-lg">
              <div className="p-3 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900 w-fit">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Social Media Content</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Generate engaging posts optimized for Facebook, Instagram, and LinkedIn
              </p>
            </div>

            {/* Email Marketing Feature */}
            <div className="flex flex-col p-6 transition-shadow border rounded-2xl border-gray-200 dark:border-gray-800 hover:shadow-lg">
              <div className="p-3 mb-4 rounded-lg bg-green-100 dark:bg-green-900 w-fit">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Email Campaigns</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Create compelling email campaigns that convert
              </p>
            </div>

            {/* Ad Copy Feature */}
            <div className="flex flex-col p-6 transition-shadow border rounded-2xl border-gray-200 dark:border-gray-800 hover:shadow-lg">
              <div className="p-3 mb-4 rounded-lg bg-purple-100 dark:bg-purple-900 w-fit">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Ad Copy</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Write high-converting ad copy for your campaigns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Ready to transform your marketing?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of businesses using AI to revolutionize their digital marketing
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-colors rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Start Creating Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
