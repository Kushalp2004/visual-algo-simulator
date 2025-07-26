export type GraphStep = {
  visited: string[];            // Visited nodes
  frontier: string[];           // Queue or stack
  path?: string[];              // Current path (optional, for DFS/Dijkstra)
  description: string;          // What’s happening
};

export type GraphAlgorithm = (graph: Record<string, string[]>, start: string) => GraphStep[];