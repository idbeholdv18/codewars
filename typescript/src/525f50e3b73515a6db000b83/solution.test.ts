// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript
// npm test src/525f50e3b73515a6db000b83/solution.test.ts

import assert from "assert";
import { solutions } from "./solution";

describe('525f50e3b73515a6db000b83', () => {
  Object.entries(solutions).forEach(([name, func]) => {
    if (typeof func === 'function') {
      it(name, () => {
        assert.equal(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.equal(func([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        assert.equal(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
      });
    }
  });
});