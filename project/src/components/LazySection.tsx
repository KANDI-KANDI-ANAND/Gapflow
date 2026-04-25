import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
    children: ReactNode;
    placeholderHeight?: string;
    fallback?: ReactNode;
    threshold?: number;
}

export default function LazySection({
    children,
    placeholderHeight = '100vh',
    fallback,
    threshold = 200 // Number of pixels before entering viewport to trigger load
}: LazySectionProps) {
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If it has already loaded, do not re-run observer.
        if (hasIntersected) return;

        const observer = new IntersectionObserver(([entry]) => {
            // The moment the proxy element crosses the threshold, declare it visible
            if (entry.isIntersecting) {
                setHasIntersected(true);
                observer.disconnect();
            }
        }, {
            rootMargin: `${threshold}px 0px` // Trigger load slightly before bringing element into view
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [hasIntersected, threshold]);

    return (
        <div ref={ref}>
            {hasIntersected ? children : (
                <div style={{ height: placeholderHeight, width: '100%' }}>
                    {fallback || null}
                </div>
            )}
        </div>
    );
}
