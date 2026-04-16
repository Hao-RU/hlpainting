import { useState, type FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './QuoteForm.css';

const serviceOptions = [
  'Residential Painting',
  'Commercial Painting',
  'Strata Unit Painting',
  'Roof Painting',
  'Garage Painting',
  'Epoxy Flooring',
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="quote">
      <div className="container">
        <div className="quote__wrapper">
          <div className="quote__info">
            <span className="section-label">Ready to Start?</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              Get Your Free<br />Quote Today
            </h2>
            <p className="quote__desc">
              Tell us about your project and we'll get back to you within 24 hours
              with a detailed, no-obligation quote.
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

            <div className="quote__contact-info">
              <p>Prefer to call?</p>
              <a href="tel:0450936281" className="quote__phone">0450 936 281</a>
            </div>
          </div>

          <div className="quote__form-wrapper">
            {submitted ? (
              <div className="quote__success">
                <CheckCircle size={48} />
                <h3>Thank You!</h3>
                <p>We've received your request and will be in touch within 24 hours with your free quote.</p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote__form">
                <div className="quote__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="quote__row">
                  <div className="quote__field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="quote__field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="quote__field">
                  <label htmlFor="service">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="quote__field">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project — number of rooms, property type, any special requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary quote__submit">
                  Request Free Quote
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
