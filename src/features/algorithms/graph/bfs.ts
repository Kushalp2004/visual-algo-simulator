import type { GraphStep } from "./types";

export function runBFS(graph: Record<string, string[]>, start: string): GraphStep[] {
  const visited = new Set<string>();
  const queue: string[] = [start];
  const steps: GraphStep[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (!visited.has(node)) {
      visited.add(node);

      steps.push({
        visited: Array.from(visited),
        frontier: [...queue],
        description: `Visiting node ${node}`,
      });

      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }

      steps.push({
        visited: Array.from(visited),
        frontier: [...queue],
        description: `Added neighbors of ${node} to the queue.`,
      });
    }
  }

  steps.push({
    visited: Array.from(visited),
    frontier: [],
    description: "BFS complete!",
  });

  return steps;
}
