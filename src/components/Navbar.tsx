import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/companylogo_transparent.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="HL Painting" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">HL Painting</span>
            <span className="navbar__logo-sub">Residential & Commercial Painting Specialist</span>
          </div>
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a href="tel:0488890909" className="navbar__phone">
            <Phone size={16} />
            <span>0488 890 909</span>
          </a>
          <a href="#quote" className="btn btn-primary navbar__cta" onClick={(e) => { e.preventDefault(); handleNav('#quote'); }}>
            Get Free Quote
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <a href="tel:0488890909" className="navbar__phone">
            <Phone size={18} />
            <span>0488 890 909</span>
          </a>
          <a href="#quote" className="btn btn-primary" style={{ width: '100%' }} onClick={(e) => { e.preventDefault(); handleNav('#quote'); }}>
            Get Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
