export type Step = {
  array: number[];
  comparing?: number[];
  swapping?: number[];
  description?: string;
};

export function runInsertionSort(input: number[]): Step[] {
  const arr = [...input];
  const steps: Step[] = [];

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    steps.push({
      array: [...arr],
      comparing: [i],
      description: `Key selected: ${key} at index ${i}`,
    });

    while (j >= 0 && arr[j] > key) {
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        description: `Comparing ${arr[j]} and ${key}`,
      });

      arr[j + 1] = arr[j]; // shift
      steps.push({
        array: [...arr],
        swapping: [j, j + 1],
        description: `Shifting ${arr[j]} to index ${j + 1}`,
      });

      j--;
    }

    arr[j + 1] = key;
    steps.push({
      array: [...arr],
      swapping: [j + 1],
      description: `Inserting key ${key} at index ${j + 1}`,
    });
  }

  steps.push({
    array: [...arr],
    description: "Insertion Sort Complete",
  });

  return steps;
}
