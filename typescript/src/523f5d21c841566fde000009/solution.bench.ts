// https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript
// npm run benchmark:one src/523f5d21c841566fde000009/solution.bench.ts

import { runBenchmark } from "../shared/bench/runBenchmark";
import { solutions } from "./solution";
import path from "path";

const reportDir = path.join(__dirname);
runBenchmark(solutions, [[35, 23, 60, 8, 27, 46, 3, 20, 19, 63, 67, 0, 12, 9, 74, 2, 15, 67, 83, 79, 38, 80, 23], [26, 98, 76, 86, 40, 80, 57, 67, 86, 38, 9, 38, 85, 69, 95, 52, 23, 82, 75, 31, 0, 37, 43, 6, 22, 61, 63, 72, 29, 35, 63, 57, 88, 93, 63, 73, 78]], reportDir);