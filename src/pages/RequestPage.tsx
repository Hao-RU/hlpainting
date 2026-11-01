import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle, Send, PhoneCall, ClipboardList, Phone, Clock, ShieldCheck, Palette } from 'lucide-react';
import { CALLBACK_PAGE, QUOTE_PAGE, currentPath, sendRequest } from '../lib/site';
import '../components/QuoteForm.css';
import './RequestPage.css';

type Mode = 'quote' | 'callback';

const SERVICES = [
  'Residential Painting',
  'Commercial Painting',
  'Strata Unit Painting',
  'Roof Painting',
  'Garage Painting',
  'Epoxy Flooring',
  'Not sure yet',
];

const PROPERTY = ['House', 'Townhouse', 'Apartment or unit', 'Commercial', 'Strata building'];

const TIMING = ['As soon as possible', 'Within a month', 'In 1 to 3 months', 'Just getting prices'];

const BEST_TIME = ['Morning (8 to 11)', 'Midday (11 to 2)', 'Afternoon (2 to 5)', 'Evening (5 to 7)', 'Any time'];

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  suburb: '',
  service: '',
  property: '',
  timing: '',
  message: '',
  best_time: '',
};

export default function RequestPage() {
  const [mode, setMode] = useState<Mode>(currentPath() === CALLBACK_PAGE || currentPath() === '/callback' ? 'callback' : 'quote');
  const [data, setData] = useState(EMPTY);
  const [bot, setBot] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<Mode | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title =
      mode === 'quote'
        ? 'Get a Free Painting Quote | Polaris Painting & Decorating Sydney'
        : 'Request a Call Back | Polaris Painting & Decorating Sydney';
    window.history.replaceState(null, '', mode === 'quote' ? QUOTE_PAGE : CALLBACK_PAGE);
  }, [mode]);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData(d => ({ ...d, [e.target.name]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    const fields: Record<string, string> =
      mode === 'quote'
        ? {
            request: 'Quote',
            name: data.name,
            email: data.email,
            phone: data.phone,
            suburb: data.suburb,
            service: data.service,
            property: data.property,
            timing: data.timing,
            message: data.message,
          }
        : {
            request: 'Call back',
            name: data.name,
            phone: data.phone,
            suburb: data.suburb,
            best_time: data.best_time,
            message: data.message,
          };
    try {
      await sendRequest(fields, bot);
      setDone(mode);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Something went wrong sending that. Please try again, or call 0403 764 216.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="request">
      <header className="request__head">
        <div className="container">
          <span className="section-label">Free, no obligation</span>
          <h1 className="request__title">
            {mode === 'quote' ? 'Request a free quote' : 'Request a call back'}
          </h1>
          <p className="request__lead">
            {mode === 'quote'
              ? 'Tell us a little about the job and we will come back to you within one business day to arrange a time to look and give you a written, itemised quote.'
              : 'Leave your number and a good time to ring. We will call you back to talk it through, no pressure and no obligation.'}
          </p>
        </div>
      </header>

      <div className="container request__body">
        <div className="request__panel">
          <div className="request__switch" role="tablist" aria-label="What would you like?">
            <button type="button" role="tab" aria-selected={mode === 'quote'} className={mode === 'quote' ? 'is-on' : ''} onClick={() => { setMode('quote'); setDone(null); }}>
              <ClipboardList size={18} /> Free quote
            </button>
            <button type="button" role="tab" aria-selected={mode === 'callback'} className={mode === 'callback' ? 'is-on' : ''} onClick={() => { setMode('callback'); setDone(null); }}>
              <PhoneCall size={18} /> Call me back
            </button>
          </div>

          {done !== null ? (
            <div className="quote__success request__success">
              <CheckCircle size={48} />
              <h2>Thank you{data.name ? `, ${data.name.split(' ')[0]}` : ''}!</h2>
              <p>
                {done === 'quote'
                  ? "We've got your request and will be in touch within one business day to arrange a time to have a look."
                  : `We'll give you a call${data.best_time && data.best_time !== 'Any time' ? ` in the ${data.best_time.split(' ')[0].toLowerCase()}` : ''} on ${data.phone || 'the number you left'}.`}
              </p>
              <a href="/" className="btn btn-primary">Back to the home page</a>
            </div>
          ) : (
            <form className="quote__form" name="quote" onSubmit={submit}>
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" value={bot} onChange={e => setBot(e.target.value)} />
                </label>
              </p>

              <div className="quote__row">
                <div className="quote__field">
                  <label htmlFor="rq-name">Your name</label>
                  <input id="rq-name" name="name" autoComplete="name" placeholder="Jane Smith" value={data.name} onChange={set} required />
                </div>
                <div className="quote__field">
                  <label htmlFor="rq-phone">Phone</label>
                  <input id="rq-phone" name="phone" type="tel" autoComplete="tel" placeholder="0400 000 000" value={data.phone} onChange={set} required />
                </div>
              </div>

              {mode === 'quote' ? (
                <>
                  <div className="quote__row">
                    <div className="quote__field">
                      <label htmlFor="rq-email">Email</label>
                      <input id="rq-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" value={data.email} onChange={set} required />
                    </div>
                    <div className="quote__field">
                      <label htmlFor="rq-suburb">Suburb</label>
                      <input id="rq-suburb" name="suburb" autoComplete="address-level2" placeholder="Macquarie Park" value={data.suburb} onChange={set} required />
                    </div>
                  </div>
                  <div className="quote__row">
                    <div className="quote__field">
                      <label htmlFor="rq-service">What needs painting?</label>
                      <select id="rq-service" name="service" value={data.service} onChange={set} required>
                        <option value="" disabled>Choose one...</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="quote__field">
                      <label htmlFor="rq-property">Property</label>
                      <select id="rq-property" name="property" value={data.property} onChange={set}>
                        <option value="">Choose one...</option>
                        {PROPERTY.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="quote__field">
                    <span className="request__label" id="rq-timing-l">When are you hoping to start?</span>
                    <div className="request__chips" role="radiogroup" aria-labelledby="rq-timing-l">
                      {TIMING.map(t => (
                        <label key={t} className={`request__chip ${data.timing === t ? 'is-on' : ''}`}>
                          <input type="radio" name="timing" value={t} checked={data.timing === t} onChange={set} />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="quote__field">
                    <label htmlFor="rq-message">About the job</label>
                    <textarea id="rq-message" name="message" rows={5} placeholder="Rooms or areas, inside or out, ceilings, doors and trims, any repairs, colours you have in mind..." value={data.message} onChange={set} required />
                  </div>
                </>
              ) : (
                <>
                  <div className="quote__field">
                    <label htmlFor="rq-suburb2">Suburb</label>
                    <input id="rq-suburb2" name="suburb" autoComplete="address-level2" placeholder="Macquarie Park" value={data.suburb} onChange={set} />
                  </div>
                  <div className="quote__field">
                    <span className="request__label" id="rq-best-l">Best time to call</span>
                    <div className="request__chips" role="radiogroup" aria-labelledby="rq-best-l">
                      {BEST_TIME.map(t => (
                        <label key={t} className={`request__chip ${data.best_time === t ? 'is-on' : ''}`}>
                          <input type="radio" name="best_time" value={t} checked={data.best_time === t} onChange={set} required />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="quote__field">
                    <label htmlFor="rq-note">Anything we should know? (optional)</label>
                    <textarea id="rq-note" name="message" rows={3} placeholder="What you are thinking of having painted" value={data.message} onChange={set} />
                  </div>
                </>
              )}

              {error && <p className="quote__error">{error}</p>}
              <button type="submit" className="btn btn-primary quote__submit" disabled={sending}>
                {sending ? 'Sending...' : mode === 'quote' ? 'Request my free quote' : 'Call me back'}
                {!sending && <Send size={16} />}
              </button>
              <p className="request__fine">We only use your details to get back to you about your job.</p>
            </form>
          )}
        </div>

        <aside className="request__side">
          <div className="request__card">
            <h2>What happens next</h2>
            <ol className="request__steps">
              <li><b>We get in touch</b> within one business day.</li>
              <li><b>We come and look</b> at a time that suits you, and talk colours if you like.</li>
              <li><b>You get a written quote</b> with every area and the preparation spelt out. No surprises.</li>
            </ol>
          </div>
          <ul className="request__points">
            <li><ShieldCheck size={18} /> Licensed, insured and warranty-backed</li>
            <li><Palette size={18} /> Free colour consultation</li>
            <li><Clock size={18} /> On time, every time</li>
          </ul>
          <div className="request__call">
            <p>Rather talk now?</p>
            <a href="tel:0403764216"><Phone size={18} /> 0403 764 216</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
