'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  Mail, 
  Sparkles, 
  BarChart, 
  Clock, 
  Zap,
  Plus
} from 'lucide-react';

export default function Dashboard() {
  const [recentProjects] = useState([
    {
      id: 1,
      type: 'social',
      title: 'Summer Campaign Posts',
      date: '2 hours ago',
      platform: 'Facebook'
    },
    {
      id: 2,
      type: 'email',
      title: 'Newsletter Campaign',
      date: '1 day ago',
      platform: 'Email'
    },
    {
      id: 3,
      type: 'ad',
      title: 'Product Launch Ads',
      date: '2 days ago',
      platform: 'Google Ads'
    }
  ]);

  const tools = [
    {
      name: 'Social Media Content',
      description: 'Create engaging posts for social platforms',
      icon: MessageSquare,
      href: '/social-media',
      color: 'bg-blue-500'
    },
    {
      name: 'Email Campaigns',
      description: 'Design compelling email marketing campaigns',
      icon: Mail,
      href: '/email',
      color: 'bg-green-500'
    },
    {
      name: 'Ad Copy Generator',
      description: 'Generate high-converting ad copy',
      icon: Sparkles,
      href: '/ad-copy',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Here's what's happening with your marketing projects
            </p>
          </div>
          <Link
            href="/new-project"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Projects
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  12
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Time Saved
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  48hrs
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Content Generated
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  156
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Marketing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-2 ${tool.color} rounded-lg w-fit`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {tool.name}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Projects
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {project.platform} • {project.date}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {project.type === 'social' && (
                        <MessageSquare className="w-5 h-5 text-blue-500" />
                      )}
                      {project.type === 'email' && (
                        <Mail className="w-5 h-5 text-green-500" />
                      )}
                      {project.type === 'ad' && (
                        <Sparkles className="w-5 h-5 text-purple-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
