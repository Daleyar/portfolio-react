import { experience } from "../data/experience.js";
import Card from "../components/Card.jsx";
import { setTitle } from "../lib/seo.js";
export default function Experience() {
  setTitle("Experience · Ali Daley");
  return (
    <section>
      <h2>Experience</h2>
      <div className="grid">
        {experience.map(role => (
          <Card key={role.title + role.company}
                title={`${role.title} — ${role.company}`}
                description={`${role.period} · ${role.summary}`}
                tech={role.tech}
                links={role.links || []} />
        ))}
      </div>
    </section>
  );
}
