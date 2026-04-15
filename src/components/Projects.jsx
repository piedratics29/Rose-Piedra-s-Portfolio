import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

function ScreenshotsModal({ project, index, onClose, onPrev, onNext, onSelect }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  const activeShot = project.screenshots[index];

  return (
    <motion.div
      className="screens-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="screens-panel"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="screens-header">
          <div>
            <p className="screens-kicker">Project Screens</p>
            <h3>{project.title}</h3>
          </div>
          <button type="button" className="screens-close" aria-label="Close screenshots" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="screens-stage">
          <button type="button" className="screens-nav" aria-label="Previous screenshot" onClick={onPrev}>
            ‹
          </button>
          <div className="screens-frame">
            <img src={activeShot.src} alt={`${project.title} - ${activeShot.label}`} />
          </div>
          <button type="button" className="screens-nav" aria-label="Next screenshot" onClick={onNext}>
            ›
          </button>
        </div>

        <div className="screens-footer">
          <div>
            <p className="screens-count">
              {index + 1} / {project.screenshots.length}
            </p>
            <p className="screens-caption">{activeShot.label}</p>
          </div>
          <div className="screens-strip" role="tablist" aria-label={`${project.title} screenshots`}>
            {project.screenshots.map((shot, shotIndex) => (
              <button
                key={`${shot.src}-${shotIndex}`}
                type="button"
                className={`screens-thumb ${shotIndex === index ? 'active' : ''}`}
                onClick={() => onSelect(shotIndex)}
                aria-label={`View screenshot ${shotIndex + 1}`}
                aria-pressed={shotIndex === index}
              >
                <img src={shot.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectGrid({ items, startIndex = 0, onOpenScreens }) {
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
          {project.action.type === 'screens' ? (
            <button type="button" className="btn primary small" onClick={() => onOpenScreens(project)}>
              {project.action.label}
            </button>
          ) : (
            <a className="btn primary small" href={project.action.href} target="_blank" rel="noreferrer">
              {project.action.label}
            </a>
          )}
        </motion.article>
      ))}
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openScreens = (project) => {
    setActiveProject(project);
    setActiveIndex(0);
  };

  const closeScreens = () => {
    setActiveProject(null);
    setActiveIndex(0);
  };

  const showPrev = () => {
    if (!activeProject) return;
    setActiveIndex((current) => (current - 1 + activeProject.screenshots.length) % activeProject.screenshots.length);
  };

  const showNext = () => {
    if (!activeProject) return;
    setActiveIndex((current) => (current + 1) % activeProject.screenshots.length);
  };

  return (
    <>
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
          <ProjectGrid items={wordpressProjects} startIndex={0} onOpenScreens={openScreens} />
        </div>

        <div className="project-section">
          <div className="section-header">
            <h3>Frontend / Web Development Projects</h3>
            <p className="section-sub">Selected UI and web builds with demo or screenshot placeholders.</p>
          </div>
          <ProjectGrid items={frontendProjects} startIndex={wordpressProjects.length} onOpenScreens={openScreens} />
        </div>
      </SectionShell>

      <AnimatePresence>
        {activeProject ? (
          <ScreenshotsModal
            project={activeProject}
            index={activeIndex}
            onClose={closeScreens}
            onPrev={showPrev}
            onNext={showNext}
            onSelect={setActiveIndex}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
