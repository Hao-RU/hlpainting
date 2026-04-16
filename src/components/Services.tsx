import { Home, Building2, Layers, Paintbrush, Warehouse, Hexagon, ArrowUpRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Home,
    title: 'Residential Painting',
    description: 'Flawless interiors and weather-tough exteriors for houses and units. Crisp lines, smooth finishes, and spotless clean-up every time.',
    features: ['Interior & Exterior', 'Colour Consultation', 'Surface Preparation'],
  },
  {
    icon: Building2,
    title: 'Commercial Painting',
    description: 'Professional finishes for shops, offices, and medical clinics. We work flexible hours so your business never skips a beat.',
    features: ['After-Hours Available', 'Minimal Disruption', 'Brand Colour Matching'],
  },
  {
    icon: Layers,
    title: 'Strata Unit Painting',
    description: 'Coordinated works across common areas and facades. We handle resident notices, staged access, and council compliance.',
    features: ['Common Areas', 'Facade Restoration', 'Staged Scheduling'],
  },
  {
    icon: Paintbrush,
    title: 'Roof Painting',
    description: 'Complete wash, repair, and protective coating for tiled or metal roofs. Extend your roof\'s life and boost street appeal.',
    features: ['Tile & Metal Roofs', 'Pressure Washing', 'Protective Coatings'],
  },
  {
    icon: Warehouse,
    title: 'Garage Painting',
    description: 'Brighten and protect your garage with durable wall, door, and trim finishes designed to withstand daily wear.',
    features: ['Walls & Trims', 'Door Finishes', 'Durable Coatings'],
  },
  {
    icon: Hexagon,
    title: 'Epoxy Flooring',
    description: 'Industrial-strength floors for garages and workspaces. Seamless, easy to clean, and built to handle heavy traffic.',
    features: ['Seamless Finish', 'Chemical Resistant', 'Custom Colours'],
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Painting Services Built<br />Around Your Needs</h2>
          <p className="section-subtitle">
            From a single room refresh to a full commercial repaint, our licensed team
            delivers precise, lasting results across every surface.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-card__icon">
                <service.icon size={24} />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#quote" className="service-card__link" onClick={(e) => { e.preventDefault(); document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get a Quote <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
