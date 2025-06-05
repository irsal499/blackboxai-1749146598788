'use client';

import { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Loader2, 
  RefreshCcw, 
  Copy, 
  Check,
  MessageSquare
} from 'lucide-react';
import toast from 'react-hot-toast';

type Platform = 'facebook' | 'instagram' | 'linkedin';
type ContentType = 'post' | 'caption' | 'hashtags';
type ToneType = 'professional' | 'casual' | 'friendly' | 'humorous';

export default function SocialMedia() {
  const [platform, setPlatform] = useState<Platform>('facebook');
  const [contentType, setContentType] = useState<ContentType>('post');
  const [tone, setTone] = useState<ToneType>('professional');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic) {
      toast.error('Please enter a topic');
      return;
    }

    setLoading(true);
    // Simulated API call - replace with actual n8n workflow call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setGeneratedContent(
        `Here's your ${tone} ${contentType} for ${platform}:\n\n` +
        `🚀 Exciting news! We're revolutionizing the way businesses approach digital marketing in Bangladesh!\n\n` +
        `💡 Our AI-powered solutions help you create engaging content that resonates with your audience.\n\n` +
        `🎯 Whether you're a startup or an established business, we've got the tools you need to succeed.\n\n` +
        `#DigitalMarketing #Bangladesh #Innovation #AI #Marketing`
      );
      toast.success('Content generated successfully!');
    } catch (error) {
      toast.error('Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setTopic('');
    setGeneratedContent('');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Controls */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm relative">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Content Settings
              </h2>
              
              {/* Platform Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Platform
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setPlatform('facebook')}
                    className={`flex items-center justify-center p-3 rounded-lg ${
                      platform === 'facebook'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPlatform('instagram')}
                    className={`flex items-center justify-center p-3 rounded-lg ${
                      platform === 'instagram'
                        ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPlatform('linkedin')}
                    className={`flex items-center justify-center p-3 rounded-lg ${
                      platform === 'linkedin'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Content Type
                </label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value as ContentType)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="post">Post</option>
                  <option value="caption">Caption</option>
                  <option value="hashtags">Hashtags</option>
                </select>
              </div>

              {/* Tone Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as ToneType)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="humorous">Humorous</option>
                </select>
              </div>

              {/* Topic Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Topic or Description
                </label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What would you like to post about?"
                />
              </div>

              {/* Action Buttons */}
              <div className="sticky bottom-6 left-0 right-0 flex items-center gap-3 mt-6 bg-white dark:bg-gray-800 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-sm"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <MessageSquare className="w-5 h-5 mr-2" />
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
                  Generated Content
                </h2>
                {generatedContent && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 mr-1" />
                    ) : (
                      <Copy className="w-4 h-4 mr-1" />
                    )}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
              
              <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
                  </div>
                ) : generatedContent ? (
                  <pre className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-200">
                    {generatedContent}
                  </pre>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <MessageSquare className="w-12 h-12 mb-4 opacity-50" />
                    <p>Generated content will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
