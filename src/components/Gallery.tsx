import './Gallery.css';
import exteriorImg from '../assets/exteriorpainting1.JPEG';
import interiorImg from '../assets/interiorpainting1.png';
import commercialExtImg from '../assets/Commercialexterior1.JPEG';
import commercialIntImg from '../assets/Commercialinterior1.JPEG';
import roofImg from '../assets/roofpainting.png';

const projects = [
  { label: 'Residential Exterior', image: exteriorImg },
  { label: 'Residential Interior', image: interiorImg },
  { label: 'Commercial Exterior', image: commercialExtImg },
  { label: 'Commercial Interior', image: commercialIntImg },
  { label: 'Roof Painting', image: roofImg },
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
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
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
