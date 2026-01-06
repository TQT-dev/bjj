import { useCallback, useEffect, useMemo, useState } from 'react';
import { techniques } from './data/techniques';
import { Technique } from './types';
import TechniqueDiagram from './components/TechniqueDiagram';
import StepPlayer from './components/StepPlayer';
import DetailPanel from './components/DetailPanel';
import TrainingPanel, { TrainingStats } from './components/TrainingPanel';
import TechniqueSelector from './components/TechniqueSelector';

const LOCAL_STORAGE_KEY = 'bjj-navigator-progress';

interface SavedProgress {
  techniqueId: string;
  nodeId: string;
  trainingStats: TrainingStats;
  trainingMode: boolean;
}

const initialProgress: SavedProgress = {
  techniqueId: techniques[0]?.id ?? '',
  nodeId: techniques[0]?.mainLine[0] ?? '',
  trainingStats: { attempts: 0, correct: 0 },
  trainingMode: false
};

function App() {
  const [search, setSearch] = useState('');
  const [techniqueId, setTechniqueId] = useState(initialProgress.techniqueId);
  const [selectedNodeId, setSelectedNodeId] = useState(initialProgress.nodeId);
  const [trainingMode, setTrainingMode] = useState(initialProgress.trainingMode);
  const [trainingStats, setTrainingStats] = useState<TrainingStats>(initialProgress.trainingStats);

  const selectedTechnique: Technique | undefined = useMemo(
    () => techniques.find((item) => item.id === techniqueId) ?? techniques[0],
    [techniqueId]
  );

  const filtered = useMemo(
    () =>
      techniques.filter((technique) =>
        `${technique.name} ${technique.tags.join(' ')}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed: SavedProgress = JSON.parse(stored);
        setTechniqueId(parsed.techniqueId);
        setSelectedNodeId(parsed.nodeId);
        setTrainingStats(parsed.trainingStats);
        setTrainingMode(parsed.trainingMode);
      } catch {
        // ignore malformed storage
      }
    }
  }, []);

  useEffect(() => {
    const payload: SavedProgress = {
      techniqueId,
      nodeId: selectedNodeId,
      trainingStats,
      trainingMode
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
  }, [techniqueId, selectedNodeId, trainingMode, trainingStats]);

  const mainlineIndex =
    selectedTechnique?.mainLine.findIndex((nodeId) => nodeId === selectedNodeId) ?? -1;

  const handleSelectTechnique = useCallback((id: string) => {
    setTechniqueId(id);
    const next = techniques.find((tech) => tech.id === id);
    setSelectedNodeId(next?.mainLine[0] ?? '');
  }, []);

  const handleNext = useCallback(() => {
    if (!selectedTechnique) return;
    const nextId = selectedTechnique.mainLine[mainlineIndex + 1];
    if (nextId) {
      setSelectedNodeId(nextId);
    }
  }, [mainlineIndex, selectedTechnique]);

  const handlePrev = useCallback(() => {
    if (!selectedTechnique) return;
    const prevId = selectedTechnique.mainLine[mainlineIndex - 1];
    if (prevId) {
      setSelectedNodeId(prevId);
    }
  }, [mainlineIndex, selectedTechnique]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      }
      if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleNext, handlePrev]);

  if (!selectedTechnique) {
    return (
      <main className="app-shell">
        <p className="muted">No techniques available yet.</p>
      </main>
    );
  }

  const selectedNode = selectedTechnique.nodes.find((node) => node.id === selectedNodeId);

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Brazilian Jiu-Jitsu Roadmap</p>
          <h1>BJJ Navigator</h1>
          <p className="muted">
            A calm, premium reference for exploring K-Guard mechanics, variations, and reactions.
          </p>
        </div>
        <div className="controls">
          <TechniqueSelector
            techniques={filtered}
            selectedTechniqueId={techniqueId}
            onSelect={handleSelectTechnique}
            search={search}
            onSearchChange={setSearch}
          />
          <label className="toggle">
            <input
              type="checkbox"
              checked={trainingMode}
              onChange={(e) => setTrainingMode(e.target.checked)}
              aria-label="Toggle training mode"
            />
            <span>Training mode</span>
          </label>
        </div>
      </header>

      <section className="grid">
        <div className="panel diagram-panel" aria-label="Technique diagram">
          <TechniqueDiagram
            technique={selectedTechnique}
            selectedNodeId={selectedNodeId}
            onSelectNode={setSelectedNodeId}
            trainingMode={trainingMode}
          />
        </div>
        <div className="panel player-panel" aria-label="Step player">
          <StepPlayer
            technique={selectedTechnique}
            selectedNodeId={selectedNodeId}
            onNext={handleNext}
            onPrev={handlePrev}
          />
          <TrainingPanel
            technique={selectedTechnique}
            selectedNodeId={selectedNodeId}
            mainlineIndex={mainlineIndex}
            onAdvance={setSelectedNodeId}
            trainingMode={trainingMode}
            stats={trainingStats}
            onStatsChange={setTrainingStats}
          />
        </div>
        <div className="panel detail-panel" aria-label="Step detail">
          <DetailPanel
            node={selectedNode}
            technique={selectedTechnique}
            trainingMode={trainingMode}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
