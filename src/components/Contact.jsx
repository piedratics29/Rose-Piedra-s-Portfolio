import SectionShell from './SectionShell.jsx';

export default function Contact() {
  return (
    <SectionShell id="contact" title="Contact" muted>
      <div className="split contact">
        <div>
          <p>
            Open to collaborations, freelance work, or full-time roles. Let&apos;s create fast,
            intuitive experiences together.
          </p>
          <div className="contact-items">
            <a className="contact-link" href="mailto:rosepiedrasingco123@gmail.com">
              rosepiedrasingco123@gmail.com
            </a>
            <a className="contact-link" href="https://github.com/piedratics29" aria-label="GitHub profile">GitHub</a>
            <a className="contact-link" href="https://www.linkedin.com/in/rose-piedra-a77282199/" aria-label="LinkedIn profile">LinkedIn</a>
          </div>
        </div>
        <div className="contact-card">
          <p className="label">Based</p>
          <p>Ginatilan, Cebu, Philippines · Remote-friendly</p>
          <p className="label">Preferred Stack</p>
          <p>HTML · CSS · JS · SCSS · Bootstrap · WordPress · Django · Python</p>
        </div>
      </div>
    </SectionShell>
  );
}
