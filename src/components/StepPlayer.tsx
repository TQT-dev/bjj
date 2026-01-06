import { Technique } from '../types';

interface Props {
  technique: Technique;
  selectedNodeId: string;
  onNext: () => void;
  onPrev: () => void;
}

function StepPlayer({ technique, selectedNodeId, onNext, onPrev }: Props) {
  const activeIndex = technique.mainLine.findIndex((id) => id === selectedNodeId);
  const total = technique.mainLine.length;
  const currentLabel =
    activeIndex === -1 ? `Off line • ${total} steps` : `${activeIndex + 1} / ${total}`;
  const canPrev = activeIndex > 0;
  const canNext = activeIndex >= 0 && activeIndex < total - 1;
  const currentNode = technique.nodes.find((node) => node.id === selectedNodeId);

  return (
    <div className="step-player">
      <div className="step-header">
        <div>
          <p className="eyebrow">Main line</p>
          <h2>{currentNode?.title ?? 'Select a step'}</h2>
          <p className="muted small">Keyboard: ← and → to navigate</p>
        </div>
        <span className="pill pill--soft">{currentLabel}</span>
      </div>
      <p className="body-position">{currentNode?.bodyPositionText}</p>
      <div className="step-actions">
        <button className="ghost" onClick={onPrev} disabled={!canPrev}>
          Back
        </button>
        <button className="primary" onClick={onNext} disabled={!canNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepPlayer;
