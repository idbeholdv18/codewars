// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript
// npm run benchmark:one src/525f50e3b73515a6db000b83/solution.bench.ts

import { runBenchmark } from "../shared/bench/runBenchmark";
import { solutions } from "./solution";
import path from "path";

const reportDir = path.join(__dirname);
runBenchmark(solutions, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], reportDir);