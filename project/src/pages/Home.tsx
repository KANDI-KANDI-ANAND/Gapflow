import { lazy, Suspense } from 'react';
import LazySection from '../components/LazySection';

const Hero = lazy(() => import('../sections/Hero'));
const TrustSection = lazy(() => import('../sections/TrustSection'));
const MetricsSection = lazy(() => import('../sections/MetricsSection'));
const AgentDemo = lazy(() => import('../sections/AgentDemo'));
const HowItWorks = lazy(() => import('../sections/HowItWorks'));
const WorkflowBuilder = lazy(() => import('../sections/WorkflowBuilder'));
const UseCaseGallery = lazy(() => import('../sections/UseCaseGallery'));
const Capabilities = lazy(() => import('../sections/Capabilities'));
const Templates = lazy(() => import('../sections/Templates'));
const FinalCTA = lazy(() => import('../sections/FinalCTA'));
 
const SectionLoader = () => (
  <div className="flex justify-center items-center py-10 min-h-[40vh] w-full border border-slate-100 bg-white/50 animate-pulse my-6 rounded-2xl">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Initializing Module</span>
    </div>
  </div>
);
 
export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero loads immediately to ensure fast LCP */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
 
      <Suspense fallback={<SectionLoader />}>
        <TrustSection />
      </Suspense>
 
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
      </LazySection>
 
      {/* Subsequent sections wait until intersected */}
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <AgentDemo />
        </Suspense>
      </LazySection>

      <Suspense fallback={<SectionLoader />}>
        <MetricsSection />
      </Suspense>
 
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <WorkflowBuilder />
        </Suspense>
      </LazySection>
 
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <UseCaseGallery />
        </Suspense>
      </LazySection>
 
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <Capabilities />
        </Suspense>
      </LazySection>
 
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <Templates />
        </Suspense>
      </LazySection>

      <LazySection placeholderHeight="40vh" fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </LazySection>
    </div>
  );
}
