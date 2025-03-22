// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
// npm run benchmark:one src/520b9d2ad5c005041100000f/solution.bench.ts

import { runBenchmark } from "../shared/bench/runBenchmark";
import { solutions } from "./solution";
import path from "path";

const reportDir = path.join(__dirname);
runBenchmark(solutions, "This is my string", reportDir);