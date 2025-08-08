import { setTitle } from "../lib/seo.js";
export default function Home() {
  setTitle("Home · Ali Daley");
  return (
    <section>
      <h1>Hey, I'm Ali — Full-stack Developer</h1>
      <p className="muted">
        I build clean, reliable backends in Java and frontend experiences with TypeScript and HTML.
        This portfolio is a fast, minimal React (Vite) app deployed to GitHub Pages.
      </p>
      <div className="spacer"></div>
      <p>
        Explore my <a href="/projects">projects</a>, see my{" "}
        <a href="/experience">experience</a>, or <a href="/contact">get in touch</a>.
      </p>
    </section>
  );
}
