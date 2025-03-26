# Report for vowel_count
Date: 2025-03-26 19:03:03

## Description
[Link](https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/rust) to original task  
[Link](https://github.com/idbeholdv18/codewars/tree/master/rust/src/tasks/vowel_count.rs) to my decision  
## Running scripts
To run tests:
```
cargo test --test vowel_count_test --lib -- --skip doctests
```
To run benchmarks:
```
cargo bench --bench vowel_count_bench
```

## Benchmark results
```
   Compiling codewars v0.1.0 (/Users/idbeholdv/WebstormProjects/codewars/rust)
warning: unused variable: `i`
 --> src/tasks/vowel_count.rs:3:10
  |
3 |     for (i, c) in string.chars().enumerate() {
  |          ^ help: if this is intentional, prefix it with an underscore: `_i`
  |
  = note: `#[warn(unused_variables)]` on by default

warning: `codewars` (lib) generated 1 warning
    Finished `bench` profile [optimized] target(s) in 1.14s
     Running benches/vowel_count_bench.rs (target/release/deps/vowel_count_bench-f21f2d0555a7bc7e)
Gnuplot not found, using plotters backend
Benchmarking vowel_count 1000
Benchmarking vowel_count 1000: Warming up for 3.0000 s
Benchmarking vowel_count 1000: Collecting 100 samples in estimated 5.0000 s (485M iterations)
Benchmarking vowel_count 1000: Analyzing
vowel_count 1000        time:   [9.7894 ns 9.8133 ns 9.8455 ns]
Found 13 outliers among 100 measurements (13.00%)
  3 (3.00%) high mild
  10 (10.00%) high severe

```
