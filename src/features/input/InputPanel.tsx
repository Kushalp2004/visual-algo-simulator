import React, { useState } from "react";
import { useAppContext } from "../visualizer/context/VisualizerContext";

const InputPanel: React.FC = () => {
  const { rerun } = useAppContext();
  const [input, setInput] = useState("5, 3, 8, 1, 4");

  const handleRun = () => {
    try {
      const values = input
        .split(",")
        .map((n) => parseInt(n.trim()))
        .filter((n) => !isNaN(n));
      if (values.length > 0) {
        (window as any)._customInput = values;
        rerun(); // ✅ trigger rerun
      }
    } catch (err) {
      alert("Invalid input!");
    }
  };

  const handleRandom = () => {
    const random = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 50) + 1
    );
    setInput(random.join(", "));
  };

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg p-4 mb-6 shadow-md space-y-3">
      <h2 className="text-lg font-semibold">🧮 Custom Input</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white border"
      />
      <div className="flex gap-2">
        <button
          onClick={handleRun}
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          ▶ Run
        </button>
        <button
          onClick={handleRandom}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
        >
          🎲 Random
        </button>
      </div>
    </div>
  );
};

export default InputPanel;
