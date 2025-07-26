import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { VisualizerEngine } from "../engine/VisualizerEngine";
import { algorithmRegistry } from "../../algorithms/algorithmRegistry";

export type VisualStep = {
  array?: number[];
  comparing?: number[];
  swapping?: number[];
  visited?: string[];
  frontier?: string[];
  path?: string[];
  description?: string;
};

type AppState = {
  steps: VisualStep[];
  currentStepIndex: number;
  currentStep: VisualStep;
  isPlaying: boolean;
  speed: number;
  selectedAlgorithm: string;
  selectedAlgorithmMeta: typeof algorithmRegistry[0] | undefined;
  play: () => void;
  pause: () => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  setSpeed: (s: number) => void;
  selectAlgorithm: (name: string) => void;
  rerun: () => void;
};

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [steps, setSteps] = useState<VisualStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");
  const [triggerRerun, setTriggerRerun] = useState(false);

  const engineRef = useRef<VisualizerEngine | null>(null);

  const selectedAlgorithmMeta = algorithmRegistry.find(
    (algo) => algo.name === selectedAlgorithm
  );

  useEffect(() => {
    if (!selectedAlgorithmMeta) return;

    let newSteps: VisualStep[] = [];

    if (selectedAlgorithmMeta.category === "Graph") {
      const graph: Record<string, string[]> = {
        A: ["B", "C"],
        B: ["A", "D"],
        C: ["A", "D"],
        D: ["B", "C"],
      };
      const start = "A";
      // Type guard to call run with correct parameters
      if ("run" in selectedAlgorithmMeta) {
        newSteps = selectedAlgorithmMeta.run(graph, start);
      }
    } else if (selectedAlgorithmMeta.category === "Sorting") {
      const input = (window as any)._customInput ?? [5, 3, 8, 1, 4];
      // Type guard to call run with correct parameters
      if ("run" in selectedAlgorithmMeta) {
        newSteps = selectedAlgorithmMeta.run(input);
      }
    }

    setSteps(newSteps);
    setCurrentStepIndex(0);
  }, [selectedAlgorithm, triggerRerun]);

  useEffect(() => {
    if (steps.length > 0) {
      engineRef.current = new VisualizerEngine(
        steps,
        (_, index) => setCurrentStepIndex(index),
        speed
      );
    }
  }, [steps, speed]);

  const play = () => {
    engineRef.current?.start();
    setIsPlaying(true);
  };
  const pause = () => {
    engineRef.current?.pause();
    setIsPlaying(false);
  };
  const next = () => engineRef.current?.next();
  const prev = () => engineRef.current?.prev();
  const reset = () => {
    engineRef.current?.reset();
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };
  const updateSpeed = (s: number) => {
    setSpeed(s);
    engineRef.current?.changeSpeed(s);
  };

  const rerun = () => setTriggerRerun((prev) => !prev);

  return (
    <AppContext.Provider
      value={{
        steps,
        currentStepIndex,
        currentStep: steps[currentStepIndex] ?? {
          description: "Waiting to start...",
        },
        isPlaying,
        speed,
        play,
        pause,
        next,
        prev,
        reset,
        setSpeed: updateSpeed,
        selectedAlgorithm,
        selectAlgorithm: setSelectedAlgorithm,
        selectedAlgorithmMeta,
        rerun,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

export default AppProvider;
