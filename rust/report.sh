#!/bin/bash

if [ $# -lt 2 ]; then
    echo "Usage: $0 <benchmark_name> <task_id>"
    exit 1
fi

task_name="$1"
task_id="$2"
benchmark_name="$1_bench"

report_dir="./reports"

mkdir -p "$report_dir"

report_file="${report_dir}/${task_name}_report.md"

current_date=$(date +"%Y-%m-%d %H:%M:%S")

{
    echo "# Report for $task_name"
    echo "Date: $current_date"
    echo ""
    echo "## Description"
    echo "[Link](https://www.codewars.com/kata/$task_id/train/rust) to original task  "
    echo "[Link](https://github.com/idbeholdv18/codewars/tree/master/rust/src/tasks/$task_name.rs) to my decision  "
    echo "## Running scripts"
    echo "To run tests:"
    echo '```'
    echo 'cargo test --test' "$task_name"'_test --lib -- --skip doctests'
    echo '```'
    echo "To run benchmarks:"
    echo '```'
    echo 'cargo bench --bench' "$task_name"'_bench'
    echo '```'
    echo ""
    echo "## Benchmark results"
    echo '```'
} > "$report_file"

cargo bench --bench "$benchmark_name" >> "$report_file" 2>&1

echo '```' >> "$report_file"

echo "'$benchmark_name' benchmark report saved to '$report_file'"
