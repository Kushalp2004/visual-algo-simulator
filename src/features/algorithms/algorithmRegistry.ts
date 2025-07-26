import type { VisualStep } from "../visualizer/context/VisualizerContext";
import { runBubbleSort } from "./sorting/bubbleSort";
import { runMergeSort } from "./sorting/mergeSort";
import { runQuickSort } from "./sorting/quickSort";
import { runBFS } from "./graph/bfs";

type SortingAlgorithm = {
  name: string;
  category: "Sorting";
  complexity: string;
  run: (input: number[]) => VisualStep[];
};

type GraphAlgorithm = {
  name: string;
  category: "Graph";
  complexity: string;
  run: (graph: Record<string, string[]>, start: string) => VisualStep[];
};

export type Algorithm = SortingAlgorithm | GraphAlgorithm;

export const algorithmRegistry: Algorithm[] = [
  {
    name: "Bubble Sort",
    category: "Sorting",
    complexity: "O(n²)",
    run: (input: number[]): VisualStep[] => runBubbleSort(input),
  },
  {
    name: "Merge Sort",
    category: "Sorting",
    complexity: "O(n log n)",
    run: (input: number[]): VisualStep[] => runMergeSort(input),
  },
  {
    name: "Quick Sort",
    category: "Sorting",
    complexity: "O(n log n)",
    run: (input: number[]): VisualStep[] => runQuickSort(input),
  },
  {
    name: "BFS",
    category: "Graph",
    complexity: "O(V + E)",
    run: (graph: Record<string, string[]>, start: string): VisualStep[] =>
      runBFS(graph, start),
  },
];
