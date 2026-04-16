import { MessageSquare, MapPin, FileText, ThumbsUp } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Initial Consultation',
    description: 'Tell us about your project, colour preferences, timeline, and any special requirements. We listen carefully to get it right.',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'On-Site Assessment',
    description: 'We visit your property to inspect surfaces, measure the scope, and identify any preparation work needed before painting.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Detailed Quote',
    description: 'You receive a clear, itemised quote with no hidden costs. We break down every step so you know exactly what to expect.',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Flawless Execution',
    description: 'Our team delivers meticulous work on schedule. We check in throughout the project and guarantee your complete satisfaction.',
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="process__header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">A Simple, Transparent Process</h2>
          <p className="section-subtitle">
            From first call to final walkthrough, we keep you informed and in control at every stage.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div key={step.number} className="process-step">
              <div className="process-step__top">
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__icon">
                  <step.icon size={22} />
                </div>
                {i < steps.length - 1 && <div className="process-step__connector" />}
              </div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
