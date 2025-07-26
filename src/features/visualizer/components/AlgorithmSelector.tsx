import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const algorithms = {
  Sorting: ["Bubble Sort", "Merge Sort", "Quick Sort"],
  Graph: ["BFS", "DFS", "Dijkstra's"],
  Tree: ["Inorder Traversal", "BST Insert/Delete"],
  DP: ["Knapsack", "LCS"],
};

const AlgorithmSelector: React.FC = () => {
  const [openCategory, setOpenCategory] = React.useState<string | null>("Sorting");

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const selectAlgorithm = (name: string) => {
    console.log("Selected algorithm:", name);
    // TODO: trigger state to change active algorithm + run steps
  };

  return (
    <div className="space-y-4">
      {Object.entries(algorithms).map(([category, algos]) => (
        <div key={category} className="bg-card-light dark:bg-card-dark rounded shadow">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex justify-between items-center px-4 py-2 font-semibold"
          >
            <span>{category}</span>
            <ChevronDownIcon
              className={`w-4 h-4 transform transition-transform ${
                openCategory === category ? "rotate-180" : ""
              }`}
            />
          </button>
          {openCategory === category && (
            <ul className="px-4 pb-2 space-y-1">
              {algos.map((algo) => (
                <li
                  key={algo}
                  onClick={() => selectAlgorithm(algo)}
                  className="cursor-pointer hover:underline hover:text-blue-500 transition"
                >
                  {algo}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AlgorithmSelector;
