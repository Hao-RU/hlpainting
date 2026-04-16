import './Gallery.css';

const projects = [
  { label: 'Residential Interior', color: '#E8DDD4', accent: '#C8956C' },
  { label: 'Modern Kitchen', color: '#D4DDE8', accent: '#6C8DC8' },
  { label: 'Heritage Exterior', color: '#DDE8D4', accent: '#7CA868' },
  { label: 'Office Fitout', color: '#E4D4E8', accent: '#9C6CB8' },
  { label: 'Strata Complex', color: '#E8E0D4', accent: '#B8946C' },
  { label: 'Epoxy Garage Floor', color: '#D4E2E8', accent: '#6CA8B8' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle">
              Every project reflects our commitment to quality, precision, and lasting beauty.
            </p>
          </div>
        </div>

        <div className="gallery__grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`gallery__item ${i === 0 ? 'gallery__item--large' : ''}`}
            >
              <div
                className="gallery__img"
                style={{
                  background: `linear-gradient(135deg, ${p.color} 0%, ${p.accent}33 100%)`,
                }}
              >
                <div
                  className="gallery__img-accent"
                  style={{
                    background: `radial-gradient(circle at 60% 40%, ${p.accent}44, transparent 70%)`,
                  }}
                />
              </div>
              <div className="gallery__overlay">
                <span className="gallery__label">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
