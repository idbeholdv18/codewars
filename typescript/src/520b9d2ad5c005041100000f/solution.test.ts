// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
// npm test src/520b9d2ad5c005041100000f/solution.test.ts

import assert from "assert";
import { solutions } from "./solution";

describe('520b9d2ad5c005041100000f', () => {
  Object.entries(solutions).forEach(([name, func]) => {
    if (typeof func === 'function') {
      it(name, () => {
        assert.equal(func('Pig latin is cool'), 'igPay atinlay siay oolcay');
        assert.equal(func('This is my string'), 'hisTay siay ymay tringsay');
        assert.equal(func('Hello world !'), 'elloHay orldway !');
      });
    }
  });
});