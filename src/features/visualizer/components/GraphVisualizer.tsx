import React from "react";

export type GraphStep = {
  visited: string[];
  frontier: string[];
  path?: string[];
  description: string;
};

type Props = {
  step: GraphStep;
};

const nodePositions: Record<string, { x: number; y: number }> = {
  A: { x: 100, y: 100 },
  B: { x: 250, y: 50 },
  C: { x: 250, y: 150 },
  D: { x: 400, y: 100 },
};

const edges: [string, string][] = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];

const GraphVisualizer: React.FC<Props> = ({ step }) => {
  const { visited = [], frontier = [], path = [] } = step;

  return (
    <div className="w-full h-72 relative bg-white dark:bg-gray-900 rounded shadow-md p-2">
      <svg width="100%" height="100%">
        {/* Draw edges */}
        {edges.map(([from, to], i) => {
          const fromPos = nodePositions[from];
          const toPos = nodePositions[to];
          return (
            <line
              key={i}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke={
                path.includes(from) && path.includes(to)
                  ? "purple"
                  : "gray"
              }
              strokeWidth="3"
              strokeDasharray={
                frontier.includes(from) && frontier.includes(to)
                  ? "6,3"
                  : "0"
              }
            />
          );
        })}

        {/* Draw nodes */}
        {Object.entries(nodePositions).map(([id, pos]) => {
          const isVisited = visited.includes(id);
          const isFrontier = frontier.includes(id);
          const isPath = path?.includes(id);

          const fill = isPath
            ? "#9333EA" // purple-600
            : isVisited
            ? "#10B981" // green-500
            : isFrontier
            ? "#FACC15" // yellow-400
            : "#3B82F6"; // blue-500

          return (
            <g key={id}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={20}
                fill={fill}
                stroke="#333"
                strokeWidth={2}
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
              >
                {id}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default GraphVisualizer;
