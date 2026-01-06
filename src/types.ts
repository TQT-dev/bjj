export type EdgeType = 'mainline' | 'variation' | 'counter';

export interface LinkedCounter {
  text: string;
  targetNodeId?: string;
}

export interface TechniqueNode {
  id: string;
  title: string;
  bodyPositionText: string;
  preconditions: string[];
  actions: string[];
  cues: string[];
  grips: string[];
  mistakes: string[];
  counters: LinkedCounter[];
  safety: string[];
  coordinates?: {
    x: number;
    y: number;
  };
}

export interface TechniqueEdge {
  from: string;
  to: string;
  label: string;
  type: EdgeType;
}

export interface Technique {
  id: string;
  name: string;
  tags: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  startingPositions: string[];
  mainLine: string[];
  nodes: TechniqueNode[];
  edges: TechniqueEdge[];
}
