import type { Step } from "./bubbleSort";

export function runMergeSort(input: number[]): Step[] {
  const arr = [...input];
  const steps: Step[] = [];

  const aux = [...arr]; // Helper array for merging

  const merge = (start: number, mid: number, end: number) => {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      steps.push({
        array: [...arr],
        comparing: [i, j],
        swapping: [],
        description: `Comparing ${arr[i]} and ${arr[j]}`,
      });

      if (arr[i] <= arr[j]) {
        aux[k++] = arr[i++];
      } else {
        aux[k++] = arr[j++];
      }
    }

    while (i <= mid) {
      aux[k++] = arr[i++];
    }

    while (j <= end) {
      aux[k++] = arr[j++];
    }

    for (let p = start; p <= end; p++) {
      arr[p] = aux[p];

      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [p],
        description: `Inserting ${arr[p]} at index ${p}`,
      });
    }
  };

  const mergeSort = (start: number, end: number) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  };

  mergeSort(0, arr.length - 1);

  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    description: "Merge Sort Complete",
  });

  return steps;
}
