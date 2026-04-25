# Gapflow Hero Component

A high-impact homepage hero component featuring animated workflow visualizations, multiple copy variants, and full accessibility support.

## Features

- Three pre-built copy variants (Launch, Dev, Enterprise)
- Animated workflow network with SVG nodes and connectors
- Fully responsive design (mobile to desktop)
- WCAG 2.1 AA compliant
- Respects `prefers-reduced-motion`
- Built with React + Tailwind CSS

## Installation

No additional dependencies required beyond the base project setup.

## Usage

### Basic Implementation

```tsx
import GfHero from './components/GfHero';

function App() {
  return (
    <GfHero
      variant="launch"
      onPrimaryClick={() => console.log('Try Gapflow clicked')}
      onSecondaryClick={() => console.log('Watch Demo clicked')}
    />
  );
}
```

### Props API

```typescript
type GfHeroProps = {
  variant?: 'launch' | 'dev' | 'enterprise';  // Default: 'launch'
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  headlineOverride?: string;
  subcopyOverride?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}
```

## Copy Variants

### Launch Variant (Default)
- **Headline:** "Automate Everything. Intelligently."
- **Subcopy:** "Meet Gapflow — the AI-powered workflow builder..."
- **CTAs:** "Try Gapflow" / "Watch Demo"

### Dev Variant
- **Headline:** "The AI-Driven Workflow Engine for Real-Time Ops."
- **Subcopy:** "Connect APIs, bots, and data flows visually..."
- **CTAs:** "Start Building" / "See Templates"

### Enterprise Variant
- **Headline:** "One Platform. Infinite Automations."
- **Subcopy:** "Secure, visual, and deeply integrated..."
- **CTAs:** "Book a Demo" / "Explore Integrations"

## Customization

### Override Copy

```tsx
<GfHero
  variant="launch"
  headlineOverride="Your Custom Headline"
  subcopyOverride="Your custom description here"
  primaryCtaLabel="Get Started"
  secondaryCtaLabel="Learn More"
/>
```

### Customize Animation Nodes

To modify the workflow nodes, edit `WorkflowAnimation.tsx`:

```tsx
const nodes = [
  { id: 'yourservice', label: 'Your Service', angle: 0, color: 'primary' },
  // Add or modify nodes here
];
```

**Color options:**
- `'primary'` - Purple gradient (#6B4BFF → #9A68FF)
- `'accent'` - Green (#32D38A)

### Replace Integration Icons

SVG icons are located at:
```
public/brand/integration-icons/
├── bright-pattern.svg
├── microsoft-dynamics-365.svg
├── salesforce.svg
├── power-bi.svg
├── openai.svg
├── servicenow.svg
├── slack.svg
├── azure.svg
└── aws.svg
```

Replace any icon with your own SVG (white stroke, 24×24 viewBox).

## Responsive Behavior

- **Desktop (≥1024px):** Two-column layout, animation on right
- **Tablet (768-1023px):** Two-column with smaller spacing
- **Mobile (<768px):** Stacked layout, animation below content

## Accessibility

### Keyboard Navigation
- All buttons are keyboard-accessible
- Focus indicators on all interactive elements
- Tab order follows visual flow

### Screen Readers
- Semantic HTML5 structure
- ARIA labels on all buttons
- Decorative elements marked with `aria-hidden`

### Motion
Respects `prefers-reduced-motion` setting. When enabled:
- Animations pause
- No pulsing effects
- No particle movement

## Performance

### Optimization Tips

1. **Lazy Loading** (optional)
```tsx
import { lazy, Suspense } from 'react';
const GfHero = lazy(() => import('./components/GfHero'));

<Suspense fallback={<div>Loading...</div>}>
  <GfHero />
</Suspense>
```

2. **Reduce Animation Complexity**
Edit `WorkflowAnimation.tsx` to reduce particle count:
```tsx
{[...Array(10)].map((_, i) => (  // Reduced from 20
```

3. **Preload Critical Assets**
If using custom fonts or images, add to `<head>`:
```html
<link rel="preload" href="/path/to/font.woff2" as="font" type="font/woff2" crossorigin>
```

## Design Tokens

The component uses these exact brand colors:

```css
--bg-dark-from: #0B0E1A
--bg-dark-to: #191E3A
--primary-from: #6B4BFF
--primary-to: #9A68FF
--accent-green: #32D38A
--text-light: #E3E6EF
--text-muted: #9AA0A6
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Android 90+

## Troubleshooting

### Animation not showing
- Check that `WorkflowAnimation.tsx` is imported correctly
- Verify Tailwind CSS is processing the component files
- Check browser console for errors

### Layout issues on mobile
- Ensure parent container has no `overflow: hidden` on mobile
- Check that viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1">`

### Buttons not responding
- Verify `onPrimaryClick` and `onSecondaryClick` props are passed
- Check React DevTools for proper event binding

## Examples

### With Analytics Tracking
```tsx
<GfHero
  variant="launch"
  onPrimaryClick={() => {
    analytics.track('hero_cta_clicked', { cta: 'primary' });
    window.location.href = '/signup';
  }}
  onSecondaryClick={() => {
    analytics.track('hero_cta_clicked', { cta: 'secondary' });
    window.location.href = '/demo';
  }}
/>
```

### With Router Integration
```tsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <GfHero
      variant="dev"
      onPrimaryClick={() => navigate('/builder')}
      onSecondaryClick={() => navigate('/templates')}
    />
  );
}
```

## Testing

### Visual Regression
```bash
npm run test:visual -- GfHero
```

### Accessibility Audit
```bash
npm run test:a11y -- GfHero
```

### Performance
```bash
npm run lighthouse -- http://localhost:3000
```

Target scores:
- Performance: 90+
- Accessibility: 100
- Best Practices: 90+

## License

Internal use only. Do not distribute.

## Support

For questions or issues, contact the design systems team or open an issue in the project repository.
