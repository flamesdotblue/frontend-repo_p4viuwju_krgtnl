import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, LogIn, ArrowLeft } from 'lucide-react';

export default function Auth({ mode = 'login', onBack, onSwitch, onSuccess }) {
  const [current, setCurrent] = useState(mode);

  const isLogin = current === 'login';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock success then go to dashboard preview
    onSuccess?.();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-300/50 via-purple-300/50 to-cyan-300/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-purple-300/40 via-indigo-300/40 to-blue-300/40 blur-3xl" />

      <button onClick={onBack} className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm hover:bg-white">
        <ArrowLeft size={16} /> Back
      </button>

      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
          <h1 className="mt-4 text-2xl font-bold">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
          <p className="mt-1 text-sm text-gray-600">{isLogin ? 'Log in to continue sending smarter campaigns.' : 'Sign up to start automating your email growth.'}</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-lg backdrop-blur">
          <button
            onClick={handleSubmit}
            className="w-full rounded-full bg-gray-900 py-2.5 text-white hover:bg-black flex items-center justify-center gap-2"
          >
            <LogIn size={18} /> Continue with Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-gray-500">
            <div className="h-px flex-1 bg-gray-200" />
            <span>or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.form
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {!isLogin && (
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 pl-10 outline-none ring-0 focus:border-indigo-400 focus:bg-white transition"
                  />
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              )}
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 pl-10 outline-none ring-0 focus:border-indigo-400 focus:bg-white transition"
                />
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 pl-10 outline-none ring-0 focus:border-indigo-400 focus:bg-white transition"
                />
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-2.5 font-medium text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all"
              >
                {isLogin ? 'Log In' : 'Create Account'}
              </button>
            </motion.form>
          </AnimatePresence>

          <div className="mt-4 text-center text-sm text-gray-600">
            {isLogin ? 'New to MailPilot?' : 'Already have an account?'}{' '}
            <button
              onClick={() => {
                const next = isLogin ? 'signup' : 'login';
                setCurrent(next);
                onSwitch?.(next);
              }}
              className="text-indigo-600 hover:text-indigo-700"
            >
              {isLogin ? 'Create an account' : 'Log in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
