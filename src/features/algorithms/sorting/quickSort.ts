export type Step = {
  array: number[];
  comparing?: number[];
  swapping?: number[];
  description?: string;
};

export function runQuickSort(input: number[]): Step[] {
  const arr = [...input];
  const steps: Step[] = [];

  const swap = (i: number, j: number) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [i, j],
      description: `Swapped ${arr[j]} and ${arr[i]}`,
    });
  };

  const partition = (low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;

    steps.push({
      array: [...arr],
      comparing: [high],
      swapping: [],
      description: `Choosing pivot ${pivot} at index ${high}`,
    });

    for (let j = low; j < high; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, high],
        swapping: [],
        description: `Comparing ${arr[j]} with pivot ${pivot}`,
      });

      if (arr[j] < pivot) {
        i++;
        swap(i, j);
      }
    }

    swap(i + 1, high); // Place pivot in correct location
    return i + 1;
  };

  const quickSort = (low: number, high: number) => {
    if (low < high) {
      const pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  };

  quickSort(0, arr.length - 1);

  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    description: "Quick Sort Complete",
  });

  return steps;
}
