import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      style={{
        padding: 'var(--space-md) 0',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-muted)'
      }}
      aria-label="Breadcrumb"
    >
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          flexWrap: 'wrap'
        }}
      >
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-muted)';
            }}
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)'
            }}
          >
            <ChevronRight size={16} style={{ opacity: 0.5 }} />
            {item.path ? (
              <Link
                to={item.path}
                style={{
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: 'var(--color-text)',
                  fontWeight: 500
                }}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
