import CostGuideTable from '../components/CostGuideTable';
import SectionHeader from '../components/SectionHeader';
import TopNav from '../components/TopNav';
import { costGuide, shortlistPlaces } from '../siteData';

export default function PlacesPage() {
  return (
    <main className="page-shell">
      <TopNav activeHref="/places" />

      <section className="hero-block muted-bg">
        <p className="section-label">Cost + shortlist</p>
        <h2>Places to lock in</h2>
        <p>A curated shortlist of places that match the vibe, budget, and chaos tolerance.</p>
      </section>

      <section className="vote-section">
        <SectionHeader label="Cost" title="Cost guide" subtitle="Indicative only. Please do not invoice Sam." />
        <CostGuideTable rows={costGuide} />
      </section>

      <section className="vote-section">
        <SectionHeader label="Places" title="The shortlist" subtitle="Tap through to check details before we lock bookings." />
        <div className="places-grid">
          {shortlistPlaces.map((place) => (
            <article key={place.name} className="place-card">
              <p className="place-type">{place.type}</p>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <a href={place.link} target="_blank" rel="noreferrer">
                {place.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
