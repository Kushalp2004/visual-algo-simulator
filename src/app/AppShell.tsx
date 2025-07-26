import React from "react";
import DarkModeToggle from "../shared/ui/DarkModeToggle";
import { useTheme } from "./ThemeProvider";
import AlgorithmSelector from "../features/visualizer/components/AlgorithmSelector";


const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} transition-colors duration-300`}>
      <header className="bg-card-light dark:bg-card-dark shadow-md py-4 px-6 flex items-center justify-between transition-colors duration-300">
        <h1 className="text-xl font-bold">Visual Algorithm Simulator</h1>
        <DarkModeToggle />
      </header>
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 bg-card-light dark:bg-card-dark rounded-lg shadow-md p-4 transition-colors duration-300">
          <h2 className="text-lg font-semibold mb-2">Algorithms</h2>
          {/* Algorithm Selector will go here */}
          <AlgorithmSelector />
        </aside>
        <main className="flex-1 bg-card-light dark:bg-card-dark rounded-lg shadow-md p-6 transition-colors duration-300">
          {children}
        </main>
      </div>
      <footer className="bg-card-light dark:bg-card-dark text-center py-2 mt-8 shadow-md transition-colors duration-300">
        <p className="text-sm">© {new Date().getFullYear()} Kushal / VisualAlgo</p>
      </footer>
    </div>
  );
};

export default AppShell;
