import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Christopher Allen',
    location: '1 week ago',
    rating: 5,
    text: 'Needed my Office touched up. Had Hao and his team come in. When it was done, it looked Fantastic. Looks fresh and clean.',
    service: 'Commercial Painting',
  },
  {
    name: 'Kelvin Dong',
    location: '2 weeks ago',
    rating: 5,
    text: 'The office was being renovated and we had Hao come out to paint the new walls and the ceiling, he also helped patch and fix up all the old walls. Overall excellent communication, professional service and a great job from start to finish. Quick, no drama, clean, efficient would highly recommend Hao and his team.',
    service: 'Commercial Painting',
  },
  {
    name: 'Daniel Potocki',
    location: '2 weeks ago',
    rating: 5,
    text: 'Good Quality Work, very professional and punctual would recommend \u{1F64F}\u{1F3FB}',
    service: 'Painting',
  },
];

export default function Testimonials() {
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
        </div>

        <div className="testimonials__scroll">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
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
    </section>
  );
}
