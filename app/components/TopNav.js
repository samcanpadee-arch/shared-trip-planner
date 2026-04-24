import Link from 'next/link';

const tabs = [
  { key: 'vote', activeHref: '/', label: 'Vote', icon: 'how_to_vote' },
  { href: '/itinerary', activeHref: '/itinerary', label: 'Itinerary', icon: 'event_note' }
];

export default function TopNav({ activeHref }) {
  const scrollToVoteForm = () => {
    const voteForm = document.getElementById('vote-form');
    if (voteForm) {
      voteForm.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="top-app-bar">
        <div className="top-app-inner">
          <h1>Bucks '26</h1>
          <nav className="primary-nav desktop-nav" aria-label="Primary">
            {tabs.map((tab) => (
              tab.href ? (
                <Link key={tab.href} href={tab.href} className={activeHref === tab.activeHref ? 'active' : ''}>
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  <span>{tab.label}</span>
                </Link>
              ) : (
                <button key={tab.key} type="button" onClick={scrollToVoteForm} className={activeHref === tab.activeHref ? 'active' : ''}>
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              )
            ))}
          </nav>
        </div>
      </header>

      <nav className="mobile-bottom-nav primary-nav" aria-label="Primary">
        {tabs.map((tab) => (
          tab.href ? (
            <Link key={tab.href} href={tab.href} className={activeHref === tab.activeHref ? 'active' : ''}>
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          ) : (
            <button key={tab.key} type="button" onClick={scrollToVoteForm} className={activeHref === tab.activeHref ? 'active' : ''}>
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          )
        ))}
      </nav>
    </>
  );
}
