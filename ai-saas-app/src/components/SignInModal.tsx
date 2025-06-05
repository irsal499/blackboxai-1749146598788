'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Modal from './Modal';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

export default function SignInModal({ isOpen, onClose, onSwitchToSignUp }: SignInModalProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Successfully logged in!');
        onClose();
        // Optionally refresh or redirect handled by parent
      }
    } catch (error) {
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sign in to your account</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? <Loader2 className="mx-auto animate-spin" /> : 'Sign In'}
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        Don't have an account?{' '}
        <button
          onClick={() => {
            onClose();
            onSwitchToSignUp();
          }}
          className="text-blue-600 hover:underline"
        >
          Register here
        </button>
      </p>
    </Modal>
  );
}
