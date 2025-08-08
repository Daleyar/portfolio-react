export default function Card({ title, description, tech = [], links = [] }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <div className="spacer"></div>
      <div>{tech.map(t => <span className="badge" key={t}>{t}</span>)}</div>
      {links.length > 0 && (
        <div className="link-row">
          {links.map(({ href, label }) => (
            <a className="btn" key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </div>
      )}
    </div>
  );
}
