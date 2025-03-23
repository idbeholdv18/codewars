// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript

function sumOfIntervalsV1(intervals: [number, number][]): any {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    let [start, end] = sorted[i];
    let last = merged[merged.length - 1];
    (start <= last[1]) ? last[1] = Math.max(last[1], end) : merged.push([start, end]);
  }
  return merged.reduce((sum, [start, end]) => sum + (end - start), 0);
}

// https://www.codewars.com/kata/reviews/5dac40cd1944dd0001d4addb/groups/5f578a95e0be5a0001c535af
export function sumOfIntervalsV2(intervals: [number, number][]): number {
  let sortedIntervals = intervals.sort((first, second) => first[0] - second[0]);
  let currentInterval = sortedIntervals[0];
  let result = 0;
  for (let index = 1; index < sortedIntervals.length; index++) {
    if (sortedIntervals[index][0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(sortedIntervals[index][1], currentInterval[1]);
    } else {
      result += currentInterval[1] - currentInterval[0];
      currentInterval = sortedIntervals[index];
    }
  }
  return result + currentInterval[1] - currentInterval[0];
}

// https://www.codewars.com/kata/reviews/5dac40cd1944dd0001d4addb/groups/62d7ef91465afd00017e72f3
export function sumOfIntervalsV3(intervals: [number, number][]) {
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0] || b[1] - a[1])
  let top = -Infinity, sum = 0
  for (let [a, b] of sorted) {
    if (top < a) top = a
    if (top < b) {
      sum += b - top
      top = b
    }
  }
  return sum
}


export const solutions = [sumOfIntervalsV1, sumOfIntervalsV2, sumOfIntervalsV3];