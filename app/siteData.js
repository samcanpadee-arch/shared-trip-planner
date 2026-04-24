export const accommodation = {
  label: 'Base Camp',
  status: 'Booked',
  name: 'Yarra Glen Airbnb Estate',
  dates: 'June 26 – June 28, 2026',
  address: 'TBC — sent via Signal',
  note: "Check-in at 3:00 PM. Don't be the guy who shows up early and expects a tour.",
  linkLabel: 'Airbnb link',
  link: 'https://www.airbnb.com.au/rooms/1561866387856977252?source_impression_id=p3_1776992856_P3BRBi61hmW3JbmH',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWOjNCqmZTNLeJ1zl8g2cfwyETsA6rEuKHYT5V2QxA8iX7lmvfZqPNFKMN47SIq9akWxiYWs00tt7C_aWSZxIc3rzgDOP3d8eeJDozHxu5d7MRplHkwSp1Y2QYRmouj3g6BCWjsLjRPmOrqnQ1KCo9awWFQ1cX2IvhN5zzAxYIoT502d-AQH4jrcy9uoGiPjC1Tkh5XiQQ5nMO2osRohSDpZmw8rf8foV410LqiQCg2h2cg3PZh3Cq57G1gO5m9P3N1QPk41oDnoM',
  imageAlt: 'Luxury countryside Airbnb house in Yarra Valley at sunset'
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
        vibe: 'High stakes',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCrH-m34CP_D9VNZKMhnBwjPcte38Qjx4EBE6jckRKWxfxuT6eMdNcgVz_YZV6Ifh2cbqkckhF2nVRmDf1Va0IUjjJs1C4_aYgb79KalscZHwnJG-l53cdeZPyPEtnM7V3B1xF27YtjRJAq8CrLqq3OAaaJrlyvclweDvIbMEYd-Mb1Zrv9LHdmSwNt6vIxX1DNhH6Ow3hcFPXER92f4AAq3kfeUuq82SRCs8E3N0YAVBHZdv7ZGbWTwaNsarDU9gdn2IpA9cfXJgw'
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
        vibe: 'Sophisticated sipping pre-game',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBN1zmxIa2-q4tW-XEuA-xtRA-31WJ_OdR00pgLEyQlNMD82gdI80E01MvXiq-Uhl3N2Zb7T6JiTxFrn9HxeFO6wdTO3xJFUeWmqcfD4W9CiflxixaRNu7c-KUe_Bgnmf5t6XQZMw6mHlRhVWjeanMk-Ji1CJHbgy_vt4-cTt798X495_60OVclDXqjxu1mOKkCvd7xAJP-zSVHwCo8MU0V8Q7efpFOUVsVOvqTd77hGqMbW4PiPJlSjKbjVz_JAq7cMHHfif4jvfQ'
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
        vibe: 'Sophisticated sipping',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD6zVl9_IxBAVuPnEMbSeodLMBs-bnqy7DivYP9ssvdSwb944tFWxmbpbi27oe6NQDWtK2-3opyA5SjLETQ1KGXV0VVRkAFbBPh12OakncL62B_n51D1HsiJdY9f7bTdSlX4NpzeBmfjl4BqLxU2sDiKbyQGrjuX85xzr0F4rJJ9y3JdUhREMxR5TA1mYoYvnmfQ7Jo2GvC6bWSgr4Zye84JT6sSc2tOv5eCrdBgoOReoULEnZBQMVIweDjT_5OTPOcaCorxvLQYBw'
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
        vibe: 'Deep vibes only',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDLLpHdOLMWrQqUL_l-lL6jzKxBmolYD14UoCVc9phlOzNgSuUpjAa2meMacN46VZoS6rW2QCt-yRl31bh_EVoL8DyZ2rtQRn2OQcZyNa-Xp6t_KLroVSa_CpdQZ6CK0MruG-6O1ZiYjxwK_WsmyIe-KQ_oLmUy0GYrXMclewnNTNqPpNbrx57N86oZandc_pTvV5TfP-CeLHA_rdVvSFqm-qsJrxUqI-AnCDyj72DNdZq63FY_LBPozjFmfRr2qQ8ttLCnUB56OZQ'
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
        vibe: 'Premium plan',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDELENszvK8vbg4vXPD_ei24zwcphcQXXc7skWuGTbxPRULixL9cyf3EFQIEQlUGeo5vEd_XlVbUNa6kvKTW9gVRi_xKV2cvt2MHxhqiotv8FHj_ekbFwG9GXfhTdGdO8dIiOxB3c19jbixMZSSCbF4mmXUtBvwCSAQLtxd1OnJKmAjeL6kuBXCyUzlCSoc8JNjGQB2qS6KeeIH3Z6x54w6mO9nqN001OB1GapQe82Cwuhq8hvAPqEW_lmpK6-Mre-ku3J6CvlYT-w'
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
        vibe: 'Recovery mode',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD_c1XucOuTnd28YfwCe_ivREUyV5FNlTUVStCcNHhbx7lf6G3j9rUydUkEhRo2MOKhDG_G0ixvcdh0zW4q5Q7Qr9Q8XjrpaD-yIczUr2gOp5HR8BUqAnIJqtNH_ubmI_b-Ok-wDv4Lldiq2Ps-vWIXgs_RbwEEPtoIm-H-raaAMvXPuEcTZR3qwXnShTW8YuqsH8d1U_NeCVD3KBhlIIiwKlZYcC6IK0j7cN9WzY_ltjZUb4anlI2xuWbyl1zMuZBDAptsjdJoC5Y'
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
    link: accommodation.link,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAOtbpPNDunp6x3CIsV00p0feXtMwD09UY3-DPx81Qdpj82fAx09o0q94XyDzk053sFMsJkAsY-C2hCuO8YZzwLz9fuFe1fWUta0a8d7TtLDcboKEcQwKX0GHvbB2IpONF1BIsB1RjSNYzLDaCUwq4ceyA4qb1WDAE7lkS-BG-oi_J1fhLI_ifpTFaNoBqEAaGqHIyLYSG20sm3b9j_BxKxj7vUDMc1XPUg5SKyUy0PJRfjP3Qjvk5GM2vacto0zez_k3FcCfEDf0'
  },
  {
    name: 'Yering Station',
    type: 'Winery',
    description: "Victoria's first vineyard. Premium Pinot Noir and long-lunch energy.",
    linkLabel: 'Visit website',
    link: 'https://www.yering.com/',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6zVl9_IxBAVuPnEMbSeodLMBs-bnqy7DivYP9ssvdSwb944tFWxmbpbi27oe6NQDWtK2-3opyA5SjLETQ1KGXV0VVRkAFbBPh12OakncL62B_n51D1HsiJdY9f7bTdSlX4NpzeBmfjl4BqLxU2sDiKbyQGrjuX85xzr0F4rJJ9y3JdUhREMxR5TA1mYoYvnmfQ7Jo2GvC6bWSgr4Zye84JT6sSc2tOv5eCrdBgoOReoULEnZBQMVIweDjT_5OTPOcaCorxvLQYBw'
  },
  {
    name: 'Four Pillars Distillery',
    type: 'Spirits',
    description: 'Mandatory stop for Bloody Shiraz Gin and elite post-lunch banter.',
    linkLabel: 'Visit website',
    link: 'https://www.fourpillarsgin.com/',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLLpHdOLMWrQqUL_l-lL6jzKxBmolYD14UoCVc9phlOzNgSuUpjAa2meMacN46VZoS6rW2QCt-yRl31bh_EVoL8DyZ2rtQRn2OQcZyNa-Xp6t_KLroVSa_CpdQZ6CK0MruG-6O1ZiYjxwK_WsmyIe-KQ_oLmUy0GYrXMclewnNTNqPpNbrx57N86oZandc_pTvV5TfP-CeLHA_rdVvSFqm-qsJrxUqI-AnCDyj72DNdZq63FY_LBPozjFmfRr2qQ8ttLCnUB56OZQ'
  },
  {
    name: 'Yarra Valley Clay Target Club',
    type: 'Activity',
    description: 'Classic bucks chaos candidate: shotguns, scorecards, and instant banter.',
    linkLabel: 'View details',
    link: 'https://www.claytarget.com.au/',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBN1zmxIa2-q4tW-XEuA-xtRA-31WJ_OdR00pgLEyQlNMD82gdI80E01MvXiq-Uhl3N2Zb7T6JiTxFrn9HxeFO6wdTO3xJFUeWmqcfD4W9CiflxixaRNu7c-KUe_Bgnmf5t6XQZMw6mHlRhVWjeanMk-Ji1CJHbgy_vt4-cTt798X495_60OVclDXqjxu1mOKkCvd7xAJP-zSVHwCo8MU0V8Q7efpFOUVsVOvqTd77hGqMbW4PiPJlSjKbjVz_JAq7cMHHfif4jvfQ'
  },
  {
    name: 'Rochford Wines',
    type: 'Dinner',
    description: 'Strong candidate for Saturday dinner with easy group booking options.',
    linkLabel: 'Visit website',
    link: 'https://www.rochfordwines.com/',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDELENszvK8vbg4vXPD_ei24zwcphcQXXc7skWuGTbxPRULixL9cyf3EFQIEQlUGeo5vEd_XlVbUNa6kvKTW9gVRi_xKV2cvt2MHxhqiotv8FHj_ekbFwG9GXfhTdGdO8dIiOxB3c19jbixMZSSCbF4mmXUtBvwCSAQLtxd1OnJKmAjeL6kuBXCyUzlCSoc8JNjGQB2qS6KeeIH3Z6x54w6mO9nqN001OB1GapQe82Cwuhq8hvAPqEW_lmpK6-Mre-ku3J6CvlYT-w'
  },
  {
    name: 'Yarra Valley Grand Hotel',
    type: 'Pub',
    description: 'Casual fallback with broad menu coverage and fewer logistical meltdowns.',
    linkLabel: 'Visit website',
    link: 'https://www.yarravalleygrand.com.au/',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_c1XucOuTnd28YfwCe_ivREUyV5FNlTUVStCcNHhbx7lf6G3j9rUydUkEhRo2MOKhDG_G0ixvcdh0zW4q5Q7Qr9Q8XjrpaD-yIczUr2gOp5HR8BUqAnIJqtNH_ubmI_b-Ok-wDv4Lldiq2Ps-vWIXgs_RbwEEPtoIm-H-raaAMvXPuEcTZR3qwXnShTW8YuqsH8d1U_NeCVD3KBhlIIiwKlZYcC6IK0j7cN9WzY_ltjZUb4anlI2xuWbyl1zMuZBDAptsjdJoC5Y'
  }
];
