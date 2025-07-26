import React from "react";
import { motion } from "framer-motion";

type Step = {
  array: number[];
  comparing?: number[];
  swapping?: number[];
  description?: string;
};

type Props = {
  step: Step;
};

const VisualizationArea: React.FC<Props> = ({ step }) => {
  const { array = [], comparing = [], swapping = [] } = step;

  if (!Array.isArray(array)) {
    return <div className="text-center py-4 text-red-600">No array to visualize</div>;
  }

  return (
    <div className="flex items-end justify-center h-72 gap-1 p-4 bg-white dark:bg-gray-900 rounded shadow-md transition-all duration-300">
      {array.map((value, index) => {
        const isComparing = comparing.includes(index);
        const isSwapping = swapping.includes(index);

        const colorClass = isSwapping
          ? "bg-red-500"
          : isComparing
          ? "bg-yellow-400"
          : "bg-blue-500";

        return (
          <motion.div
            key={index}
            layout
            initial={{ height: 0 }}
            animate={{
              height: `${value * 3}px`,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
            className={`relative w-6 md:w-8 rounded-t-md ${colorClass}`}
            title={`Value: ${value}`}
          >
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-700 dark:text-white">
              {value}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default VisualizationArea;
