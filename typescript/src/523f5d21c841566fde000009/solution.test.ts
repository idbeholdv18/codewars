// https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript
// npm test src/523f5d21c841566fde000009/solution.test.ts

import assert from "assert";
import { solutions } from "./solution";

describe('520b9d2ad5c005041100000f', () => {
  Object.entries(solutions).forEach(([name, func]) => {
    if (typeof func === 'function') {
      it(name, () => {
        assert.deepEqual(func([], [4, 5]), []);
        assert.deepEqual(func([3, 4], [3]), [4]);
        assert.deepEqual(func([1, 8, 2], []), [1, 8, 2]);
        assert.deepEqual(func([1, 2, 3], [1, 2]), [3]);
      });
    }
  });
});