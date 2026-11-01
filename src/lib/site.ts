// Small site helpers: which page we are on, and getting to a section or the
// quote page from anywhere on the site.

export const REQUEST_PATHS = ['/get-a-quote', '/quote', '/call-back', '/callback'];
export const QUOTE_PAGE = '/get-a-quote';
export const CALLBACK_PAGE = '/call-back';

export function currentPath(): string {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export function isRequestPage(): boolean {
  return REQUEST_PATHS.includes(currentPath());
}

/** Scroll to a section on the home page, or go home and then to it. */
export function goToSection(hash: string): void {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/${hash}`;
  }
}

// Submissions go to Netlify Forms. A matching hidden form named "quote" lives
// in index.html so Netlify can detect the fields at deploy time; every field
// sent here must be listed there too. The Polaris CRM reads them from Netlify.
export const FORM_NAME = 'quote';

export async function sendRequest(fields: Record<string, string>, botField: string): Promise<void> {
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': FORM_NAME, 'bot-field': botField, ...fields }).toString(),
  });
  if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
}
