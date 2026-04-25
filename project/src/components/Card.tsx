import { ReactNode } from 'react';

interface CardProps {
  elevation?: 'base' | 'raised';
  interactive?: boolean;
  padding?: 'md' | 'lg';
  children: ReactNode;
}

export default function Card({ elevation = 'base', interactive = false, padding = 'lg', children }: CardProps) {
  return (
    <div
      className="bolt-card"
      data-elevation={elevation}
      data-interactive={interactive}
      data-padding={padding}
    >
      {children}
    </div>
  );
}
