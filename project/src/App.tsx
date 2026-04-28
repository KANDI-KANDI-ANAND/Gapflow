import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInteractions } from './hooks/useInteractions';
import Header from './components/Header';
import Footer from './sections/Footer';
// import ParticleBackground from './components/ParticleBackground';
// import CircuitBackground from './components/CircuitBackground';
// import FlowThread from './components/FlowThread';
// import CursorPlasma from './components/CursorPlasma';
// import FloatingAgent from './components/FloatingAgent';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Templates = lazy(() => import('./pages/Templates'));
const TemplateDetail = lazy(() => import('./pages/TemplateDetail'));
const Docs = lazy(() => import('./pages/Docs'));
const Integrations = lazy(() => import('./pages/Integrations'));
const ConnectorDetail = lazy(() => import('./pages/ConnectorDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="mx-auto w-10 h-10 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-500 font-bold tracking-widest uppercase text-xs">
        Loading Gapflow
      </p>
    </div>
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  useInteractions();
  const location = useLocation();

  useEffect(() => {
    document.title = 'Gapflow | AI Workflow Automation';
  }, []);

  return (
    <div className="relative isolate min-h-screen">
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
