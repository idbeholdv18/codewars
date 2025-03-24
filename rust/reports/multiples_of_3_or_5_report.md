# Report for multiples_of_3_or_5
Date: 2025-03-24 21:13:03

## Description
[Link](https://www.codewars.com/kata/514b92a657cdc65150000006/train/rust) to original task  
[Link](https://github.com/idbeholdv18/codewars/tree/master/rust/src/tasks/multiples_of_3_or_5.rs) to my decision  
## Running scripts
To run tests:
```
cargo test --test multiples_of_3_or_5_test --lib -- --skip doctests
```
To run benchmarks:
```
cargo bench --bench multiples_of_3_or_5_bench
```

## Benchmark results
```
   Compiling codewars v0.1.0 (/Users/idbeholdv/WebstormProjects/codewars/rust)
    Finished `bench` profile [optimized] target(s) in 0.93s
     Running benches/multiples_of_3_or_5_bench.rs (target/release/deps/multiples_of_3_or_5_bench-5d8861d67559b49d)
Gnuplot not found, using plotters backend
Benchmarking multiples_of_3_or_5 1000
Benchmarking multiples_of_3_or_5 1000: Warming up for 3.0000 s
Benchmarking multiples_of_3_or_5 1000: Collecting 100 samples in estimated 5.0029 s (8.3M iterations)
Benchmarking multiples_of_3_or_5 1000: Analyzing
multiples_of_3_or_5 1000
                        time:   [599.09 ns 602.38 ns 605.82 ns]
                        change: [-1.2590% -0.7301% -0.1809%] (p = 0.01 < 0.05)
                        Change within noise threshold.
Found 1 outliers among 100 measurements (1.00%)
  1 (1.00%) high mild

```
