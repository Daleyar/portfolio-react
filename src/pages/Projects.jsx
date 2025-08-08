import { projects } from "../data/projects.js";
import Card from "../components/Card.jsx";
import { setTitle } from "../lib/seo.js";
export default function Projects() {
  setTitle("Projects · Ali Daley");
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <Card key={p.title} title={p.title} description={p.description} tech={p.tech}
            links={[p.repo ? { href: p.repo, label: "Code" } : null, p.demo ? { href: p.demo, label: "Live" } : null].filter(Boolean)} />
        ))}
      </div>
    </section>
  );
}
