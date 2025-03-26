// https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript

// My solution
export function arrayDiffV1(a: number[], b: number[]): number[] {
  return a.filter(value => !b.includes(value));
}

export const solutions = [arrayDiffV1];