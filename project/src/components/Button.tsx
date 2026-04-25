import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  icon?: LucideIcon;
  action?: string;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', size = 'md', label, icon: Icon, action, onClick }: ButtonProps) {
  const isExternalLink = action && (action.startsWith('http://') || action.startsWith('https://'));
  const isInternalRoute = action && action.startsWith('/') && !action.startsWith('/#');

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (action) {
      if (isExternalLink) {
        window.open(action, '_blank', 'noopener,noreferrer');
      } else if (isInternalRoute) {
        window.location.href = action;
      } else {
        const element = document.querySelector(action);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      className="bolt-btn"
      data-variant={variant}
      data-size={size}
      data-cta={action}
      onClick={handleClick}
    >
      <span className="label">{label}</span>
      {Icon && <Icon size={20} />}
    </button>
  );
}
