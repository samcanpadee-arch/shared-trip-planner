import Link from 'next/link';

const tabs = [
  { href: '/', isVote: true, activeHref: '/', label: 'Vote', icon: 'how_to_vote' },
  { href: '/itinerary', activeHref: '/itinerary', label: 'Itinerary', icon: 'event_note' }
];

export default function TopNav({ activeHref }) {
  return (
    <>
      <header className="top-app-bar">
        <div className="top-app-inner">
          <h1>Bucks '26</h1>
          <nav className="primary-nav desktop-nav" aria-label="Primary">
            {tabs.map((tab) => (
              tab.isVote ? (
                <a key={tab.href} href={tab.href} className={activeHref === tab.activeHref ? 'active' : ''}>
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  <span>{tab.label}</span>
                </a>
              ) : (
                <Link key={tab.href} href={tab.href} className={activeHref === tab.activeHref ? 'active' : ''}>
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  <span>{tab.label}</span>
                </Link>
              )
            ))}
          </nav>
        </div>
      </header>

      <nav className="mobile-bottom-nav primary-nav" aria-label="Primary">
        {tabs.map((tab) => (
          tab.isVote ? (
            <a key={tab.href} href={tab.href} className={activeHref === tab.activeHref ? 'active' : ''}>
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span>{tab.label}</span>
            </a>
          ) : (
            <Link key={tab.href} href={tab.href} className={activeHref === tab.activeHref ? 'active' : ''}>
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          )
        ))}
      </nav>
    </>
  );
}
