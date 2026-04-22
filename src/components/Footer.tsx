import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import './Footer.css';
import logo from '../assets/companylogo_transparent.png';

export default function Footer() {
  const year = new Date().getFullYear();

  const serviceLinks = [
    'Residential Painting',
    'Commercial Painting',
    'Strata Unit Painting',
    'Roof Painting',
    'Garage Painting',
    'Epoxy Flooring',
  ];

  const areaLinks = [
    'Chatswood', 'Pymble', 'Hornsby', 'Wahroonga',
    'North Shore', 'Castle Hill', 'Parramatta', 'Bondi Junction',
    'Strathfield', 'Sutherland Shire', 'Central Coast',
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="HL Painting" className="footer__logo-img" />
              <div>
                <span className="footer__logo-name">HL Painting</span>
                <span className="footer__logo-sub">Residential & Commercial Painting Specialist</span>
              </div>
            </div>
            <p className="footer__desc">
              Sydney's trusted painters delivering premium finishes for homes,
              businesses, and strata properties since 2015.
            </p>
            <div className="footer__contact-list">
              <a href="tel:0488890909" className="footer__contact-item">
                <Phone size={16} />
                <span>0488 890 909</span>
              </a>
              <a href="mailto:info@oziqualitypaintingservices.com.au" className="footer__contact-item">
                <Mail size={16} />
                <span>info@oziqualitypaintingservices.com.au</span>
              </a>
              <div className="footer__contact-item">
                <Clock size={16} />
                <span>Mon – Fri: 9 AM – 5 PM</span>
              </div>
              <div className="footer__contact-item">
                <MapPin size={16} />
                <span>Sydney, NSW</span>
              </div>
            </div>
          </div>

          <div className="footer__links-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h4>Service Areas</h4>
            <ul>
              {areaLinks.map(a => (
                <li key={a}><a href="#quote" onClick={(e) => { e.preventDefault(); document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' }); }}>{a}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                { label: 'Services', href: '#services' },
                { label: 'Our Process', href: '#process' },
                { label: 'Project Gallery', href: '#gallery' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Get Free Quote', href: '#quote' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} HL Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
