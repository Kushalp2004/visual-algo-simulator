import React from "react";
import type { GraphStep } from "../.././algorithms/graph/types";

type Props = {
  step: GraphStep;
};

const nodePositions: Record<string, { x: number; y: number }> = {
  A: { x: 100, y: 100 },
  B: { x: 250, y: 50 },
  C: { x: 250, y: 150 },
  D: { x: 400, y: 100 },
};

const GraphVisualizer: React.FC<Props> = ({ step }) => {
  const { visited, frontier } = step;

  return (
    <div className="relative h-72 w-full border rounded bg-white dark:bg-gray-900">
      {Object.entries(nodePositions).map(([id, pos]) => {
        const isVisited = visited.includes(id);
        const isFrontier = frontier.includes(id);

        return (
          <div
            key={id}
            className={`absolute flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shadow-md transition-all duration-300
              ${isVisited ? "bg-green-500" : isFrontier ? "bg-yellow-400" : "bg-blue-500"}`}
            style={{ left: pos.x, top: pos.y }}
          >
            {id}
          </div>
        );
      })}
    </div>
  );
};

export default GraphVisualizer;
