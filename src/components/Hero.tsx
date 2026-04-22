import { ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/Frontpage.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge">
            <Star size={14} fill="currentColor" />
            <span>Top Rated Painters in Sydney</span>
          </div>

          <h1 className="hero__title">
            Transform Your Space
            <span className="hero__title-accent"> with Expert Painters</span>
          </h1>

          <p className="hero__subtitle">
            Premium residential and commercial painting services across Sydney.
            Meticulous preparation, flawless finishes, and a team you can trust
            to deliver on time, every time.
          </p>

          <div className="hero__actions">
            <a href="#quote" className="btn btn-primary btn--lg" onClick={(e) => { e.preventDefault(); document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get Your Free Quote
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-outline btn--lg" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Our Services
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <Shield size={18} />
              <span>Licensed & Insured</span>
            </div>
            <div className="hero__trust-item">
              <Clock size={18} />
              <span>On-Time Guarantee</span>
            </div>
            <div className="hero__trust-item">
              <Award size={18} />
              <span>Workmanship Warranty</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <img src={heroImg} alt="HL Painting project" className="hero__card-img" />
          </div>
          <div className="hero__floating-card">
            <div className="hero__floating-icon">
              <Shield size={20} />
            </div>
            <div>
              <span className="hero__floating-title">100% Satisfaction</span>
              <span className="hero__floating-sub">Guaranteed or we fix it free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
