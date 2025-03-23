// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript
// npm run benchmark:one src/52b7ed099cdc285c300001cd/solution.bench.ts

import { runBenchmark } from "../shared/bench/runBenchmark";
import { solutions } from "./solution";
import path from "path";

const reportDir = path.join(__dirname);
runBenchmark(solutions, [[1, 5], [10, 15], [20, 25], [12, 18], [2, 6], [16, 22], [30, 40], [35, 45],
  [5, 10], [50, 60], [55, 65], [62, 70], [80, 90], [85, 95], [88, 92],
  [100, 200], [150, 250], [175, 225], [300, 400], [350, 375], [500, 600],
  [550, 650], [625, 700], [800, 1000]], reportDir);

// runBenchmark(solutions, [[[0, 20], [-1e8, 10], [30, 40]]], reportDir);