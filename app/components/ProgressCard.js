const sectionOrder = [
  ['name', 'Name'],
  ['fridayNight', 'Friday'],
  ['saturdayMorning', 'Saturday morning'],
  ['saturdayLunch', 'Lunch'],
  ['saturdayDrinks', 'Drinks'],
  ['saturdayNight', 'Saturday night'],
  ['sundayRecovery', 'Sunday'],
  ['budgetComfort', 'Budget']
];

const avatar =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD3f4LbRPoFAx-yQgAMfeIZ3wIR5tR_OXhMsZwg0Jvl78UjKv5_U9TZ02NpoeLC-CWrmmugsyfb8cbOdLPkVYZbOvTNO10m0r6AZJoKgXbJ-_oBpdwquAbV3n9gQSoWAYbUSewRs3VMLfZTbISLmaT5nlUiPNQuckylv47jpJUNllNmPiGOiQeEHWJ_wzo1i1UOTQzkBh9YTzPd6ab8QABjaKxup2UZYcrEVvncsOEmAM0CBi5LLRstQFYwuRaZnIoFuiPOTnTKwSE';

export default function ProgressCard({ form }) {
  const checks = sectionOrder.map(([key, label]) => ({
    label,
    done: Boolean(form[key])
  }));

  return (
    <aside className="progress-card">
      <div className="profile-row">
        <img src={avatar} alt="Vihan" className="profile-avatar" />
        <div>
          <h3>Voting progress</h3>
          <p>Finalize the scheme</p>
        </div>
      </div>
      <ul>
        {checks.map((item) => (
          <li key={item.label}>
            <span>
              {item.label} {item.done ? 'selected' : 'missing'}
            </span>
            <strong>{item.done ? '✓' : '—'}</strong>
          </li>
        ))}
      </ul>
      <p className="fine-print">Costs are indicative only. This is not a checkout.</p>
    </aside>
  );
}
