# BJJ Navigator — K-Guard Module

An interactive, premium-feeling learning tool for Brazilian Jiu-Jitsu built with React, TypeScript, Vite, and React Flow. It ships with a fully-seeded K-Guard module that models the technique as a directed graph with branching reactions.

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Run tests for graph integrity:

```bash
npm test
```

## Core features

- Interactive React Flow diagram (pan/zoom) with selectable nodes.
- Stepper UI that follows the curated main line (keyboard-friendly with ←/→).
- Detailed panel with preconditions, actions, grips/frames, mistakes, counters, and safety notes.
- Training mode: hides node titles, presents descriptions, and lets you guess the next step while tracking accuracy.
- Technique search and localStorage persistence for last-viewed technique/node and training stats.

## Data model

`src/types.ts` defines the shapes for techniques, nodes, and edges:

- **Technique**: `id`, `name`, `tags`, `level`, `startingPositions`, `mainLine`, `nodes`, `edges`
- **Node**: `id`, `title`, `bodyPositionText`, `preconditions[]`, `actions[]`, `cues[]`, `grips[]`, `mistakes[]`, `counters[]`, `safety[]`, optional `coordinates`
- **Edge**: `from`, `to`, `label`, `type` (`mainline` | `variation` | `counter`)

`mainLine` is a curated ordered array of node IDs that drive the stepper and keyboard navigation.

## Editing or adding techniques

All content lives in `src/data/techniques.ts` as JSON-like objects. To add a new technique:

1. Duplicate the existing object and adjust `id`, `name`, and metadata.
2. Author nodes with clear preconditions, actions, cues, mistakes, counters (link to other node IDs), and safety notes.
3. Provide `coordinates` per node for a readable React Flow layout.
4. Build edges describing transitions; ensure mainline edges exist for every consecutive `mainLine` pair.
5. Append the technique object to the exported array.
6. Run `npm test` to validate that edges reference existing nodes and the main line is connected.

## Testing

`src/__tests__/techniques.test.ts` enforces data quality by checking:

- No dangling edges.
- Every main line node exists and is connected in order.
- The K-Guard module includes adequate coverage.

## Accessibility & UX

- Keyboard navigation for the main line (`ArrowLeft` / `ArrowRight`).
- Responsive layout: diagram, player, and details collapse into a single-column flow on smaller screens.
- Calm visual design with neutral palette, generous whitespace, and clear typography.
