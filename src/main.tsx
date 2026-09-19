import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './routes/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    '[main] Could not find root element. Make sure index.html has <div id="root"></div>.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
