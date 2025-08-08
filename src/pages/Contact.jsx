import { setTitle } from "../lib/seo.js";
export default function Contact() {
  setTitle("Contact · Ali Daley");
  return (
    <section>
      <h2>Contact</h2>
      <p className="muted">Want to collaborate or have a role in mind? Reach out.</p>
      <div className="spacer"></div>
      <ul>
        <li>Email: <a href="mailto:ali@example.com">ali@example.com</a></li>
        <li>GitHub: <a href="https://github.com/Daleyar">github.com/Daleyar</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com">linkedin.com</a></li>
      </ul>
    </section>
  );
}
