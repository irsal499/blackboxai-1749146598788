'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Globe, LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { supabase } from '@/lib/supabaseClient';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const router = useRouter();
  
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isActive = (path: string) => pathname === path;

  const navigation = [
    { name: { en: 'Home', bn: 'হোম' }, href: '/' },
    { name: { en: 'Dashboard', bn: 'ড্যাশবোর্ড' }, href: '/dashboard' },
    { name: { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' }, href: '/social-media' },
    { name: { en: 'Email Marketing', bn: 'ইমেইল মার্কেটিং' }, href: '/email' },
    { name: { en: 'Ad Copy', bn: 'বিজ্ঞাপন কপি' }, href: '/ad-copy' },
    { name: { en: 'Pricing', bn: 'মূল্য' }, href: '/pricing' },
  ];

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-white dark:bg-black">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-black dark:text-white">
                      AI Marketing
                    </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`px-3 py-2 rounded-md text-sm font-medium ${
                            isActive(item.href)
                              ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
                              : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                          }`}
                        >
                          {item.name[language as keyof typeof item.name]}
                        </Link>
                      ))}

                      <div className="flex items-center space-x-4">
                        {/* Language Switcher */}
                        <button
                          onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                          className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'বাংলা' : 'English'}
                        </button>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Auth Buttons */}
                        {user ? (
                          <button
                            onClick={handleSignOut}
                            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                          >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                          </button>
                        ) : (
                          <Link
                            href="/login"
                            className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                          >
                            Sign In
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile menu button */}
                  <div className="flex md:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      {isMenuOpen ? (
                        <X className="w-6 h-6" />
                      ) : (
                        <Menu className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive(item.href)
                              ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
                              : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name[language as keyof typeof item.name]}
                        </Link>
                      ))}
                      
                      {/* Mobile Language Switcher */}
                      <button
                        onClick={() => {
                          setLanguage(language === 'en' ? 'bn' : 'en');
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'বাংলা' : 'English'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
              {children}
            </main>
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
