import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionShell({ id, title, children, muted }) {
  return (
    <section id={id} className={`section ${muted ? 'muted' : ''}`}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeSlide}
        >
          {title && <h2>{title}</h2>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
