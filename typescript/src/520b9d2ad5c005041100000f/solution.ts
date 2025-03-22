// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript

// My solution
export function simplePigLatinV1(a: string): string {
  return a
    .split(" ")
    .map((word) => {
      const match = word.match(/^([a-zA-Z]+)$/);
      return match ? match[1].slice(1) + match[1].charAt(0) + "ay" : word
    })
    .join(" ");
}

// https://www.codewars.com/kata/reviews/6167175ba777e50001b2b886/groups/61694abefb13c9000100ae70
export function simplePigLatinV2(a: string): string {
  return a.replace(/(\w)(\w+)*/g, "$2$1ay")
}

// https://www.codewars.com/kata/reviews/6167175ba777e50001b2b886/groups/6167946ca777e50001b2c4de
export function simplePigLatinV3(a: string): string {
  return a.replace(/[a-z]+/ig, x => x.slice(1) + x[0] + "ay")
}

export const solutions = [simplePigLatinV1, simplePigLatinV2, simplePigLatinV3];