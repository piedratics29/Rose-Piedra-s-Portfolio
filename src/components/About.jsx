import SectionShell from './SectionShell.jsx';

export default function About() {
  return (
    <SectionShell id="about" title="About Me">
      <div className="split">
        <p>
          Frontend-focused developer with nearly 3 years of experience in WordPress (Elementor),
          Django projects, and modern frontend development. Passionate about UI/UX, clean design,
          and performance. Continuously improving React skills to ship polished, resilient
          interfaces.
        </p>
        <div className="info-card">
          <p className="label">What I deliver</p>
          <ul>
            <li>Responsive, accessible layouts</li>
            <li>Clean component architecture</li>
            <li>Thoughtful animations with Framer Motion</li>
            <li>Content-friendly WordPress builds</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
