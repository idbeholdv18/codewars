import Benchmark from "benchmark";
import { SolutionMap } from "./SolutionMap.type";

export function addBenchmarksToSuite(suite: Benchmark.Suite, solutions: SolutionMap, input: any[]): void {
  Object.keys(solutions).forEach((key) => {
    const func = solutions[key];
    if (typeof func === 'function') {
      suite.add(func.name, function () {
        func(input);
      });
    }
  });
}