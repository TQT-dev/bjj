import { Technique, TechniqueNode } from '../types';

interface Props {
  node?: TechniqueNode;
  technique: Technique;
  trainingMode: boolean;
}

function DetailPanel({ node, technique, trainingMode }: Props) {
  if (!node) {
    return <p className="muted">Select a step to view details.</p>;
  }

  return (
    <div className="detail">
      <header className="detail-header">
        <p className="eyebrow">Step detail</p>
        <h2>{trainingMode ? 'Hidden in training mode' : node.title}</h2>
      </header>
      <div className="detail-grid">
        <Section title="Preconditions" items={node.preconditions} />
        <Section title="Actions" items={node.actions} emphasized />
        <Section title="Cues" items={node.cues} />
        <Section title="Grips / Frames" items={node.grips} />
        <Section title="Common mistakes & fixes" items={node.mistakes} />
        <Section
          title="Opponent counters & your answers"
          items={node.counters.map((counter) => {
            const linked = technique.nodes.find((n) => n.id === counter.targetNodeId);
            return linked ? `${counter.text} → ${linked.title}` : counter.text;
          })}
        />
        <Section title="Safety notes" items={node.safety} />
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  items: string[];
  emphasized?: boolean;
}

function Section({ title, items, emphasized }: SectionProps) {
  return (
    <div className={`section ${emphasized ? 'section--emphasis' : ''}`}>
      <p className="section-title">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetailPanel;
