import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInteractions } from './hooks/useInteractions';
import Header from './components/Header';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';
import CircuitBackground from './components/CircuitBackground';
import FlowThread from './components/FlowThread';
import CursorPlasma from './components/CursorPlasma';
import FloatingAgent from './components/FloatingAgent';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Templates = lazy(() => import('./pages/Templates'));
const TemplateDetail = lazy(() => import('./pages/TemplateDetail'));
const Docs = lazy(() => import('./pages/Docs'));
const Integrations = lazy(() => import('./pages/Integrations'));
const ConnectorDetail = lazy(() => import('./pages/ConnectorDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 bg-[#10B981]/10 rounded-full blur-[80px] animate-pulse"></div>
    </div>
    <div className="text-center relative z-10">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto w-16 h-16 border-4 border-[#10B981] border-t-transparent rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)]"
      ></motion.div>
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-6 text-[#10B981] font-bold tracking-widest uppercase text-sm"
      >
        Initializing AI Data
      </motion.p>
    </div>
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
    exit={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  useInteractions();
  const location = useLocation();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Gapflow Agents are waiting...';
      } else {
        document.title = 'Gapflow | The AI Engine';
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="relative isolate min-h-screen">
      <ParticleBackground />
      <CircuitBackground />
      <FlowThread />
      <CursorPlasma />
      <Header />
      <main id="main-content" role="main">
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
              <Route path="/templates" element={<PageWrapper><Templates /></PageWrapper>} />
              <Route path="/templates/:slug" element={<PageWrapper><TemplateDetail /></PageWrapper>} />
              <Route path="/docs" element={<PageWrapper><Docs /></PageWrapper>} />
              <Route path="/integrations" element={<PageWrapper><Integrations /></PageWrapper>} />
              <Route path="/integrations/:slug" element={<PageWrapper><ConnectorDetail /></PageWrapper>} />
              <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <FloatingAgent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
