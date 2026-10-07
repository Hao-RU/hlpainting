import type { PaintColour } from '../paintColours';
import './PaintChip.css';

export default function PaintChip({ name, code, hex }: PaintColour) {
  return (
    <div className="paint-chip" title={`This section is Dulux ${name} (${code})`}>
      <span className="paint-chip__swatch" style={{ background: hex }} aria-hidden="true" />
      <span className="paint-chip__text">
        <span className="paint-chip__name">Dulux {name}</span>
        <span className="paint-chip__code">{code}</span>
      </span>
    </div>
  );
}
