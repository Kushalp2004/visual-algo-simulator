import React from "react";
import { useAppContext } from "../visualizer/context/VisualizerContext";

const ExplanationPanel: React.FC = () => {
  const { currentStep } = useAppContext();

  if (!currentStep || typeof currentStep.description !== "string") {
    return (
      <div className="mt-4 p-4 rounded-lg bg-card-light dark:bg-card-dark shadow-md text-sm md:text-base font-medium text-gray-800 dark:text-white">
        <p className="animate-pulse text-gray-500">Preparing algorithm...</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 rounded-lg bg-card-light dark:bg-card-dark shadow-md text-sm md:text-base font-medium text-gray-800 dark:text-white">
      <p>{currentStep.description}</p>
    </div>
  );
};

export default ExplanationPanel;
