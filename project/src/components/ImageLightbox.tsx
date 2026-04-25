import { useEffect } from 'react';
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export default function ImageLightbox({ src, alt, onClose, images = [], currentIndex = 0, onNavigate }: ImageLightboxProps) {
  const hasNavigation = images.length > 1 && onNavigate;
  const hasPrevious = hasNavigation && currentIndex > 0;
  const hasNext = hasNavigation && currentIndex < images.length - 1;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (hasNavigation && onNavigate) {
        if (e.key === 'ArrowLeft' && hasPrevious) {
          onNavigate(currentIndex - 1);
        }
        if (e.key === 'ArrowRight' && hasNext) {
          onNavigate(currentIndex + 1);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, hasNavigation, onNavigate, hasPrevious, hasNext, currentIndex]);

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = src.split('/').pop() || 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 z-10"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <button
        onClick={handleDownload}
        className="absolute top-4 right-20 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 z-10"
        aria-label="Download"
      >
        <Download size={24} />
      </button>

      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate!(currentIndex - 1);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate!(currentIndex + 1);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 z-10"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <div
        className="max-w-[95vw] max-h-[95vh] overflow-auto p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        {hasNavigation && (
          <div className="text-center mt-4 text-white/70 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
