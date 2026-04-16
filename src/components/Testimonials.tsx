import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Pymble, Sydney',
    rating: 5,
    text: 'Absolutely thrilled with the result. The team was punctual, respectful of our home, and delivered a flawless finish. Our living room looks brand new. Would recommend to anyone looking for quality painters.',
    service: 'Residential Interior',
  },
  {
    name: 'James Chen',
    location: 'Chatswood, Sydney',
    rating: 5,
    text: 'We needed our office repainted over the weekend to avoid business disruption. Haos it goin mate delivered on time and the finish exceeded expectations. Professional from start to finish.',
    service: 'Commercial Painting',
  },
  {
    name: 'Maria Kostas',
    location: 'Hornsby, Sydney',
    rating: 5,
    text: "Managing a strata repaint is always stressful, but the team handled everything — resident communication, staged access, clean-up. The building looks incredible and we've had zero complaints.",
    service: 'Strata Painting',
  },
  {
    name: 'David Thompson',
    location: 'Castle Hill, Sydney',
    rating: 5,
    text: 'Our roof was looking tired and faded. After the pressure wash and recoat, it looks better than when the house was built. Great value for money and very thorough preparation work.',
    service: 'Roof Painting',
  },
  {
    name: 'Lisa Nguyen',
    location: 'North Shore, Sydney',
    rating: 5,
    text: 'From the colour consultation to the final touch-up, every detail was handled with care. The team even fixed a few wall imperfections we hadn\'t noticed. True professionals.',
    service: 'Residential Exterior',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(maxIndex, i + 1));

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div>
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Hundreds of happy homeowners and businesses across Sydney trust our work.
            </p>
          </div>
          <div className="testimonials__nav">
            <button
              onClick={prev}
              disabled={current === 0}
              className="testimonials__arrow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="testimonials__arrow"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="testimonials__track-wrapper">
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ minWidth: `${100 / visibleCount}%` }}>
                <div className="testimonial-card__inner">
                  <Quote className="testimonial-card__quote-icon" size={32} />
                  <div className="testimonial-card__stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-card__text">{t.text}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="testimonial-card__name">{t.name}</span>
                      <span className="testimonial-card__location">{t.location}</span>
                    </div>
                  </div>
                  <span className="testimonial-card__service">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
