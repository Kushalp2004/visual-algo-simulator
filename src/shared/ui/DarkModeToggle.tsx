import React from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../app/ThemeProvider";

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none ring-2 ring-offset-2 ${
        isDark ? "bg-gray-700 ring-yellow-400" : "bg-gray-300 ring-gray-400"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 flex items-center justify-between px-1"
        initial={false}
        animate={{ opacity: 1 }}
      >
        <MoonIcon className="w-4 h-4 text-gray-800 dark:text-gray-100" />
        <SunIcon className="w-4 h-4 text-yellow-400" />
      </motion.span>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-5 h-5 rounded-full bg-white z-10 shadow-md"
        style={{
          x: isDark ? "24px" : "0px",
        }}
      />
    </motion.button>
  );
};

export default DarkModeToggle;
