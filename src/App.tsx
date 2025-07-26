import React from "react";
import AppShell from "./app/AppShell";
import { ThemeProvider } from "./app/ThemeProvider";

import { AppProvider, useAppContext } from "./features/visualizer/context/VisualizerContext";
import VisualizationArea from "./features/visualizer/components/VisualizationArea";
import GraphVisualizer from "./features/visualizer/components/GraphVisualizer";
import ControlsPanel from "./features/visualizer/components/ControlsPanel";
import InputPanel from "./features/input/InputPanel";
import ExplanationPanel from "./features/explanation/ExplanationPanel";

const AppContent: React.FC = () => {
  const { currentStep, selectedAlgorithmMeta } = useAppContext();
  const isGraph = selectedAlgorithmMeta?.category === "Graph";

  return (
    <>
      <InputPanel />
      {isGraph ? (
        <GraphVisualizer step={currentStep} />
      ) : (
        <VisualizationArea step={currentStep} />
      )}
      <ControlsPanel />
      <ExplanationPanel />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppShell>
          <AppContent />
        </AppShell>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
