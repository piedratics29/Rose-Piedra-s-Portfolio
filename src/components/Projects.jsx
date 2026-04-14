import { motion } from 'framer-motion';
import SectionShell from './SectionShell.jsx';
import { wordpressProjects, frontendProjects } from '../data/projects.js';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: 'easeOut' },
  }),
};

function ProjectGrid({ items, startIndex = 0 }) {
  return (
    <div className="card-grid projects">
      {items.map((project, idx) => (
        <motion.article
          key={project.title}
          className="card project-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={startIndex + idx}
        >
          <div className="project-thumb">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <span>Screenshot</span>
            )}
          </div>
          <div className="project-meta">
            <span className="badge">{project.stack}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a className="btn primary small" href={project.action.href} target="_blank" rel="noreferrer">
            {project.action.label}
          </a>
        </motion.article>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <SectionShell id="projects" title="Projects">
      <div className="project-section">
        <div className="section-header">
          <h3>WordPress Projects</h3>
          <p className="section-sub">
            I have worked on WordPress projects using Elementor, themes, and custom CSS/JS. Although I have only
            handled two main projects so far, I have learned a lot in WordPress development and continue to improve my
            skills. I am looking forward to working on more WordPress projects in the future.
          </p>
        </div>
        <ProjectGrid items={wordpressProjects} startIndex={0} />
      </div>

      <div className="project-section">
        <div className="section-header">
          <h3>Frontend / Web Development Projects</h3>
          <p className="section-sub">Selected UI and web builds with demo or screenshot placeholders.</p>
        </div>
        <ProjectGrid items={frontendProjects} startIndex={wordpressProjects.length} />
      </div>
    </SectionShell>
  );
}
