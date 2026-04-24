export default function AccommodationCard({ accommodation }) {
  return (
    <article className="accommodation-card">
      <p className="section-label">{accommodation.label}</p>
      <div className="accommodation-row">
        <h3>{accommodation.name}</h3>
        <a href={accommodation.link} target="_blank" rel="noreferrer">
          {accommodation.linkLabel}
        </a>
      </div>
      <p className="status">Status: {accommodation.status}</p>
      <div className="meta-grid">
        <div>
          <p>Dates</p>
          <strong>{accommodation.dates}</strong>
        </div>
        <div>
          <p>Address</p>
          <strong>{accommodation.address}</strong>
        </div>
      </div>
      <p className="hint">{accommodation.note}</p>
    </article>
  );
}
