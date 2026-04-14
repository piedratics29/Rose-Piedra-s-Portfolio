import SectionShell from './SectionShell.jsx';

const groups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'SASS', 'Bootstrap'] },
  { title: 'CMS', items: ['WordPress', 'Elementor', 'Custom CSS/JS'] },
  { title: 'Backend', items: ['Django', 'Python'] },
  { title: 'Others', items: ['Git', 'Basic React', 'Figma (UI implementation / design-to-code conversion)'] },
];

export default function Skills() {
  return (
    <SectionShell id="skills" title="Skills" muted>
      <div className="card-grid skills">
        {groups.map((group) => (
          <article className="card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.join(', ')}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
