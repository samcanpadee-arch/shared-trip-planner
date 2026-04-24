import Link from 'next/link';

const tabs = [
  { href: '/', label: 'Vote' },
  { href: '/itinerary', label: 'Itinerary' }
];

export default function TopNav({ activeHref }) {
  return (
    <header className="top-app-bar">
      <div className="top-app-inner">
        <h1>Vihan’s Yarra Valley Bucks</h1>
        <nav>
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} className={activeHref === tab.href ? 'active' : ''}>
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
