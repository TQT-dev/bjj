import ReactFlow, {
  Background,
  Controls,
  Edge,
  MarkerType,
  MiniMap,
  Node,
  Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Technique } from '../types';

interface Props {
  technique: Technique;
  selectedNodeId: string;
  onSelectNode: (id: string) => void;
  trainingMode?: boolean;
}

const edgeColors: Record<string, string> = {
  mainline: '#1f5bff',
  variation: '#6b7280',
  counter: '#f59e0b'
};

function TechniqueDiagram({ technique, selectedNodeId, onSelectNode, trainingMode }: Props) {
  const nodes: Node[] = technique.nodes.map((node, index) => ({
    id: node.id,
    data: {
      label: trainingMode ? `Step ${index + 1}` : node.title
    },
    position: node.coordinates ?? { x: index * 200, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      border: node.id === selectedNodeId ? '2px solid #0f172a' : '1px solid #e2e8f0',
      borderRadius: 12,
      padding: 12,
      background: '#f8fafc',
      color: '#0f172a',
      boxShadow: node.id === selectedNodeId ? '0 12px 30px rgba(15,23,42,0.14)' : 'none',
      cursor: 'pointer',
      minWidth: 140
    }
  }));

  const edges: Edge[] = technique.edges.map((edge) => ({
    id: `${edge.from}-${edge.to}-${edge.label}`,
    source: edge.from,
    target: edge.to,
    label: edge.label,
    animated: edge.type === 'mainline',
    style: { stroke: edgeColors[edge.type] },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
      color: edgeColors[edge.type]
    },
    labelBgPadding: [6, 4],
    labelBgBorderRadius: 6,
    labelBgStyle: { fill: 'white', stroke: edgeColors[edge.type], strokeWidth: 0.5 }
  }));

  return (
    <div className="diagram">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        onNodeClick={(_, node) => onSelectNode(node.id)}
        fitView
        className="flow-surface"
      >
        <MiniMap
          nodeColor={(node) => (node.id === selectedNodeId ? '#0f172a' : '#d0d7e2')}
          nodeBorderRadius={6}
        />
        <Controls position="bottom-left" />
        <Background gap={18} size={1} color="#e2e8f0" />
      </ReactFlow>
    </div>
  );
}

export default TechniqueDiagram;
