import { LucideIcon } from 'lucide-react';

interface PillProps {
  tone?: 'accent' | 'muted' | 'neutral';
  text: string;
  icon?: LucideIcon;
  size?: 'sm' | 'md';
}

export default function Pill({ tone = 'accent', text, icon: Icon, size = 'md' }: PillProps) {
  return (
    <span
      className="bolt-pill"
      data-tone={tone}
      aria-label={text}
      style={{
        fontSize: size === 'sm' ? '11px' : undefined,
        padding: size === 'sm' ? '2px 8px' : undefined
      }}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {text}
    </span>
  );
}
