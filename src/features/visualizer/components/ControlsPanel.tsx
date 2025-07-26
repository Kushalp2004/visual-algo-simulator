import React from "react";
import { useAppContext } from "../../../features/visualizer/context/VisualizerContext";

const ControlsPanel: React.FC = () => {
  const {
    play,
    pause,
    next,
    prev,
    reset,
    isPlaying,
    speed,
    setSpeed,
    steps, 
    currentStepIndex, 
  } = useAppContext();

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
      <div className="flex gap-2">
          <button
              onClick={prev}
              disabled={currentStepIndex === 0}
              className={`px-3 py-1 rounded ${currentStepIndex === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              ⏮ Prev
          </button>

          {!isPlaying ? (
              <button
                onClick={play}
                className="px-3 py-1 bg-green-400 hover:bg-green-500 rounded"
              >
                ▶ Play
              </button>
            ) : (
              <button
                onClick={pause}
                className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded"
              >
                ⏸ Pause
              </button>
            )
          }

            <button
              onClick={next}
              disabled={currentStepIndex >= steps.length - 1}
              className={`px-3 py-1 rounded ${currentStepIndex >= steps.length - 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              ⏭ Next
            </button>

            <button
              onClick={reset}
              className="px-3 py-1 bg-red-400 hover:bg-red-500 text-white rounded"
            >
              🔁 Reset
            </button>          
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="speed" className="text-sm font-medium">
          🐢 Speed 🐇
        </label>
        <input
          id="speed"
          type="range"
          min={100}
          max={1500}
          step={100}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-40"
        />
      </div>
    </div>
    
  );
};

export default ControlsPanel;
