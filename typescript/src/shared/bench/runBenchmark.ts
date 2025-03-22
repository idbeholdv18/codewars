import Benchmark from "benchmark";
import path from "path";
import { SolutionMap } from "./SolutionMap.type";
import { addBenchmarksToSuite } from "./addBenchmarksToSuite";
import { generateMarkdownReport } from "./generateMarkdownReport";
import { saveReportToFile } from "./saveReportToFile";

export function runBenchmark(solutions: any, input: any, reportDir: string) {
  const suite = new Benchmark.Suite();
  const solutionsTyped = solutions as unknown as SolutionMap;

  addBenchmarksToSuite(suite, solutionsTyped, input);

  suite
    .on("cycle", function (event: Benchmark.Event) {
      console.log(String(event.target));
    })
    .on("complete", function (this: Benchmark.Suite) {
      console.log("Fastest is " + this.filter("fastest").map("name"));
      const results = this.map((benchmark: Benchmark) => {
        return {
          name: benchmark.name,
          hz: benchmark.hz.toFixed(2),
          margin: benchmark.stats.rme.toFixed(2),
          runs: benchmark.stats.sample.length,
          mean: benchmark.stats.mean.toFixed(6),
          deviation: benchmark.stats.deviation.toFixed(6),
        };
      });

      results.sort((a, b) => parseFloat(b.hz) - parseFloat(a.hz));

      const markdownReport = generateMarkdownReport(results);
      const reportPath = path.join(reportDir, 'README.md');
      saveReportToFile(markdownReport, reportPath);

      console.table(results);
    })
    .run({ async: true });
}