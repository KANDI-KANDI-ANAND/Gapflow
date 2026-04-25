import { lazy, Suspense } from 'react';
import LazySection from '../components/LazySection';

const Hero = lazy(() => import('../sections/Hero'));
const AgentDemo = lazy(() => import('../sections/AgentDemo'));
const AgentSwarm = lazy(() => import('../sections/AgentSwarm'));
const HowItWorks = lazy(() => import('../sections/HowItWorks'));
const WorkflowBuilder = lazy(() => import('../sections/WorkflowBuilder'));
const UseCaseGallery = lazy(() => import('../sections/UseCaseGallery'));
const Capabilities = lazy(() => import('../sections/Capabilities'));
const Templates = lazy(() => import('../sections/Templates'));
const Teams = lazy(() => import('../sections/Teams'));
const Developers = lazy(() => import('../sections/Developers'));
const FinalCTA = lazy(() => import('../sections/FinalCTA'));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-20 min-h-[50vh] w-full border border-slate-200 bg-white/50 animate-pulse my-4 rounded-xl">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-[#10B981] text-xs font-bold tracking-widest uppercase">Loading Core Module</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero loads immediately to ensure fast LCP */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      {/* Subsequent sections wait until intersected */}
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <AgentDemo />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <AgentSwarm />
        </Suspense>
      </LazySection>
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
      </LazySection>
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
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <Teams />
        </Suspense>
      </LazySection>
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <Developers />
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
