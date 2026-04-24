'use client';

import { useEffect, useState } from 'react';
import { accommodation, bookingStatus, essentialsChecklist, itineraryTimeline, votingSections } from '../siteData';
import AccommodationCard from '../components/AccommodationCard';
import ItineraryTimeline from '../components/ItineraryTimeline';
import SectionHeader from '../components/SectionHeader';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function ItineraryPage() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const loadResults = async () => {
      try {
        const response = await fetch('/api/results', { cache: 'no-store' });
        if (!response.ok) return;
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadResults();
  }, []);

  return (
    <main className="page-shell itinerary-shell">
      <TopNav activeHref="/itinerary" />

      <section className="hero-block muted-bg">
        <p className="section-label">Draft - not final yet</p>
        <h2>Final itinerary</h2>
        <p>
          Once the votes are in, this becomes the one link for the weekend. Keep it bookmarked, don&apos;t say I didn&apos;t
          tell you.
        </p>
      </section>

      <section className="itinerary-top-grid">
        <AccommodationCard accommodation={accommodation} />
        <aside className="essentials-card">
          <p className="section-label">Things to bring</p>
          <h3>Weekend essentials</h3>
          <ul>
            {essentialsChecklist.map((item) => (
              <li key={item}>
                <span className="material-symbols-outlined">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="fine-print">Pack smart now so Sunday-you doesn&apos;t spiral later.</p>
        </aside>
      </section>

      <section className="vote-section standings-card">
        <SectionHeader title="Voting standings" label="Live" icon="leaderboard" subtitle="Quick snapshot of what's leading right now" />
        {results?.voterCount ? (
          <div className="standings-mini-grid">
            {votingSections.slice(0, 3).map((section) => {
              const entries = Object.entries(results.tally?.[section.key] || {});
              const [winner, count] = entries.sort((a, b) => b[1] - a[1])[0] || [];
              const winnerLabel = section.options.find((option) => option.id === winner)?.title || winner;

              return (
                <article key={section.key} className="standings-mini-item">
                  <p>{section.title}</p>
                  <strong>{winnerLabel || 'No picks yet'}</strong>
                  <small>{count ? `${count} votes` : '0 votes'}</small>
                </article>
              );
            })}
          </div>
        ) : (
          <p>No votes yet. Standings will show once submissions start rolling in.</p>
        )}
      </section>

      <section className="vote-section">
        <SectionHeader title="Weekend timeline" label="Timeline" icon="schedule" />
        <ItineraryTimeline timeline={itineraryTimeline} />
      </section>

      <section className="vote-section">
        <SectionHeader title="Bookings & status" label="Admin-ish" icon="event_available" />
        <div className="booking-grid">
          {bookingStatus.map((booking) => (
            <article key={booking.item} className="booking-card">
              <div className="booking-copy">
                <span className="booking-icon material-symbols-outlined">{booking.icon}</span>
                <div>
                  <p>{booking.item}</p>
                  <small>{booking.subtitle}</small>
                </div>
              </div>
              <span className={booking.status === 'Booked' ? 'ok' : 'pending'}>{booking.status}</span>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
