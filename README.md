# Solutions to Codewars Challenges

![Codewars Badge](https://www.codewars.com/users/idbeholdv18/badges/large)

This repository contains my solutions to various challenges from Codewars. The challenges are organized by language.
Each solution is accompanied by tests, benchmarks, and instructions to ensure correctness and performance.

**Check out my Codewars profile [here](https://www.codewars.com/users/idbeholdv18/).**

## Repository Structure

```
root/
├── {language}/
│   ├── src/
│   │   ├── {id_of_challenge}/
│   │   │   ├── solution.{language_extension}           # The solution file
│   │   │   ├── solution.test.{language_extension}      # Tests for the solution
│   │   │   ├── solution.bench.{language_extension}     # Benchmark for the solution
│   │   │   ├── README.md                               # Instructions for running benchmarks, tests, and results
│   │   ├── shared/
│   │   │   └── ...                                     # Shared utility functions for benchmarking, testing, etc.
│   ├── {config_files}                                  # Configuration files for the language (e.g., TypeScript configs)
```

- {language}/src/{id_of_challenge}/ — Folder for each challenge, identified by its unique ID.
    - solution.{language_extension} — The solution file for the challenge.
    - solution.test.{language_extension} — Test cases for the solution.
    - solution.bench.{language_extension} — Benchmark for the solution.
    - README.md — Instructions on how to run benchmarks, tests, and the results from specific dates.
- {language}/src/shared/ — Shared functions used for benchmarking, testing, and other utilities.
- {language}/config/ — Configuration files (e.g., TypeScript or other language-specific configurations).

## Getting Started

Follow the instructions below to clone the repository, install necessary dependencies, and run the tests and benchmarks.

### 1. Clone the Repository

```
git clone https://https://github.com/idbeholdv18/codewars.git
cd your_repository
```

### Typesript steps:

### 2. Install Dependencies

If you’re using TypeScript, you’ll need to install the dependencies using npm:

```
npm install
```

### 3. Running Tests

To run the tests, execute the following command or follow instructions from `{language}/src/{id_of_challenge}/README.md`

```
npm test src/{id_of_challenge}/solution.test.ts
```

This will run all the tests defined in solution.test.{language_extension}.

### 4. Running Benchmarks

To run the benchmarks, execute the following command or follow instructions from
`{language}/src/{id_of_challenge}/README.md`

```
npm run benchmark:one src/{id_of_challenge}/solution.bench.ts
```

## List of solutions

### 1. Create Phone Number - 6 kyu

- Typescript
    - [Task](https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript)
    - [Solution](https://github.com/idbeholdv18/codewars/tree/master/typescript/src/525f50e3b73515a6db000b83)

### 2. Simple Pig Latin - 5 kyu

- Typescript
    - [Task](https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript)
    - [Solution](https://github.com/idbeholdv18/codewars/tree/master/typescript/src/520b9d2ad5c005041100000f)

### 3. Sum of Intervals - 4 kyu

- Typescript
    - [Task](https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript)
    - [Solution](https://github.com/idbeholdv18/codewars/tree/master/typescript/src/52b7ed099cdc285c300001cd)

### 4. Multiples of 3 or 5 - 6 kyu

- Rust
    - [Task](https://www.codewars.com/kata/514b92a657cdc65150000006/train/rust)
    - [Solution](https://github.com/idbeholdv18/codewars/tree/master/rust/src/tasks/multiples_of_3_or_5.rs)

### 5. Vowel Count - 7 kyu

- Rust
    - [Task](https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/rust)
    - [Solution](https://github.com/idbeholdv18/codewars/tree/master/rust/src/tasks/vowel_count.rs)

### 6. Array.diff - 6 kyu

- Typescript
  - [Task](https://www.codewars.com/kata/523f5d21c841566fde000009/train/rust)
  - [Solution](https://github.com/idbeholdv18/codewars/tree/master/typescript/src/523f5d21c841566fde000009)

### 7. Password validator - 7 kyu

- C++
  - [Task](https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/cpp)
  - [Solution](https://github.com/idbeholdv18/codewars/tree/master/cpp/src/password_validator/password_validator.cpp)