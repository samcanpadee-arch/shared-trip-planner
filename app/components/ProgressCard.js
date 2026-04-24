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

export default function ProgressCard({ form }) {
  const checks = sectionOrder.map(([key, label]) => ({
    label,
    done: Boolean(form[key])
  }));

  return (
    <aside className="progress-card">
      <h3>Voting progress</h3>
      <p>Finalize the scheme</p>
      <ul>
        {checks.map((item) => (
          <li key={item.label}>
            <span>{item.label} {item.done ? 'selected' : 'missing'}</span>
            <strong>{item.done ? '✓' : '—'}</strong>
          </li>
        ))}
      </ul>
      <p className="fine-print">
        Costs are indicative only. This is not a checkout. Nobody is buying clay shooting through this website.
      </p>
    </aside>
  );
}
