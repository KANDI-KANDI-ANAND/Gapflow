import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialsCarouselProps {
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (testimonials.length * 400));
    }, 30);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-16 lg:py-20 bg-[#0A0B14] text-white overflow-hidden">
      <div className="mb-12 text-center px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Trusted by Teams Worldwide
        </h2>
        <p className="text-lg text-[#C4BBD3] max-w-2xl mx-auto font-light">
          See what our customers have to say about this integration
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0B14] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0B14] to-transparent z-10"></div>

        <div
          className="flex gap-6 py-4"
          style={{
            transform: `translateX(${position}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 bg-gradient-to-br from-[#1A1B2E] to-[#0E0918] backdrop-blur-sm rounded-xl p-6 border border-[#2A2B3E]"
            >
              <Quote className="w-8 h-8 text-[#10B981] mb-4" />
              <p className="text-[#C4BBD3] mb-6 leading-relaxed font-light">
                {testimonial.quote}
              </p>
              <div className="border-t border-[#2A2B3E] pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-[#C4BBD3]">{testimonial.role}</p>
                <p className="text-sm text-[#6B7280]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
