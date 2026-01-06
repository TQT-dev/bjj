import { Technique } from '../types';

interface Props {
  techniques: Technique[];
  selectedTechniqueId: string;
  onSelect: (id: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

function TechniqueSelector({ techniques, selectedTechniqueId, onSelect, search, onSearchChange }: Props) {
  return (
    <div className="technique-selector">
      <label className="input-label" htmlFor="search">
        Search techniques
      </label>
      <input
        id="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="e.g., K-Guard, leg entanglement"
        className="text-input"
      />
      <div className="technique-pills" role="listbox" aria-label="Techniques">
        {techniques.map((technique) => {
          const selected = technique.id === selectedTechniqueId;
          return (
            <button
              key={technique.id}
              role="option"
              aria-selected={selected}
              className={`pill ${selected ? 'pill--active' : ''}`}
              onClick={() => onSelect(technique.id)}
            >
              <span>{technique.name}</span>
              <span className="pill-meta">{technique.tags.join(' • ')}</span>
            </button>
          );
        })}
        {techniques.length === 0 && <p className="muted small">No techniques found.</p>}
      </div>
    </div>
  );
}

export default TechniqueSelector;
