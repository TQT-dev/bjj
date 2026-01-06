import { describe, expect, it } from 'vitest';
import { techniques } from '../data/techniques';

describe('technique data integrity', () => {
  it('has no dangling edges', () => {
    techniques.forEach((technique) => {
      const nodeIds = new Set(technique.nodes.map((n) => n.id));
      technique.edges.forEach((edge) => {
        expect(nodeIds.has(edge.from)).toBe(true);
        expect(nodeIds.has(edge.to)).toBe(true);
      });
    });
  });

  it('main lines reference existing nodes', () => {
    techniques.forEach((technique) => {
      const nodeIds = new Set(technique.nodes.map((n) => n.id));
      technique.mainLine.forEach((id) => expect(nodeIds.has(id)).toBe(true));
    });
  });

  it('main lines are connected by edges', () => {
    techniques.forEach((technique) => {
      for (let i = 0; i < technique.mainLine.length - 1; i += 1) {
        const from = technique.mainLine[i];
        const to = technique.mainLine[i + 1];
        const hasEdge = technique.edges.some((edge) => edge.from === from && edge.to === to);
        expect(hasEdge).toBe(true);
      }
    });
  });

  it('includes adequate coverage for K-Guard module', () => {
    const kGuard = techniques.find((tech) => tech.id === 'k-guard');
    expect(kGuard).toBeDefined();
    expect(kGuard?.nodes.length ?? 0).toBeGreaterThanOrEqual(12);
    expect(kGuard?.edges.length ?? 0).toBeGreaterThan(0);
  });
});
