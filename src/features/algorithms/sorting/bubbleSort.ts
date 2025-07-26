export const metadata = {
  name: 'Bubble Sort',
  category: 'Sorting',
  complexity: 'O(n²)',
  description: 'Bubble Sort compares adjacent elements and swaps them if they are in the wrong order.'
};

export type Step = {
  array: number[];
  comparing: number[];
  swapping: number[];
  description: string;
};

export function runBubbleSort(input: number[]): Step[] {
  const arr = [...input];
  const steps: Step[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const stepBefore = {
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        description: `Comparing ${arr[j]} and ${arr[j + 1]}`,
      };
      steps.push(stepBefore);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        const stepAfter = {
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
          description: `Swapping ${arr[j + 1]} and ${arr[j]}`,
        };
        steps.push(stepAfter);
      }
    }
  }

  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    description: `Sorting complete.`,
  });

  return steps;
};
