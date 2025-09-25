import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

// Use hydrateRoot if the content is already rendered (from react-snap)
// Use createRoot for regular client-side rendering
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
