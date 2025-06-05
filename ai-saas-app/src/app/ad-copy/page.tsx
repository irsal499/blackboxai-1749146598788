'use client';

import { useState } from 'react';
import { 
  Sparkles,
  Loader2, 
  RefreshCcw, 
  Copy, 
  Check,
  Target,
  LayoutTemplate,
  Megaphone
} from 'lucide-react';
import toast from 'react-hot-toast';

type AdPlatform = 'facebook' | 'google' | 'instagram';
type AdObjective = 'awareness' | 'consideration' | 'conversion';
type AdTone = 'professional' | 'casual' | 'urgent' | 'persuasive';

interface GeneratedAd {
  headline: string;
  description: string;
  callToAction: string;
}

export default function AdCopy() {
  const [platform, setPlatform] = useState<AdPlatform>('facebook');
  const [objective, setObjective] = useState<AdObjective>('awareness');
  const [tone, setTone] = useState<AdTone>('professional');
  const [productInfo, setProductInfo] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedAd, setGeneratedAd] = useState<GeneratedAd | null>(null);
  const [copied, setCopied] = useState<string>('');

  const handleGenerate = async () => {
    if (!productInfo || !targetAudience) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    // Simulated API call - replace with actual n8n workflow call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setGeneratedAd({
        headline: "Transform Your Business with AI-Powered Marketing",
        description: "Unlock the power of AI to create engaging content that resonates with your audience. Save time and boost your marketing results with our cutting-edge tools.",
        callToAction: "Get Started Today - Special Launch Offer!"
      });
      toast.success('Ad copy generated successfully!');
    } catch (error) {
      toast.error('Failed to generate ad copy. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(''), 2000);
  };

  const handleReset = () => {
    setProductInfo('');
    setTargetAudience('');
    setGeneratedAd(null);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Controls */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ad Copy Settings
              </h2>

              {/* Platform Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value as AdPlatform)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="facebook">Facebook Ads</option>
                  <option value="google">Google Ads</option>
                  <option value="instagram">Instagram Ads</option>
                </select>
              </div>

              {/* Campaign Objective */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Campaign Objective
                </label>
                <select
                  value={objective}
                  onChange={(e) => setObjective(e.target.value as AdObjective)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="awareness">Brand Awareness</option>
                  <option value="consideration">Consideration</option>
                  <option value="conversion">Conversion</option>
                </select>
              </div>

              {/* Tone Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as AdTone)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="urgent">Urgent</option>
                  <option value="persuasive">Persuasive</option>
                </select>
              </div>

              {/* Product/Service Information */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Product/Service Information
                </label>
                <textarea
                  value={productInfo}
                  onChange={(e) => setProductInfo(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your product or service..."
                />
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Target Audience
                </label>
                <textarea
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your target audience..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Megaphone className="w-5 h-5 mr-2" />
                  )}
                  Generate
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <RefreshCcw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Output */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm min-h-[500px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Generated Ad Copy
                </h2>
              </div>

              {loading ? (
                <div className="flex items-center justify-center flex-1">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
                </div>
              ) : generatedAd ? (
                <div className="flex-1 space-y-6">
                  {/* Headline */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <LayoutTemplate className="w-4 h-4 mr-2" />
                        Headline
                      </div>
                      <button
                        onClick={() => handleCopy(generatedAd.headline, 'headline')}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        {copied === 'headline' ? (
                          <Check className="w-4 h-4 mr-1" />
                        ) : (
                          <Copy className="w-4 h-4 mr-1" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {generatedAd.headline}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Target className="w-4 h-4 mr-2" />
                        Description
                      </div>
                      <button
                        onClick={() => handleCopy(generatedAd.description, 'description')}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        {copied === 'description' ? (
                          <Check className="w-4 h-4 mr-1" />
                        ) : (
                          <Copy className="w-4 h-4 mr-1" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                      {generatedAd.description}
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Call to Action
                      </div>
                      <button
                        onClick={() => handleCopy(generatedAd.callToAction, 'cta')}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        {copied === 'cta' ? (
                          <Check className="w-4 h-4 mr-1" />
                        ) : (
                          <Copy className="w-4 h-4 mr-1" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                      {generatedAd.callToAction}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center flex-1 text-gray-500 dark:text-gray-400">
                  <Megaphone className="w-12 h-12 mb-4 opacity-50" />
                  <p>Generated ad copy will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
