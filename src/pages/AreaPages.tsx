import { ArrowRight, Award, ClipboardList, MapPin, Palette, Phone, UserRound } from 'lucide-react';
import './AreaPages.css';
import { QUOTE_PAGE } from '../lib/site';
import { AREAS_PAGE, REGIONS, SUBURBS, suburbBySlug, suburbPath, type Suburb } from '../lib/suburbs';

// What every job comes with, said the same way on every area page.
const PROMISES = [
  { icon: Award, title: '5-year workmanship warranty', text: 'In writing, on every job.' },
  { icon: UserRound, title: 'The owner on every job', text: 'You deal with the person doing the work.' },
  { icon: ClipboardList, title: 'A written quote', text: 'Every area and the preparation spelt out.' },
  { icon: Palette, title: 'Free colour consultation', text: 'We talk colours on site, at no charge.' },
];

function Promises() {
  return (
    <ul className="area__promises">
      {PROMISES.map(({ icon: Icon, title, text }) => (
        <li key={title}>
          <Icon size={20} />
          <span>
            <b>{title}</b>
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Ask({ place }: { place: string }) {
  return (
    <div className="area__ask">
      <h2>Painting in {place}?</h2>
      <p>Tell us about the job and we'll come and have a look, then give you a written quote. Free and no obligation.</p>
      <div className="area__ask-btns">
        <a href={QUOTE_PAGE} className="btn btn-primary btn--lg">
          Get a free quote <ArrowRight size={18} />
        </a>
        <a href="tel:0403764216" className="btn btn-outline btn--lg area__call">
          <Phone size={18} /> 0403 764 216
        </a>
      </div>
    </div>
  );
}

export function SuburbPage({ suburb }: { suburb: Suburb }) {
  const near = suburb.nearby.map(suburbBySlug).filter((s): s is Suburb => s !== undefined);
  return (
    <main className="area">
      <header className="area__head">
        <div className="container">
          <a className="area__crumb" href={AREAS_PAGE}>
            <MapPin size={14} /> Areas we paint · {suburb.region}
          </a>
          <h1 className="area__title">Painters in {suburb.name}</h1>
          <p className="area__lead">{suburb.summary}</p>
          <div className="area__head-btns">
            <a href={QUOTE_PAGE} className="btn btn-primary btn--lg">
              Get a free quote <ArrowRight size={18} />
            </a>
            <a href="tel:0403764216" className="area__head-call">
              <Phone size={16} /> 0403 764 216
            </a>
          </div>
        </div>
      </header>

      <div className="container area__body">
        <article className="area__main">
          <section>
            <h2>The homes in {suburb.name}</h2>
            <p>{suburb.homes}</p>
          </section>
          <section>
            <h2>How we paint them</h2>
            <p>{suburb.approach}</p>
          </section>
          <section>
            <h2>What we do most in {suburb.name}</h2>
            <ul className="area__focus">
              {suburb.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <Ask place={suburb.name} />
        </article>

        <aside className="area__side">
          <div className="area__card">
            <h2>Every job comes with</h2>
            <Promises />
          </div>
          {near.length > 0 && (
            <div className="area__card">
              <h2>Nearby</h2>
              <ul className="area__near">
                {near.map((s) => (
                  <li key={s.slug}>
                    <a href={suburbPath(s)}>Painters in {s.name}</a>
                  </li>
                ))}
              </ul>
              <a className="area__all" href={AREAS_PAGE}>
                All areas <ArrowRight size={14} />
              </a>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

export function AreasPage() {
  return (
    <main className="area">
      <header className="area__head">
        <div className="container">
          <span className="area__crumb">
            <MapPin size={14} /> Based in Macquarie Park
          </span>
          <h1 className="area__title">Areas we paint</h1>
          <p className="area__lead">
            Polaris is based in Macquarie Park, so we work mostly close to home: Ryde, the Lower and Upper North Shore, and Epping and
            the Hills. Pick your suburb to see how we work there.
          </p>
        </div>
      </header>

      <div className="container area__body">
        <article className="area__main">
          <div className="area__regions">
            {REGIONS.map((r) => (
              <section key={r} className="area__region">
                <h2>{r}</h2>
                <ul>
                  {SUBURBS.filter((s) => s.region === r).map((s) => (
                    <li key={s.slug}>
                      <a href={suburbPath(s)}>
                        {s.name} <ArrowRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="area__else">
            Not on the list? We take on jobs further afield too, so ask anyway.
          </p>
          <Ask place="your area" />
        </article>
        <aside className="area__side">
          <div className="area__card">
            <h2>Every job comes with</h2>
            <Promises />
          </div>
        </aside>
      </div>
    </main>
  );
}
