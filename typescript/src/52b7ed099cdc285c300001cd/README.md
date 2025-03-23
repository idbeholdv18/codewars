# Benchmark Results for "Sum of Intervals" task

This file contains benchmark results for different versions of the "Sum of Intervals" solver. The benchmarks and tests
were run on the
following functions:

- `sumOfIntervalsV1`
- `sumOfIntervalsV2`
- `sumOfIntervalsV3`

You can view the original task on [Codewars](https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript).

To run tests:  
```npm test src/52b7ed099cdc285c300001cd/solution.test.ts```  
To run benchmark:  
``` npm run benchmark:one src/52b7ed099cdc285c300001cd/solution.bench.ts```

## Benchmark Results - 3/23/2025, 2:30:46 PM

| Name                 | Hz (ops/sec) | Margin (%) | Runs | Mean Time (ms) | Deviation (ms) |
|----------------------|--------------|------------|------|----------------|----------------|
| **sumOfIntervalsV2** | 3347175.44   | 0.13       | 98   | 0.000000       | 0.000000       |
| sumOfIntervalsV3     | 2970542.45   | 0.71       | 96   | 0.000000       | 0.000000       |
| sumOfIntervalsV1     | 2748838.80   | 0.21       | 100  | 0.000000       | 0.000000       |

## Benchmark Results - 3/23/2025, 2:35:50 PM

| Name                 | Hz (ops/sec) | Margin (%) | Runs | Mean Time (ms) | Deviation (ms) |
|----------------------|--------------|------------|------|----------------|----------------|
| **sumOfIntervalsV1** | 3566837.42   | 0.31       | 96   | 0.000000       | 0.000000       |
| sumOfIntervalsV2     | 3368130.40   | 0.68       | 98   | 0.000000       | 0.000000       |
| sumOfIntervalsV3     | 3345892.57   | 0.91       | 92   | 0.000000       | 0.000000       |


