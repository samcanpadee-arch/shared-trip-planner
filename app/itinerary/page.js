import { accommodation, bookingStatus, itineraryTimeline } from '../siteData';
import AccommodationCard from '../components/AccommodationCard';
import ItineraryTimeline from '../components/ItineraryTimeline';
import SectionHeader from '../components/SectionHeader';
import TopNav from '../components/TopNav';

export default function ItineraryPage() {
  return (
    <main className="page-shell itinerary-shell">
      <TopNav activeHref="/itinerary" />

      <section className="hero-block muted-bg">
        <p className="section-label">Draft — not final yet</p>
        <h2>Final itinerary</h2>
        <p>
          Once the votes are in, this becomes the one link for the weekend. Keep it bookmarked, don&apos;t say I didn&apos;t
          tell you.
        </p>
      </section>

      <AccommodationCard accommodation={accommodation} />

      <section className="vote-section">
        <SectionHeader title="Weekend timeline" label="Timeline" />
        <ItineraryTimeline timeline={itineraryTimeline} />
      </section>

      <section className="vote-section">
        <SectionHeader title="Bookings & status" label="Admin-ish" />
        <div className="booking-grid">
          {bookingStatus.map((booking) => (
            <article key={booking.item} className="booking-card">
              <p>{booking.item}</p>
              <span className={booking.status === 'Booked' ? 'ok' : 'pending'}>{booking.status}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
