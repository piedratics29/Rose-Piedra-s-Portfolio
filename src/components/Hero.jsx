import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="hero-head">
            <div className="avatar" aria-hidden="true">
              <img src="/my_photo.jpg" alt="Rose Piedra Singco" className="avatar-img" />
              {/* <span className="avatar-fallback">RP</span> */}
            </div>
            <div>
              <p className="eyebrow">Frontend & Web Developer</p>
              <h1>Rose Piedra Singco</h1>
            </div>
          </div>
          <p className="lead">
            Frontend-focused developer with nearly 3 years of building responsive, user-friendly
            experiences across WordPress (Elementor), Django projects, and modern UI stacks. I care
            about clean design, performance, and accessibility.
          </p>
          <div className="cta-group">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
        </motion.div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="label">Snapshot</p>
          <ul>
            <li><span>Focus</span><strong>UI polish, responsive design, performance, accessibility</strong></li>
            <li><span>Toolset</span><strong>React, JS, SCSS, Bootstrap, Django, WordPress</strong></li>
            <li><span>Learning</span><strong>Deeper React patterns & state management</strong></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
