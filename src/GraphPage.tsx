import GraphVisualizer from "./features/graph/components/GraphVisualizer";
import { runBFS } from "./features/algorithms/graph/bfs";

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

const steps = runBFS(graph, "A");

<GraphVisualizer step={steps[0]} />
