export default function ItineraryTimeline({ timeline }) {
  return (
    <div className="timeline-wrap">
      {timeline.map((day) => (
        <section key={day.day} className="timeline-day">
          <h3>{day.day}</h3>
          {day.entries.map((entry) => (
            <article key={`${day.day}-${entry.time}`} className="timeline-entry">
              <p className="time">{entry.time}</p>
              <p className="title">{entry.title}</p>
              <p className="note">{entry.note}</p>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}
