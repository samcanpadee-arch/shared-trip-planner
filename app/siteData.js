export const accommodation = {
  label: 'Base Camp',
  status: 'Booked',
  name: 'Yarra Glen Airbnb Estate',
  dates: 'June 26 – June 28, 2026',
  address: 'TBC — sent via Signal',
  note: "Check-in at 3:00 PM. Don't be the guy who shows up early and expects a tour.",
  linkLabel: 'Airbnb link',
  link: 'https://www.airbnb.com.au/rooms/1561866387856977252?source_impression_id=p3_1776992856_P3BRBi61hmW3JbmH'
};

export const votingSections = [
  {
    key: 'fridayNight',
    title: 'Friday night',
    subtitle: 'The Arrival',
    icon: '🍷',
    options: [
      {
        id: 'friday-pizza-oven',
        title: 'Woodfire Pizza Oven Night',
        description: 'Artisanal bases, questionable toppings, and a high risk of someone burning fingerprints off.',
        meta: ['7:00 PM', 'Low'],
        vibe: 'High stakes'
      },
      {
        id: 'friday-bbq',
        title: 'Standard BBQ Blowout',
        description: "Sausages, steaks, and Vihan complaining about how they're cooked. Reliable, classic, safe.",
        meta: ['7:30 PM', 'Low'],
        vibe: 'Safe bet'
      }
    ]
  },
  {
    key: 'saturdayMorning',
    title: 'Saturday morning',
    subtitle: 'Controlled Chaos',
    icon: '☀️',
    options: [
      {
        id: 'sat-morning-clay',
        title: 'Clay Shooting',
        description: "Guns, countryside, and Vihan's slack of hand-eye coordination.",
        meta: ['Est. $90 pp'],
        vibe: 'Sophisticated sipping pre-game'
      },
      {
        id: 'sat-morning-paintball',
        title: 'Paintball',
        description: 'Bruises and brotherhood. Mostly just bruises though.',
        meta: ['Est. $60 pp'],
        vibe: 'Likely to result in a fine'
      },
      {
        id: 'sat-morning-sleep',
        title: 'Sleep & Chill',
        description: 'For the weak. We leave you at the house with a packet of crisps.',
        meta: ['Free (emotional cost only)'],
        vibe: 'Recovery mode'
      }
    ]
  },
  {
    key: 'saturdayLunch',
    title: 'Saturday lunch / winery',
    subtitle: 'Long Lunch',
    icon: '🍽️',
    options: [
      {
        id: 'sat-lunch-yering',
        title: 'Yering Station',
        description: 'Big vineyard energy, polished long lunch, great Pinot options.',
        meta: ['1:00 PM', '$35 pp tasting'],
        vibe: 'Sophisticated sipping'
      },
      {
        id: 'sat-lunch-rochford',
        title: 'Rochford Wines',
        description: 'Set menu approach and fewer choices for chaos management.',
        meta: ['12:30 PM', '$95 pp dinner menu'],
        vibe: 'Premium lock-in'
      },
      {
        id: 'sat-lunch-pub',
        title: 'Yarra Valley Grand Hotel',
        description: 'Pub classics, less ceremony, easier for all tastes.',
        meta: ['1:00 PM', 'Pay your own'],
        vibe: 'Casual kings'
      }
    ]
  },
  {
    key: 'saturdayDrinks',
    title: 'Saturday afternoon drinks',
    subtitle: 'Gin & Juice',
    icon: '🍸',
    options: [
      {
        id: 'sat-drinks-four-pillars',
        title: 'Four Pillars Distillery',
        description: 'The legendary Bloody Shiraz gin awaits. We have a booking for 2:30 PM.',
        meta: ['2:30 PM', '$35 pp'],
        vibe: 'Deep vibes only'
      },
      {
        id: 'sat-drinks-watts',
        title: 'Watts River Brewing',
        description: 'Craft beers, outdoor tables, very acceptable afternoon pivot.',
        meta: ['Flexible', 'Pay as you go'],
        vibe: 'Casual kings'
      }
    ]
  },
  {
    key: 'saturdayNight',
    title: 'Saturday night',
    subtitle: 'Main Character Dinner',
    icon: '🌙',
    options: [
      {
        id: 'sat-night-rochford',
        title: 'Dinner at Rochford',
        description: 'Set menu, polished room, and an easy group booking.',
        meta: ['7:30 PM', '$95 pp'],
        vibe: 'Premium plan'
      },
      {
        id: 'sat-night-house',
        title: 'House Dinner Round Two',
        description: 'Back at base camp. More chaotic but cheaper and looser.',
        meta: ['8:00 PM', '$45 pp'],
        vibe: 'Mandatory fun'
      }
    ]
  },
  {
    key: 'sundayRecovery',
    title: 'Sunday recovery',
    subtitle: 'Soft Landing',
    icon: '🥐',
    options: [
      {
        id: 'sun-recovery-brunch',
        title: 'Recovery Brunch',
        description: 'Coffee, carbs and no loud decisions before noon.',
        meta: ['11:00 AM', '$30 pp'],
        vibe: 'Recovery mode'
      },
      {
        id: 'sun-recovery-sanctuary',
        title: 'Healesville Sanctuary',
        description: 'Wholesome animal reset before heading home.',
        meta: ['10:00 AM', '$54 pp'],
        vibe: 'Nature break'
      },
      {
        id: 'sun-recovery-home',
        title: 'Drive Home Early',
        description: 'Skip the fanfare and reclaim Sunday afternoon.',
        meta: ['Anytime'],
        vibe: 'Quiet exit'
      }
    ]
  }
];

export const budgetOptions = [
  { id: 'budget-tight', label: 'Keep it lean ($150-ish)' },
  { id: 'budget-mid', label: 'Comfortable ($250-ish)' },
  { id: 'budget-premium', label: 'Premium weekend ($350+)' }
];

export const hardNoOptions = [
  'No early starts before 9 AM',
  'No paintball',
  'No spirits',
  'No shared rooms',
  'No winery marathon'
];

export const costGuide = [
  { item: 'Pizza Oven Hire', when: 'Friday Night', cost: '$45pp', notes: 'Unlimited wood-fired glory.' },
  { item: 'Clay Shooting', when: 'Saturday Morning', cost: '$120pp', notes: 'Includes safety briefing and 25 targets.' },
  { item: 'Paintball', when: 'Saturday Morning', cost: '$85pp', notes: 'Starter pack of 200 paintballs.' },
  { item: 'Winery Tastings', when: 'Saturday Lunch', cost: '$20–30 per venue', notes: 'Usually redeemable on bottle purchase.' },
  { item: 'Four Pillars Gin Tasting', when: 'Saturday Afternoon', cost: '$35pp', notes: 'A flight of award-winning gin.' },
  { item: 'Dinner at Rochford', when: 'Saturday Night', cost: '$95pp', notes: 'Set menu excluding drinks.' }
];

export const itineraryTimeline = [
  {
    day: 'Friday — Settling In',
    entries: [
      { time: '18:00', title: 'Arrival & Base Camp Check-in', note: 'Confirmed' },
      { time: '20:30', title: 'Group Dinner (TBC)', note: 'Voting in progress' }
    ]
  },
  {
    day: 'Saturday — The Main Event',
    entries: [
      { time: '10:00', title: 'Breakfast & Prep', note: 'Confirmed' },
      { time: '13:00', title: 'Winery Tour & Long Lunch', note: 'Pending vote' }
    ]
  },
  {
    day: 'Sunday — Recovery',
    entries: [{ time: '11:00', title: 'Recovery Brunch (TBC)', note: 'Likely if morale allows' }]
  }
];

export const bookingStatus = [
  { item: 'Airbnb Deposit', status: 'Booked' },
  { item: 'Shuttle Bus', status: 'Not booked' },
  { item: 'Lunch Reservation', status: 'Booked' },
  { item: 'Activity Tickets', status: 'Not booked' }
];

export const shortlistPlaces = [
  {
    name: 'Luxury Airbnb Estate',
    type: 'Accommodation',
    description: "The command centre: fire pit, pool, and enough space to avoid each other's snoring.",
    linkLabel: 'Airbnb link',
    link: accommodation.link
  },
  {
    name: 'Yering Station',
    type: 'Winery',
    description: "Victoria's first vineyard. Premium Pinot Noir and long-lunch energy.",
    linkLabel: 'Visit website',
    link: 'https://www.yering.com/'
  },
  {
    name: 'Four Pillars Distillery',
    type: 'Spirits',
    description: 'Mandatory stop for Bloody Shiraz Gin and elite post-lunch banter.',
    linkLabel: 'Visit website',
    link: 'https://www.fourpillarsgin.com/'
  },
  {
    name: 'Rochford Wines',
    type: 'Dinner',
    description: 'Strong candidate for Saturday dinner with easy group booking options.',
    linkLabel: 'Visit website',
    link: 'https://www.rochfordwines.com/'
  },
  {
    name: 'Yarra Valley Grand Hotel',
    type: 'Pub',
    description: 'Casual fallback with broad menu coverage and fewer logistical meltdowns.',
    linkLabel: 'Visit website',
    link: 'https://www.yarravalleygrand.com.au/'
  },
  {
    name: 'Healesville Sanctuary',
    type: 'Recovery',
    description: 'Wholesome Sunday reset before everyone heads home.',
    linkLabel: 'Visit website',
    link: 'https://www.zoo.org.au/healesville/'
  }
];
