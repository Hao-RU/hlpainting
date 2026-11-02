// Small site helpers: which page we are on, and getting to a section or the
// quote page from anywhere on the site.

export const QUOTE_PAGE = '/get-a-quote';
/** Where a sent quote request lands. Google Ads can count a visit here as a
 *  conversion ("page URL contains /thank-you"). */
export const THANKS_PAGE = '/thank-you';
/** Old addresses (the call back page is gone) that now open the quote page. */
const OLD_PATHS = ['/quote', '/call-back', '/callback'];
export const REQUEST_PATHS = [QUOTE_PAGE, THANKS_PAGE, ...OLD_PATHS];

export function currentPath(): string {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export function isRequestPage(): boolean {
  return REQUEST_PATHS.includes(currentPath());
}

export function isThanksPage(): boolean {
  return currentPath() === THANKS_PAGE;
}

/** Send an old link (/call-back, /quote) to the quote page's real address. */
export function tidyOldPath(): void {
  if (OLD_PATHS.includes(currentPath())) window.history.replaceState(null, '', QUOTE_PAGE);
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

// Measuring visits and enquiries: Google Analytics 4 and Google Ads.
// The IDs are set as Netlify environment variables and read at build time,
// so turning either on is a Netlify setting and a redeploy, not a code change:
//   VITE_GA_ID              - Analytics measurement ID, G-XXXXXXXXXX
//   VITE_GOOGLE_ADS_ID      - Google Ads tag ID, AW-123456789
//   VITE_GADS_QUOTE_SEND_TO - optional, the quote conversion's AW-.../label
//   VITE_GADS_CALL_SEND_TO  - optional, the phone tap conversion's AW-.../label
// Events always go on the dataLayer, so they are there for Tag Manager too.
type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const env = (v: unknown): string | undefined => (typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined);
const GA_ID = env(import.meta.env.VITE_GA_ID);
// VITE_GOOGLE_TAG_ID was the first name for the Ads ID; still honoured
const ADS_ID = env(import.meta.env.VITE_GOOGLE_ADS_ID) ?? env(import.meta.env.VITE_GOOGLE_TAG_ID);
const SEND_TO: Record<string, string | undefined> = {
  quote_request: env(import.meta.env.VITE_GADS_QUOTE_SEND_TO),
  phone_call: env(import.meta.env.VITE_GADS_CALL_SEND_TO),
};

export function startTracking(): void {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag needs the arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  const ids = [GA_ID, ADS_ID].filter((x): x is string => x !== undefined);
  if (ids.length > 0) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ids[0])}`;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    for (const id of ids) window.gtag('config', id);
  }
  // Every phone link on the site counts as a call, wherever it is.
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
    if (a) track('phone_call', { where: currentPath() });
  });
}

export function track(event: 'quote_request' | 'phone_call', params: Record<string, string> = {}): void {
  // GA4 names: generate_lead is Google's recommended lead event
  window.gtag?.('event', event === 'quote_request' ? 'generate_lead' : 'phone_call_click', { ...params, method: event });
  const to = SEND_TO[event];
  if (to) window.gtag?.('event', 'conversion', { send_to: to });
}

/** The thank-you page arrives without a page load. Analytics sees the
 *  address change on its own; Ads needs telling, so a "page URL contains
 *  /thank-you" conversion counts. */
export function trackPageChange(): void {
  if (ADS_ID) window.gtag?.('event', 'page_view', { send_to: ADS_ID, page_location: window.location.href, page_title: document.title });
}
