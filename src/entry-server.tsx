// Draws the area pages to HTML at build time (scripts/prerender.mjs), so
// Google and a slow phone get the full page before any script runs.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { setSsrPath } from './lib/site';

export { prerenderPages } from './lib/suburbs';

export function render(path: string): string {
  setSsrPath(path);
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
