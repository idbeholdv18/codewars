# Benchmark Results for "Simple Pig Latin" task

This file contains benchmark results for different versions of the "Simple Pig Latin" solver. The benchmarks and tests
were run on the
following functions:

- `simplePigLatinV1`
- `simplePigLatinV2`
- `simplePigLatinV3`

You can view the original task on [Codewars](https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript).

To run tests:  
```npm test src/520b9d2ad5c005041100000f/solution.test.ts```  
To run benchmark:  
``` npm run benchmark:one src/520b9d2ad5c005041100000f/solution.bench.ts```

## Benchmark Results - 3/22/2025, 7:04:13 PM

| Name                 | Hz (ops/sec) | Margin (%) | Runs | Mean Time (ms) | Deviation (ms) |
|----------------------|--------------|------------|------|----------------|----------------|
| **simplePigLatinV1** | 3760700.69   | 0.12       | 96   | 0.000000       | 0.000000       |
| simplePigLatinV2     | 3529331.35   | 1.18       | 96   | 0.000000       | 0.000000       |
| simplePigLatinV3     | 3421584.62   | 0.90       | 95   | 0.000000       | 0.000000       |
