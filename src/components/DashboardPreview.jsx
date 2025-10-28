import { motion } from 'framer-motion';
import { Mail, BarChart3, Users, Calendar, Layers } from 'lucide-react';

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-3 font-semibold text-gray-900">{title}</div>
      {children}
    </div>
  );
}

export default function DashboardPreview({ onBack }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
            <span className="font-semibold">MailPilot</span>
          </div>
          <button onClick={onBack} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50">Back to site</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card title="Campaign Performance">
              <motion.div
                className="h-56 w-full bg-gradient-to-b from-white to-indigo-50 rounded-xl border border-gray-100 flex items-end gap-2 p-4"
                initial={false}
                animate={{}}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-indigo-500/80"
                    initial={{ height: 20 }}
                    animate={{ height: 30 + Math.abs(Math.sin(i + Date.now() / 800)) * 160 }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'mirror', delay: i * 0.05 }}
                  />
                ))}
              </motion.div>
            </Card>

            <Card title="Templates">
              <div className="grid sm:grid-cols-3 gap-4">
                {['Announcement', 'Newsletter', 'Product Drop'].map((name) => (
                  <motion.div key={name} whileHover={{ y: -2 }} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-gray-700"><Layers size={16} /> {name}</div>
                    <div className="mt-3 h-20 rounded-lg bg-gradient-to-br from-gray-50 to-indigo-50/40 border border-gray-100" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card title="Overview">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-gray-100 bg-white p-3">
                  <div className="text-gray-500">Total Emails</div>
                  <div className="mt-1 text-2xl font-bold">128k</div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-3">
                  <div className="text-gray-500">Open Rate</div>
                  <div className="mt-1 text-2xl font-bold">42%</div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-3">
                  <div className="text-gray-500">CTR</div>
                  <div className="mt-1 text-2xl font-bold">9.4%</div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-3">
                  <div className="text-gray-500">Revenue</div>
                  <div className="mt-1 text-2xl font-bold">$87k</div>
                </div>
              </div>
            </Card>

            <Card title="Upcoming">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><Calendar size={16} /> Spring Promo – Apr 12</div>
                <div className="flex items-center gap-2"><Calendar size={16} /> Feature Launch – Apr 18</div>
                <div className="flex items-center gap-2"><Calendar size={16} /> Referral Push – Apr 26</div>
              </div>
            </Card>

            <Card title="Audience">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><Users size={16} /> 48,210 subscribers</div>
                <div className="flex items-center gap-2"><Mail size={16} /> 6,421 active campaigns</div>
                <div className="flex items-center gap-2"><BarChart3 size={16} /> Top segment: Returning buyers</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
