use codewars::tasks::vowel_count::get_count;
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("vowel_count 1000", |b| {
        b.iter(|| get_count(black_box("abracadabra")))
    });
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
