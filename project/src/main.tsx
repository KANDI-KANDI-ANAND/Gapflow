import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './gapflow_theme.css';
import './gapflow_interactions_patch.css';
import './gapflow_responsive_patch.css';
import './mobile-responsive.css';
import './accessibility.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
