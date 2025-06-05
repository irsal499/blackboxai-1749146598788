'use client';

import { useState } from 'react';
import { 
  Mail,
  Loader2, 
  RefreshCcw, 
  Copy, 
  Check,
  Send,
  Type,
  ListChecks
} from 'lucide-react';
import toast from 'react-hot-toast';

type EmailType = 'newsletter' | 'promotional' | 'announcement' | 'follow-up';
type ToneType = 'professional' | 'friendly' | 'persuasive' | 'urgent';

export default function EmailMarketing() {
  const [emailType, setEmailType] = useState<EmailType>('newsletter');
  const [tone, setTone] = useState<ToneType>('professional');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState({
    subject: '',
    body: ''
  });
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!subject || !description) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    // Simulated API call - replace with actual n8n workflow call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setGeneratedEmail({
        subject: `${subject} - Special Offer Inside!`,
        body: `Dear Valued Customer,

We hope this email finds you well. We're excited to share some amazing news with you!

${description}

Key Benefits:
• Increased engagement with your target audience
• Better conversion rates
• Time and cost savings
• Professional content that resonates

Don't miss out on this opportunity to transform your business.

Best regards,
Your Company Name`
      });
      toast.success('Email content generated successfully!');
    } catch (error) {
      toast.error('Failed to generate email content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubject('');
    setDescription('');
    setGeneratedEmail({ subject: '', body: '' });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Controls */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Email Campaign Settings
              </h2>

              {/* Email Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Type
                </label>
                <select
                  value={emailType}
                  onChange={(e) => setEmailType(e.target.value as EmailType)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newsletter">Newsletter</option>
                  <option value="promotional">Promotional</option>
                  <option value="announcement">Announcement</option>
                  <option value="follow-up">Follow-up</option>
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
                  <option value="friendly">Friendly</option>
                  <option value="persuasive">Persuasive</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              {/* Subject Line */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email subject"
                />
              </div>

              {/* Email Content Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Content Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What would you like to communicate?"
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
                    <Send className="w-5 h-5 mr-2" />
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
                  Generated Email
                </h2>
              </div>

              {loading ? (
                <div className="flex items-center justify-center flex-1">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
                </div>
              ) : generatedEmail.subject || generatedEmail.body ? (
                <div className="flex-1 space-y-4">
                  {/* Subject Line Output */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Type className="w-4 h-4 mr-2" />
                        Subject Line
                      </div>
                      <button
                        onClick={() => handleCopy(generatedEmail.subject)}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 mr-1" />
                        ) : (
                          <Copy className="w-4 h-4 mr-1" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                      {generatedEmail.subject}
                    </p>
                  </div>

                  {/* Email Body Output */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Body
                      </div>
                      <button
                        onClick={() => handleCopy(generatedEmail.body)}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 mr-1" />
                        ) : (
                          <Copy className="w-4 h-4 mr-1" />
                        )}
                      </button>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-200">
                      {generatedEmail.body}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center flex-1 text-gray-500 dark:text-gray-400">
                  <Mail className="w-12 h-12 mb-4 opacity-50" />
                  <p>Generated email content will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
