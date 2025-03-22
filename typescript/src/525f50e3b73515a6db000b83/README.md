# Benchmark Results for "Create Phone Number" task

This file contains benchmark results for different versions of the "Create Phone Number" solver. The benchmarks and tests were run on the
following functions:

- `createPhoneNumberV1`
- `createPhoneNumberV2`
- `createPhoneNumberV3`
- `createPhoneNumberV4`
- `createPhoneNumberV5`

You can view the original task on [Codewars](https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript).

To run tests:  
```npm test src/525f50e3b73515a6db000b83/solution.test.ts```  
To run benchmark:  
``` npm run benchmark:one src/525f50e3b73515a6db000b83/solution.bench.ts```

## Benchmark Results - 3/22/2025, 4:56:45 PM
| Name                   | Hz (ops/sec) | Margin (%) | Runs | Mean Time (ms) | Deviation (ms) |
|------------------------|--------------|------------|------|-----------------|----------------|
|**createPhoneNumberV2**|759678071.23|0.65|98|0.000000|0.000000|
|createPhoneNumberV3|757221113.09|0.56|94|0.000000|0.000000|
|createPhoneNumberV4|21264690.53|1.41|93|0.000000|0.000000|
|createPhoneNumberV1|12147105.60|0.30|96|0.000000|0.000000|
|createPhoneNumberV5|2812261.27|0.59|96|0.000000|0.000000|


