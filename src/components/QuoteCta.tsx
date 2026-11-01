import { CheckCircle, Phone, ClipboardList, ArrowRight } from 'lucide-react';
import './QuoteForm.css';
import './QuoteCta.css';
import PaintChip from './PaintChip';
import { WALLS } from '../paintColours';
import { QUOTE_PAGE } from '../lib/site';

// The home page's "ready to start" section: two ways in, a call or the quote
// page. The form itself lives on /get-a-quote so every request comes through
// one place, and Google Ads can count it there.
export default function QuoteCta() {
  return (
    <section id="quote" className="quote" data-wall style={{ background: WALLS.quote.hex }}>
      <PaintChip {...WALLS.quote} />
      <div className="container">
        <div className="quote__wrapper">
          <div className="quote__info">
            <span className="section-label">Ready to Start?</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              Get Your Free<br />Quote Today
            </h2>
            <p className="quote__desc">
              Tell us about your project and we'll get back to you within one business day
              to arrange a time to look and give you a detailed, no-obligation quote.
            </p>

            <div className="quote__benefits">
              {[
                'Free colour consultation included',
                'No hidden fees or surprise charges',
                'Licensed, insured & warranty-backed',
                'Flexible scheduling around your needs',
              ].map(b => (
                <div key={b} className="quote__benefit">
                  <CheckCircle size={18} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="qcta">
            <a href={QUOTE_PAGE} className="qcta__option qcta__option--main">
              <span className="qcta__icon"><ClipboardList size={26} /></span>
              <span className="qcta__text">
                <span className="qcta__title">Request a free quote</span>
                <span className="qcta__sub">Two minutes online. Tell us about the job and we'll arrange a time to have a look.</span>
              </span>
              <ArrowRight size={20} className="qcta__arrow" />
            </a>

            <div className="qcta__or"><span>or</span></div>

            <a href="tel:0403764216" className="qcta__option">
              <span className="qcta__icon"><Phone size={24} /></span>
              <span className="qcta__text">
                <span className="qcta__title">Call 0403 764 216</span>
                <span className="qcta__sub">Rather talk it through? Give us a ring.</span>
              </span>
              <ArrowRight size={20} className="qcta__arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
