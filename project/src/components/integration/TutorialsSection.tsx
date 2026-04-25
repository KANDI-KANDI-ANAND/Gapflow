import { Play } from 'lucide-react';

interface TutorialsSectionProps {
  tutorials: Array<{
    title: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
  }>;
  integrationName: string;
}

export default function TutorialsSection({ tutorials, integrationName }: TutorialsSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#0A0B14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {integrationName} Integration Tutorials
          </h2>
          <p className="text-lg text-[#C4BBD3] max-w-2xl mx-auto font-light">
            Watch step-by-step video tutorials to master this integration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] rounded-xl overflow-hidden border border-[#2A2B3E] hover:border-[#10B981]/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video bg-[#1A1B2E]">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-[#C4BBD3] leading-relaxed text-sm font-light">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
