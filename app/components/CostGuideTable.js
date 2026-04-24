export default function CostGuideTable({ rows }) {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>When</th>
            <th>Indicative Cost</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.item}>
              <td>{row.item}</td>
              <td>{row.when}</td>
              <td>{row.cost}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
