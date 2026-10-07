import { ChevronDown } from 'lucide-react';
import './Splash.css';

// Edit this line to change the slogan on the opening screen.
const SLOGAN = 'Your fixed point for a flawless finish.';

const scrollTo = (selector: string) =>
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });

export default function Splash() {
  return (
    <section className="splash" aria-label="Polaris Painting & Decorating">
      <div className="splash__inner">
        <svg
          className="splash__mark"
          viewBox="-120 -180 240 450"
          role="img"
          aria-label="Polaris North Star"
        >
          <path d="M0,-167 Q12,-12 110,0 Q12,12 0,142 Q-12,12 -110,0 Q-12,-12 0,-167 Z" />
          <circle cx="0" cy="215" r="23" />
        </svg>

        <h1 className="splash__wordmark">
          <span className="splash__name">Polaris Painting</span>
          <span className="splash__sub">&amp; Decorating</span>
        </h1>

        <p className="splash__slogan">{SLOGAN}</p>

        <a
          href="#quote"
          className="btn btn-primary splash__cta"
          onClick={(e) => { e.preventDefault(); scrollTo('#quote'); }}
        >
          Get Your Free Quote
        </a>
      </div>

      <a
        href="#intro"
        className="splash__scroll"
        aria-label="Scroll down"
        onClick={(e) => { e.preventDefault(); scrollTo('#intro'); }}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
