use criterion::{black_box, criterion_group, criterion_main, Criterion};
use codewars::tasks::multiples_of_3_or_5::multiples_of_3_or_5;

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("multiples_of_3_or_5 1000", |b| {
        b.iter(|| multiples_of_3_or_5(black_box(1000)))
    });
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);