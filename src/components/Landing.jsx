import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Brain, BarChart3, Plug, ArrowRight, Star } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Smart Campaign Scheduling',
    desc: 'Auto-send at the best time for each audience segment to maximize open and click rates.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Personalization',
    desc: 'Dynamic copy and subject lines tailored to every recipient for higher conversions.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    desc: 'Live dashboards for opens, clicks, and revenue attribution — updated instantly.'
  },
  {
    icon: Plug,
    title: 'Seamless Integrations',
    desc: 'Connect your CRM, store, and data warehouse in minutes with native connectors.'
  }
];

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Head of Growth, Northwind',
    quote:
      'MailPilot helped us increase campaign revenue by 32% in the first month. The UI is delightful and the AI subject lines are magic.',
    stars: 5
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, Peak Studio',
    quote:
      'We launched with MailPilot and never looked back. The real-time analytics let our team iterate in hours, not weeks.',
    stars: 5
  },
  {
    name: 'Sofia Ramirez',
    role: 'CMO, Aurora Store',
    quote:
      'The best email platform we’ve used. The scheduling and personalization just work — and our customers feel it.',
    stars: 5
  }
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#eab308" className="text-yellow-500" />
      ))}
    </div>
  );
}

export default function Landing({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex]);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
            <span className="font-semibold text-lg">MailPilot</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Social Proof</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('login')} className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">Log in</button>
            <button onClick={() => onNavigate('signup')} className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-indigo-300/40 via-purple-300/40 to-cyan-300/40 blur-3xl" />
          <div className="absolute -bottom-24 left-[-10%] h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-purple-300/30 via-indigo-300/30 to-blue-300/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Automate Your Emails, Grow Your Business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-5 text-lg text-gray-600"
            >
              MailPilot helps you send smarter, personalized campaigns that convert.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={() => onNavigate('signup')} className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-medium shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </button>
              <button onClick={() => onNavigate('login')} className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-gray-200 bg-white/70 hover:bg-white text-gray-800 font-medium transition-colors">
                Book a Demo
              </button>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Stars count={5} /><span>Trusted by 2k+ teams</span></div>
              <div>GDPR & SOC2 Ready</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white/40 border border-white/50 shadow-xl shadow-indigo-500/10">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 text-white flex items-center justify-center shadow-sm">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + Pricing */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Testimonials */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">What customers say</h3>
                <Stars />
              </div>
              <div className="mt-6 relative h-40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <p className="text-gray-700 text-lg leading-relaxed">“{activeTestimonial.quote}”</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="font-medium text-gray-800">{activeTestimonial.name}</span> • {activeTestimonial.role}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full ${i === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'} transition-colors`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div id="pricing" className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-indigo-600">Starter</div>
                <div className="mt-2 text-4xl font-extrabold">$19<span className="text-base font-medium text-gray-500">/mo</span></div>
                <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Up to 5k contacts</li>
                  <li>Basic automation</li>
                  <li>Email support</li>
                </ul>
                <button onClick={() => onNavigate('signup')} className="mt-6 w-full rounded-full bg-gray-900 text-white py-2.5 hover:bg-black transition-colors">Choose Starter</button>
              </div>
              <div className="rounded-2xl border-2 border-indigo-600 bg-gradient-to-br from-indigo-600 to-purple-600 p-[2px] shadow-sm">
                <div className="h-full w-full rounded-2xl bg-white p-6">
                  <div className="text-sm font-medium text-indigo-600">Growth</div>
                  <div className="mt-2 text-4xl font-extrabold">$49<span className="text-base font-medium text-gray-500">/mo</span></div>
                  <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>Up to 50k contacts</li>
                    <li>Advanced automation</li>
                    <li>AI personalization</li>
                    <li>Priority support</li>
                  </ul>
                  <button onClick={() => onNavigate('signup')} className="mt-6 w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-2.5 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all">Choose Growth</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
              <span className="font-semibold text-gray-900">MailPilot</span>
            </div>
            <p className="mt-3">Send smarter, personalized campaigns that delight your customers.</p>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Product</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-600">Pricing</a></li>
              <li><button onClick={() => onNavigate('dashboard')} className="hover:text-indigo-600">Dashboard Preview</button></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Company</div>
            <ul className="mt-2 space-y-2">
              <li><button onClick={() => onNavigate('login')} className="hover:text-indigo-600">Login</button></li>
              <li><button onClick={() => onNavigate('signup')} className="hover:text-indigo-600">Get Started</button></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Follow</div>
            <div className="mt-2 flex gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">X</a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">in</a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">YT</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">© {new Date().getFullYear()} MailPilot, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}
