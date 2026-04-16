import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'Which areas in Sydney do you service?',
    a: 'We service across Sydney and nearby areas including Chatswood, Pymble, Hornsby, Wahroonga, the North Shore, Castle Hill, Parramatta, Bondi Junction, Strathfield, Sutherland Shire, Gosford, and the wider Central Coast.',
  },
  {
    q: 'Can you paint while my business stays open?',
    a: 'Absolutely. We offer flexible scheduling including early mornings, evenings, and weekends for commercial jobs. We stage work areas carefully so you can keep trading with minimal disruption.',
  },
  {
    q: 'Do you help with colour selection?',
    a: 'Yes, we provide complimentary colour consultations. We can bring sample swatches, apply test patches on your walls, and advise on colours that work best with your lighting and décor.',
  },
  {
    q: 'How do you handle strata repainting projects?',
    a: 'We coordinate everything — from posting resident notices and obtaining body corporate approvals to staging levels, protecting common areas, and ensuring safe access throughout the project.',
  },
  {
    q: 'What types of roofs can you paint?',
    a: 'We paint both tiled and metal roofs. Every roof job includes high-pressure washing, minor repairs, priming, and applying premium protective coatings designed to withstand Australian conditions.',
  },
  {
    q: 'How clean is the site during and after work?',
    a: 'Very clean. We protect all floors, furniture, and garden areas before starting. Drop sheets and masking are standard. At the end of each day we tidy the workspace, and on completion we remove all waste.',
  },
  {
    q: 'What\'s included in a free quote?',
    a: 'Our quotes are fully itemised and cover surface preparation, materials, labour, and clean-up. There are no hidden fees. We also include an estimated timeline and warranty details.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We are fully licensed, carry comprehensive public liability insurance, and provide a written workmanship warranty on every project for your peace of mind.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before getting started. Can't find your answer? Reach out directly.
            </p>
            <a href="#quote" className="btn btn-primary faq__cta" onClick={(e) => { e.preventDefault(); document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Ask Us Anything
            </a>
          </div>

          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              >
                <button className="faq__question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="faq__chevron" />
                </button>
                <div className="faq__answer-wrapper">
                  <div className="faq__answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
