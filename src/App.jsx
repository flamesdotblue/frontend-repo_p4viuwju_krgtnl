import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Landing from './components/Landing';
import Auth from './components/Auth';
import DashboardPreview from './components/DashboardPreview';

function App() {
  const [page, setPage] = useState('landing'); // 'landing' | 'login' | 'signup' | 'dashboard'

  return (
    <div className="font-sans text-gray-900">
      <AnimatePresence mode="wait">
        {page === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Landing onNavigate={setPage} />
          </motion.div>
        )}
        {(page === 'login' || page === 'signup') && (
          <motion.div key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Auth
              mode={page}
              onBack={() => setPage('landing')}
              onSwitch={(next) => setPage(next)}
              onSuccess={() => setPage('dashboard')}
            />
          </motion.div>
        )}
        {page === 'dashboard' && (
          <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DashboardPreview onBack={() => setPage('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
