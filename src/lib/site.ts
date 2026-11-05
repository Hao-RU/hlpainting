// Small site helpers: which page we are on, and getting to a section or the
// quote page from anywhere on the site.

export const QUOTE_PAGE = '/get-a-quote';
/** Where a sent quote request lands. Google Ads can count a visit here as a
 *  conversion ("page URL contains /thank-you"). */
export const THANKS_PAGE = '/thank-you';
/** Old addresses (the call back page is gone) that now open the quote page. */
const OLD_PATHS = ['/quote', '/call-back', '/callback'];
export const REQUEST_PATHS = [QUOTE_PAGE, THANKS_PAGE, ...OLD_PATHS];

// While the suburb pages are prerendered at build time there is no window,
// so the build says which page it is drawing.
let ssrPath: string | null = null;
export function setSsrPath(path: string): void {
  ssrPath = path;
}

export function currentPath(): string {
  const raw = ssrPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname);
  return raw.replace(/\/+$/, '') || '/';
}

export function isHomePage(): boolean {
  return currentPath() === '/';
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

// Measuring enquiries (Google Ads / Analytics). Events always go on the
// dataLayer; when a Google tag ID is set at build time (VITE_GOOGLE_TAG_ID,
// e.g. AW-123456789) the tag is loaded and the events reach Google. Each
// conversion's "send_to" (AW-123456789/AbCdEf...) can be set too, so Ads
// counts them directly:
//   VITE_GADS_QUOTE_SEND_TO  - a quote request sent
//   VITE_GADS_CALL_SEND_TO   - a tap on the phone number
type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const TAG_ID = import.meta.env.VITE_GOOGLE_TAG_ID as string | undefined;
const SEND_TO: Record<string, string | undefined> = {
  quote_request: import.meta.env.VITE_GADS_QUOTE_SEND_TO as string | undefined,
  phone_call: import.meta.env.VITE_GADS_CALL_SEND_TO as string | undefined,
};

export function startTracking(): void {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag needs the arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  if (TAG_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TAG_ID)}`;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', TAG_ID);
  }
  // Every phone link on the site counts as a call, wherever it is.
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
    if (a) track('phone_call', { where: currentPath() });
  });
}

export function track(event: 'quote_request' | 'phone_call', params: Record<string, string> = {}): void {
  window.gtag?.('event', event === 'quote_request' ? 'generate_lead' : 'phone_call_click', { ...params, method: event });
  const to = SEND_TO[event];
  if (to) window.gtag?.('event', 'conversion', { send_to: to });
}
