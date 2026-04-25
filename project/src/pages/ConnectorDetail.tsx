import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IntegrationHero from '../components/integration/IntegrationHero';
import PossibilitiesSection from '../components/integration/PossibilitiesSection';
import EcosystemSection from '../components/integration/EcosystemSection';
import DocumentationSection from '../components/integration/DocumentationSection';
import TutorialsSection from '../components/integration/TutorialsSection';
import FAQSection from '../components/integration/FAQSection';
import TestimonialsCarousel from '../components/integration/TestimonialsCarousel';
import LimitsSection from '../components/integration/LimitsSection';
import ScrollToTop from '../components/ScrollToTop';

interface IntegrationData {
  id: string;
  name: string;
  logo: string;
  categories: string[];
  hero: {
    heading: string;
    subheading: string;
    image: string;
  };
  possibilities: {
    tabs: Array<{
      name: string;
      items: string[];
    }>;
  };
  useCases: Array<{
    title: string;
    blocks: string[];
  }>;
  documentation: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  tutorials: Array<{
    title: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
  limits: Array<{
    title: string;
    description: string;
  }>;
  relatedQuestions: string[];
}

export default function ConnectorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<IntegrationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadIntegrationData = async () => {
      try {
        setLoading(true);
        const response = await import(`../data/integration-${slug}.json`);
        setData(response.default);
      } catch (err) {
        console.error(`Failed to load integration data for ${slug}:`, err);
        setError('Integration not found');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadIntegrationData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading integration details...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Integration Not Found</h1>
          <p className="text-slate-600">The integration you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <IntegrationHero data={data} />

      <PossibilitiesSection data={data.possibilities} integrationName={data.name} />

      <EcosystemSection integrationId={data.id} integrationName={data.name} />

      <DocumentationSection documentation={data.documentation} />

      <TutorialsSection tutorials={data.tutorials} integrationName={data.name} />

      <FAQSection faqs={data.faqs} relatedQuestions={data.relatedQuestions} />

      <TestimonialsCarousel testimonials={data.testimonials} />

      <LimitsSection limits={data.limits} />
    </div>
  );
}
