import { Technique } from '../types';

export interface TrainingStats {
  attempts: number;
  correct: number;
}

interface Props {
  technique: Technique;
  selectedNodeId: string;
  mainlineIndex: number;
  trainingMode: boolean;
  onAdvance: (id: string) => void;
  stats: TrainingStats;
  onStatsChange: (stats: TrainingStats) => void;
}

function TrainingPanel({
  technique,
  selectedNodeId,
  mainlineIndex,
  trainingMode,
  onAdvance,
  stats,
  onStatsChange
}: Props) {
  if (!trainingMode) {
    return (
      <div className="training-panel quiet">
        <div>
          <p className="eyebrow">Training mode</p>
          <p className="muted small">
            Hide node labels, study the body cues, and guess the next step to track accuracy.
          </p>
        </div>
        <div className="stat">
          <p className="muted small">Accuracy</p>
          <p className="stat-value">
            {stats.attempts === 0
              ? '—'
              : `${Math.round((stats.correct / Math.max(stats.attempts, 1)) * 100)}%`}
          </p>
        </div>
      </div>
    );
  }

  const outgoingEdges = technique.edges.filter((edge) => edge.from === selectedNodeId);
  const options = outgoingEdges
    .map((edge) => technique.nodes.find((node) => node.id === edge.to))
    .filter(Boolean);
  const targetNextId = technique.mainLine[mainlineIndex + 1];

  const handleGuess = (nodeId: string) => {
    const isCorrect = nodeId === targetNextId;
    onStatsChange({
      attempts: stats.attempts + 1,
      correct: stats.correct + (isCorrect ? 1 : 0)
    });
    onAdvance(nodeId);
  };

  const accuracy =
    stats.attempts === 0 ? 0 : Math.round((stats.correct / Math.max(stats.attempts, 1)) * 100);

  return (
    <div className="training-panel">
      <div className="panel-title">
        <p className="eyebrow">Training mode</p>
        <span className="pill pill--soft">{accuracy}% correct</span>
      </div>
      <p className="muted small">
        Titles are hidden. Read the body position and cues, then pick the next step.
      </p>
      <div className="option-list">
        {options.map((option) => (
          <button
            key={option!.id}
            className="option-card"
            onClick={() => handleGuess(option!.id)}
            aria-label={`Choose next step`}
          >
            <p className="muted tiny">Body position</p>
            <p className="option-body">{option!.bodyPositionText}</p>
            <p className="muted tiny">Cues</p>
            <ul className="inline-list">
              {option!.cues.slice(0, 2).map((cue) => (
                <li key={cue}>{cue}</li>
              ))}
            </ul>
          </button>
        ))}
        {options.length === 0 && <p className="muted small">No branching options from here.</p>}
      </div>
    </div>
  );
}

export default TrainingPanel;
