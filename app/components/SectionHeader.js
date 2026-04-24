export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="section-header">
      {label ? <p className="section-label">{label}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
