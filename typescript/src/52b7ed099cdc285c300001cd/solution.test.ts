// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript
// npm test src/52b7ed099cdc285c300001cd/solution.test.ts

import assert from "assert";
import { solutions } from "./solution";

describe('52b7ed099cdc285c300001cd', () => {
  Object.entries(solutions).forEach(([name, func]) => {
    if (typeof func === 'function') {
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[1, 5]]), 4);
      });
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[1, 5], [6, 10]]), 8);
      });
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[1, 5], [1, 5]]), 4);
      });
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[1, 4], [7, 10], [3, 5]]), 7);
      });
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[-1e9, 1e9]]), 2e9);
      });
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[0, 20], [-1e8, 10], [30, 40]]), 1e8 + 30);
      });
      it(`Solution ${+name + 1}`, () => {
        assert.equal(func([[1, 5], [10, 15], [20, 25], [12, 18], [2, 6], [16, 22], [30, 40], [35, 45],
          [5, 10], [50, 60], [55, 65], [62, 70], [80, 90], [85, 95], [88, 92],
          [100, 200], [150, 250], [175, 225], [300, 400], [350, 375], [500, 600],
          [550, 650], [625, 700], [800, 1000]]), 724);
      });
    }
  });
});